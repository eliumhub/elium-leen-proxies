

export async function onRequestGet() {
  return new Response(
    JSON.stringify({
      status: "ok",
      service: "Elium Leen Proxies"
    }),
    {
      headers: {
        "content-type": "application/json"
      }
    }
  );
}
