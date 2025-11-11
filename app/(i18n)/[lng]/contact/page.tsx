import type { Lang } from "@/lib/i18n";

export default function Page({ params }: { params: { lng: Lang } }) {
  return (
    <div className="container-xl max-w-3xl">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <form className="grid gap-4">
        <input className="border rounded-xl p-3" placeholder="Your name" aria-label="Your name" />
        <input type="email" className="border rounded-xl p-3" placeholder="Email" aria-label="Email" />
        <textarea className="border rounded-xl p-3" rows={6} placeholder="Message" aria-label="Message" />
        <button className="btn-primary" type="submit">Send</button>
      </form>
    </div>
  );
}
