import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/Section";
import RescueTimeline from "@/components/RescueTimeline";
import StatusBadge from "@/components/StatusBadge";
import { bikes } from "@/lib/bikes";

export const metadata: Metadata = {
  title: "Rescue Stories — Sportbike Rescue",
  description:
    "Before, during, and after. Follow the restoration journeys of the bikes we have brought back from the brink.",
};

const stories = bikes.filter((b) => b.timeline.length >= 3);

// Real portrait photos for a bike's timeline, in order (Day 1 → Forever Home).
// The KEY ("red") must match the bike's slug in lib/bikes.ts.
const TIMELINE_PHOTOS: Record<string, string[]> = {
  red: [
    "/hyped1.jpg",
    "/hyped2.jpg",
    "/hyped3.jpg",
    "/hyped4.jpg",
    "/hyped6.jpg",
  ],
  blue: [
    "/lilblue1.jpg",
    "/lilblue2.jpg",
    "/lilblue3.jpg",
    "/lilblue4.jpg",
    "/lilblue5.jpg",
  ],
};

export default function RescueStoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Before · during · after"
        title="Rescue stories"
        intro="Every bike arrives with a history and leaves with a future. These are the restorations we are proudest of, told one taped-up snapshot at a time."
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6">
        {stories.map((bike) => (
          <article
            key={bike.slug}
            className="rounded-md border border-paper/10 bg-ink-800/30 p-6 sm:p-8"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-3xl uppercase tracking-wide">
                    {bike.nickname}
                  </h2>
                  <StatusBadge status={bike.status} />
                </div>
                <p className="mt-1 text-sm text-paper/70">
                  {bike.year} {bike.make} {bike.model}
                </p>
              </div>
              <Link
                href={`/bikes/${bike.slug}`}
                className="font-display text-xs uppercase tracking-wider text-signal hover:text-signal-bright"
              >
                Full profile →
              </Link>
            </div>

              <div className="mb-8 max-w-3xl space-y-4 text-paper/80">
              {(bike.storyParagraphs ?? [bike.story]).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <RescueTimeline
              steps={bike.timeline}
              bikeColor={bike.color}
              accent={bike.accent}
              photos={TIMELINE_PHOTOS[bike.slug]}
            />
          </article>
        ))}
      </div>
    </>
  );
}