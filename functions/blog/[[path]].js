export async function onRequest(context) {
  // context.request contains the incoming request from the user
  const url = new URL(context.request.url);

  // The target IP address where your WordPress server is hosted
  const targetIp = '35.207.229.184';

  // Construct the new URL. 
  // url.pathname keeps the /blog/... structure
  // url.search keeps any query parameters
  const targetUrl = `http://${targetIp}${url.pathname}${url.search}`;

  // Create a new request object to send to the WordPress server
  const proxyRequest = new Request(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
    redirect: 'manual',
  });

  // Set standard proxy headers so WordPress knows what domain the user typed
  proxyRequest.headers.set('Host', url.hostname);
  proxyRequest.headers.set('X-Forwarded-Host', url.hostname);
  proxyRequest.headers.set('X-Forwarded-Proto', 'https');

  // If Cloudflare provides the IP, pass it to WordPress
  const clientIp = context.request.headers.get('CF-Connecting-IP');
  if (clientIp) {
    proxyRequest.headers.set('X-Real-IP', clientIp);
  }

  // Fetch the response from the WordPress server
  const response = await fetch(proxyRequest);

  // Return the response back to the user
  return response;
}
