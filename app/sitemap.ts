import { LANGS } from "@/lib/i18n";
export default function sitemap() {
  const base = "https://YOUR-SITE.netlify.app";
  const routes = ["", "/work-with-me", "/services", "/blog", "/contact", "/book"];
  return routes.flatMap(r => LANGS.map(l => ({ url: `${base}/${l}${r}`, lastModified: new Date() })));
}
