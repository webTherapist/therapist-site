import type { Lang } from "@/lib/i18n";

export default function Footer({ lng, dict }: { lng: Lang; dict: any }) {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container-xl py-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} {dict.name}. All rights reserved.</div>
        <div>Privacy • Terms</div>
      </div>
    </footer>
  );
}
