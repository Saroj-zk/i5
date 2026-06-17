export async function onRequest(context) {
    const url = new URL(context.request.url);
  
    const path = url.pathname;
    const search = url.search;
  
    const target = `https://blog.i5.xyz/${path}${search}`;
  
    return fetch(target, {
      method: context.request.method,
      headers: context.request.headers,
      body:
        context.request.method === "GET" ||
        context.request.method === "HEAD"
          ? undefined
          : context.request.body,
    });
  }
