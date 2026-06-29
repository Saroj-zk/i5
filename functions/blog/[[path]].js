export async function onRequest(context) {
  try {
    const url = new URL(context.request.url);

    // Strip /blog prefix: /blog/foo -> /foo, /blog -> /
    const blogPath = url.pathname.replace(/^\/blog/, "") || "/";
    const targetUrl = new URL(blogPath + url.search, "https://blog.i5.xyz");

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
        const rewritten = cookie
          .replace(/;\s*domain=[^;]*/i, "")
          .replace(/;\s*path=([^;]*)/i, (_, p) => {
            const normalized = p.replace(/^\/blog/, "") || "/";
            return `; Path=/blog${normalized === "/" ? "" : normalized}`;
          });
        resHeaders.append("set-cookie", rewritten);
      }
    }

    // Rewrite Location header on redirects (e.g. after wp-login.php)
    const location = upstream.headers.get("location");
    if (location) {
      resHeaders.set(
        "location",
        location.replace("https://blog.i5.xyz", "https://www.i5.xyz/blog")
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
