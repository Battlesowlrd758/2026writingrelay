export async function onRequestPost(context) {
  var body;

  try {
    body = await context.request.json();
  } catch (error) {
    return new Response(JSON.stringify({ error: "Access Denied" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  var password = typeof body.password === "string" ? body.password : "";
  var expectedPassword = context.env.ADMIN_SECRET_PASSWORD;

  if (!expectedPassword || password !== expectedPassword) {
    return new Response(JSON.stringify({ error: "Access Denied" }), {
      status: 401,
      headers: { "Content-Type": "application/json" }
    });
  }

  var pageUrl = new URL(context.request.url);
  var qrBaseUrl = new URL("/", pageUrl).toString();

  return new Response(JSON.stringify({
    adminData: {
      totalStamps: 13,
      qrBaseUrl: qrBaseUrl,
      storageKey: "inkTrailStamps_v1"
    }
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}