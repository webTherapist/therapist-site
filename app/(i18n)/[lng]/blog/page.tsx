import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";

export default function BlogIndex({ params }: { params: { lng: Lang } }) {
  const dir = path.join(process.cwd(), "content/blog");
  const posts = fs.readdirSync(dir).filter(f => f.endsWith(".md")).map(file => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(raw);
    return data as any;
  }).sort((a,b) => (a.date > b.date ? -1 : 1));

  return (
    <div className="container-xl max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug} className="border-b pb-4">
            <Link href={`/${params.lng}/blog/${p.slug}`} className="text-xl font-medium hover:underline">{p.title}</Link>
            <div className="text-sm text-gray-500">{p.date}</div>
            <p className="text-gray-700 mt-2">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
