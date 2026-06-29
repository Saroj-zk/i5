export async function onRequest(context) {
  try {
    const url = new URL(context.request.url);

    // Normalise: /blog → /blog/ to avoid Nginx issuing a redirect to the
    // upstream domain (blog.i5.xyz) which would leak out to the browser.
    if (url.pathname === "/blog") {
      return Response.redirect("https://www.i5.xyz/blog/", 302);
    }

    // Keep /blog prefix: www.i5.xyz/blog/foo -> blog.i5.xyz/blog/foo
    // WordPress is installed at blog.i5.xyz/blog/ (not root)
    const targetUrl = new URL(url.pathname + url.search, "https://blog.i5.xyz");

    // Forward all headers but set Host to the upstream WordPress host.
    // Also strip CF-injected headers that should not be forwarded upstream.
    const reqHeaders = new Headers(context.request.headers);
    reqHeaders.set("Host", "blog.i5.xyz");
    reqHeaders.set("X-Forwarded-Host", "www.i5.xyz");
    reqHeaders.set("X-Forwarded-Proto", "https");
    reqHeaders.delete("cf-connecting-ip");
    reqHeaders.delete("cf-ipcountry");
    reqHeaders.delete("cf-ray");
    reqHeaders.delete("cf-visitor");

    const upstream = await fetch(targetUrl.toString(), {
      method: context.request.method,
      headers: reqHeaders,
      body: ["GET", "HEAD"].includes(context.request.method)
        ? undefined
        : context.request.body,
      redirect: "manual",
    });

    const resHeaders = new Headers(upstream.headers);

    // Rewrite Set-Cookie: domain must be www.i5.xyz and path /blog
    // so the browser sends cookies back on subsequent /blog/* requests.
    const cookies = upstream.headers.getSetCookie?.() ?? [];
    if (cookies.length > 0) {
      resHeaders.delete("set-cookie");
      for (const cookie of cookies) {
        // Change domain to www.i5.xyz; path stays as-is since
        // WordPress already sets path=/blog/ which matches our proxy path.
        const rewritten = cookie.replace(/;\s*domain=[^;]*/i, "");
        resHeaders.append("set-cookie", rewritten);
      }
    }

    // Rewrite Location header on redirects (e.g. after wp-login.php).
    // Replace just the domain (handles both http:// and https://) so that
    // blog.i5.xyz/blog/foo becomes www.i5.xyz/blog/foo — not double /blog.
    const location = upstream.headers.get("location");
    if (location) {
      resHeaders.set(
        "location",
        location.replace(/^https?:\/\/blog\.i5\.xyz/, "https://www.i5.xyz")
      );
    }

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: resHeaders,
    });
  } catch (err) {
    return new Response("Blog unavailable: " + err.message, { status: 502 });
  }
}
