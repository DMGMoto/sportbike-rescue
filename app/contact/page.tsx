import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Support — Sportbike Rescue",
  description:
    "Get in touch about adopting, surrendering, volunteering, or supporting the rescue. Based in Huntington Beach, CA.",
};

const INFO = [
  { label: "The garage", value: "Huntington Beach, CA" },
  { label: "Open for visits", value: "Sat–Sun, 9am–3pm (by appointment)" },
  { label: "Email", value: "pack@sportbikerescue.com" },
  { label: "Phone", value: "(714) 313-0459" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Say hello · lend a hand"
        title="Contact & support"
        intro="Adopting, surrendering, volunteering, or chipping in — every message helps another bike find the road again."
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <aside>
            <dl className="space-y-5">
              {INFO.map((row) => (
                <div key={row.label} className="border-b border-paper/10 pb-4">
                  <dt className="text-xs uppercase tracking-wider text-paper/50">
                    {row.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg uppercase tracking-wide">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-sm bg-signal p-6 text-ink-900">
              <h3 className="font-display text-xl uppercase tracking-wide">
                Support the rescue
              </h3>
              <p className="mt-2 text-sm text-ink-900/80">
                We are volunteer-run. Every dollar buys tires, fluids, and second
                chances. Pick &ldquo;Donating&rdquo; in the form and we will send
                ways to give.
              </p>
              <p className="mt-3 font-hand text-lg">Adopt, don&apos;t shop! 🐾</p>
            </div>
          </aside>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
