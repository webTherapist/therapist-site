import type { Lang } from "@/lib/i18n";
export default function Page({ params }: { params: { lng: Lang } }) {
  return (
    <div className="container-xl max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold">Booking</h1>
      <p>When you have a booking link (Calendly/Cal.com), we can embed it below.</p>
      <div className="aspect-video w-full rounded-2xl border">
        <iframe title="Booking" className="w-full h-full rounded-2xl" src="https://calendly.com/" />
      </div>
    </div>
  );
}
