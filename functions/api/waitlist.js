export async function onRequestPost(context) {
  try {
    const request = context.request;
    
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfqqaFxJvirBAT3tn6JeELA_DzjlCRytQww3HzfEJNo1kKLGw/formResponse";
    
    // Forward the POST request to Google Forms
    await fetch(formUrl, {
      method: "POST",
      body: request.body,
      headers: {
        "Content-Type": request.headers.get("Content-Type") || "application/x-www-form-urlencoded",
      }
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
