"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LangSwitcher from "./LangSwitcher";
import type { Lang } from "@/lib/i18n";

export default function Header({ lng, dict }: { lng: Lang; dict: any }) {
  const pathname = usePathname() || `/${lng}`;
  const base = `/${lng}`;
  const nav = [
    { href: `${base}/work-with-me`, label: dict.nav.work },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/blog`, label: dict.nav.blog },
    { href: `${base}/contact`, label: dict.nav.contact }
  ];

  return (
    <header className="border-b border-gray-200">
      <div className="container-xl flex items-center justify-between h-20">
        <Link href={base} className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-900" />
          <div className="leading-tight">
            <div className="font-semibold">{dict.name}</div>
            <div className="text-xs text-gray-500">{dict.role}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map(i => (
            <Link key={i.href} href={i.href} className="header-link">
              {i.label}
            </Link>
          ))}
          <Link href={`${base}/book`} className="btn-primary">
            {dict.nav.book}
          </Link>
          <LangSwitcher current={lng} pathname={pathname} />
        </nav>

        <div className="md:hidden">
          {/* Mobile menu placeholder */}
        </div>
      </div>
    </header>
  );
}
