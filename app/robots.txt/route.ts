import { site } from "@/lib/site";

// Plain Route Handler implementation of robots.txt — see app/sitemap.xml/route.ts
// for the reason we don't use the convention-based file.

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${site.url}/sitemap.xml`,
    `Host: ${site.url}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
