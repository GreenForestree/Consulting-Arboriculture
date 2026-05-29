import { site } from "@/lib/site";

// Plain Route Handler implementation of sitemap.xml. We don't use the
// convention-based `app/sitemap.ts` because Next 14's metadata-route loader
// emits a generated module that breaks parse when the project path contains
// an apostrophe ("Oni's Consulting Arborist"). This file sidesteps that.

const routes = ["", "/services", "/about", "/process", "/resources", "/contact"];

export function GET() {
  const lastmod = new Date().toISOString();
  const urls = routes
    .map((path) => {
      const loc = `${site.url}${path}`;
      const priority = path === "" ? "1.0" : "0.7";
      const changefreq = path === "" ? "monthly" : "yearly";
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
