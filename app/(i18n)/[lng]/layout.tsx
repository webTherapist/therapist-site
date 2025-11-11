import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { loadDict, LANGS, type Lang } from "@/lib/i18n";

export async function generateStaticParams() {
  return LANGS.map(lng => ({ lng }));
}

export default async function I18nLayout({ params, children }: { params: { lng: Lang }, children: React.ReactNode }) {
  const dict = await loadDict(params.lng);
  return (
    <html lang={params.lng}>
      <body>
        <Header lng={params.lng} dict={dict} />
        <main className="container-xl py-10">{children}</main>
        <Footer lng={params.lng} dict={dict} />
      </body>
    </html>
  );
}
