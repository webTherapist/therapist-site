import Link from "next/link";
import { loadDict, type Lang } from "@/lib/i18n";
import { readMD } from "@/lib/md";

export default async function Home({ params }: { params: { lng: Lang } }) {
  const dict = await loadDict(params.lng);
  const { html } = await readMD("content/home.md");
  return (
    <div className="space-y-10">
      <section className="container-xl grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">{dict.hero.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{dict.hero.subtitle}</p>
          <Link href={`/${params.lng}/book`} className="btn-primary">{dict.cta}</Link>
        </div>
        <img src="/images/hero.jpg" alt="Therapy session" className="w-full rounded-2xl shadow" />
      </section>

      <article className="container-xl prose prose-gray max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
