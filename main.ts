import { serve } from "https://deno.land/std@0.150.0/http/server.ts";

console.log("Listening on http://localhost:8000");

serve((request) => {
  const searchParams = new URL(request.url).searchParams;
  const w = parseInt(searchParams.get("w") ?? "400");
  const h = parseInt(searchParams.get("h") ?? "300");
  const fg = searchParams.get("fg") ?? "FFF";
  const bg = searchParams.get("bg") ?? "CCC";
  const t = searchParams.get("t") ?? `${w}x${h}`;
  const fontSize = h / 4;
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>
  <rect x='0' y='0' width='${w}' height='${h}' fill='#${bg}'/>
  <text x='50%' y='50%' style='dominant-baseline:middle;text-anchor:middle;font-size:${fontSize}px' fill='#${fg}'>${t}</text>
</svg>`;
  return new Response(svg, {
    headers: { "content-type": "image/svg+xml" },
  });
});
