import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Lang } from "@/lib/i18n";

export default async function BlogPost({ params }: { params: { lng: Lang; slug: string } }) {
  const file = path.join(process.cwd(), "content/blog", `${params.slug}.md`);
  const raw = fs.readFileSync(file, "utf8");
  const { content, data } = matter(raw);
  const processed = await remark().use(html).process(content);
  return (
    <article className="container-xl prose max-w-3xl">
      <h1>{data.title as string}</h1>
      <p className="text-sm text-gray-500">{String(data.date)}</p>
      <div dangerouslySetInnerHTML={{ __html: String(processed) }} />
    </article>
  );
}
