"use client";
import Link from "next/link";
import { LANGS, type Lang } from "@/lib/i18n";

export default function LangSwitcher({ current, pathname }: { current: Lang; pathname: string | null }) {
  const path = pathname || "/";
  const rest = path.split("/").slice(2).join("/");
  return (
    <div className="flex items-center gap-2 text-sm">
      {LANGS.map(l => (
        <Link key={l} href={`/${l}/${rest}`} className={"header-link" + (l === current ? " font-semibold" : "")}>{l.toUpperCase()}</Link>
      ))}
    </div>
  );
}
