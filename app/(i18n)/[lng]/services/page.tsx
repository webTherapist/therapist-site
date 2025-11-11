import { readMD } from "@/lib/md";
import type { Lang } from "@/lib/i18n";

export default async function Page({ params }: { params: { lng: Lang } }) {
  const { html } = await readMD("content/services.md");
  return <div className="container-xl prose max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />;
}
