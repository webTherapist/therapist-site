import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kovalova Olha Viktorovna – Therapist",
  description: "Therapy website in English, Russian, Ukrainian. Book a consultation.",
  metadataBase: new URL("https://YOUR-SITE.netlify.app"),
  openGraph: {
    title: "Kovalova Olha Viktorovna – Therapist",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
