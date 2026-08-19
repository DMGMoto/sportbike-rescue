import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import SurrenderForm from "@/components/SurrenderForm";

export const metadata: Metadata = {
  title: "Surrender a Bike — Sportbike Rescue",
  description:
    "Need to rehome a forgotten sportbike? Surrender it to the rescue. No bike too rough, no judgment, no cost.",
};

const PROMISES = [
  { t: "No bike too rough", d: "Seized, crashed, or in boxes — bring it. We assess everything." },
  { t: "No cost to you", d: "Surrendering is always free. We even help with pickup nearby." },
  { t: "A real second chance", d: "Every surrender enters foster care and finds a forever garage." },
];

export default function SurrenderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rehome with heart"
        title="Surrender a bike"
        intro="Life happens. Garages get crowded, projects stall, priorities change. If you have a vintage sportbike that needs a new chapter, we will take it from here."
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-4">
            {PROMISES.map((p) => (
              <div
                key={p.t}
                className="rounded-sm border-l-4 border-signal bg-ink-800/40 p-4"
              >
                <h3 className="font-display text-lg uppercase tracking-wide">
                  {p.t}
                </h3>
                <p className="mt-1 text-sm text-paper/70">{p.d}</p>
              </div>
            ))}
            <p className="font-hand text-xl text-signal">
              Adopt, don&apos;t shop — and surrender, don&apos;t scrap.
            </p>
          </aside>

          <SurrenderForm />
        </div>
      </div>
    </>
  );
}
