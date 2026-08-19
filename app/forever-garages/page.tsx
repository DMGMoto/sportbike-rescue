import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/Section";
import BikeSketch from "@/components/BikeSketch";
import { foreverGarages } from "@/lib/bikes";

export const metadata: Metadata = {
  title: "Forever Garages — Sportbike Rescue",
  description:
    "Happy bikes, happy riders, happy endings. Postcards from the forever garages our rescues now call home.",
};

export default function ForeverGaragesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Happy endings"
        title="Forever garages"
        intro="The whole point. Postcards, updates, and a little bragging from the riders who opened their garages to a rescue."
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {foreverGarages.map((g) => (
            <figure
              key={g.owner}
              className="paper-card flex flex-col gap-4 p-6 sm:flex-row"
            >
              <div className="shrink-0 overflow-hidden rounded-[3px] border border-paper-edge bg-[#dcd4bf] sm:w-40">
                <BikeSketch color={g.color} accent="#F4EFE3" className="h-28 w-full" />
              </div>
              <div className="text-ink-900">
                <span className="font-hand text-3xl text-rescue-red" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="-mt-3 text-sm leading-relaxed text-ink-900/85">
                  {g.quote}
                </blockquote>
                <figcaption className="mt-3">
                  <p className="font-display text-lg uppercase leading-none tracking-wide">
                    {g.owner}
                  </p>
                  <p className="text-xs text-ink-700">
                    {g.bike} · {g.location}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-12 rounded-md border border-paper/10 bg-ink-800/40 p-8 text-center">
          <h2 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
            Got room in your garage?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-paper/75">
            There is a forgotten sportbike out there with your name on it. Browse
            the kennel and find the one that fits.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/adopt" className="btn-yellow">
              Meet available bikes <span aria-hidden>🐾</span>
            </Link>
            <Link href="/surrender" className="btn-outline">
              Surrender a bike
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
