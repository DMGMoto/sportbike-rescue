import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BikeSketch from "@/components/BikeSketch";
import StatusBadge from "@/components/StatusBadge";
import RescueTimeline from "@/components/RescueTimeline";
import { bikes, getBike } from "@/lib/bikes";

// Real photos by bike (same set used on the cards).
const BIKE_PHOTOS: Record<string, string> = {
  blue: "/lilblue5.jpg",
  kawi: "/ZX7.jpg",
  yama: "/FZR.jpg",
  red: "/vader.jpeg",
};
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

export function generateStaticParams() {
  return bikes.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const bike = getBike(params.slug);
  if (!bike) return { title: "Bike not found — Sportbike Rescue" };
  return {
    title: `${bike.nickname} — ${bike.year} ${bike.make} ${bike.model} | Sportbike Rescue`,
    description: bike.intake,
  };
}

function Bolts({ n }: { n: number }) {
  return (
    <span aria-label={`${n} of 4 energy`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className={i < n ? "text-signal-deep" : "text-ink-900/15"}>
          ⚡
        </span>
      ))}
    </span>
  );
}

export default function BikeProfile({ params }: { params: { slug: string } }) {
  const bike = getBike(params.slug);
  if (!bike) notFound();

  const adoptable = bike.status !== "adopted";
  const photo = BIKE_PHOTOS[bike.slug];

  return (
    <>
      {/* hero */}
      <section className="bg-noise-navy border-b border-paper/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link href="/adopt" className="text-sm text-paper/60 hover:text-signal">
            ← Back to available bikes
          </Link>
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-2">
          <div className="relative rounded-md border border-paper/10 bg-ink-800/60 p-5 shadow-lift">
            <div className="mb-3 flex items-center justify-between">
              <StatusBadge status={bike.status} />
              <span className="font-hand text-sm text-paper/60">
                Intake #{bike.slug.toUpperCase()}
              </span>
            </div>
            <BikeSketch
              color={bike.color}
              accent={bike.accent}
              src={photo}
              title={`${bike.year} ${bike.make} ${bike.model}`}
              className="h-64 w-full rounded sm:h-80"
            />
            {!photo && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {["#5c6470", bike.color, "#8a6d3b", bike.color].map((c, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-[3px] border border-paper/10 bg-ink-900/50"
                  >
                    <BikeSketch color={c} accent={bike.accent} className="h-12 w-full" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex items-baseline gap-3">
              <h1 className="font-display text-5xl uppercase leading-none tracking-wide sm:text-6xl">
                {bike.nickname}
              </h1>
              <span className="text-rescue-red text-2xl" aria-hidden>
                ♥
              </span>
            </div>
            <p className="mt-2 text-lg text-paper/80">
              {bike.year} {bike.make}{" "}
              <span className="text-signal">{bike.model}</span> · {bike.ageYears} years young
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <span>
                <span className="font-bold text-paper/60">Temperament: </span>
                <Bolts n={bike.temperament} /> {bike.temperamentLabel}
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-sm bg-ink-800/50 p-4">
                <p className="text-xs uppercase tracking-wider text-paper/50">Loves</p>
                <p className="mt-1 text-sm">{bike.loves.join(", ")}</p>
              </div>
              <div className="rounded-sm bg-ink-800/50 p-4">
                <p className="text-xs uppercase tracking-wider text-paper/50">
                  Not a fan of
                </p>
                <p className="mt-1 text-sm">{bike.notFanOf.join(", ")}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-paper/40 text-center rotate-[-8deg]">
                <div>
                  <p className="font-hand text-[9px] text-paper/60">Adoption fee</p>
                  <p className="font-display text-base">
                    ${bike.adoptionFee.toLocaleString()}
                  </p>
                </div>
              </div>
              {adoptable ? (
                <Link href="/contact" className="btn-yellow">
                  Apply to adopt {bike.nickname} <span aria-hidden>🐾</span>
                </Link>
              ) : (
                <span className="rounded-[3px] bg-rescue-gold px-5 py-3 font-display uppercase tracking-wide text-ink-900">
                  Adopted — in a forever garage
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* story + restoration */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-wide">
              <span className="underline-brush">{bike.nickname}&apos;s story</span>
            </h2>
            <p className="mt-4 leading-relaxed text-paper/80">{bike.story}</p>
          </div>

          <div className="rounded-sm border border-paper/10 bg-ink-800/40 p-6">
            <h3 className="font-display text-lg uppercase tracking-wide">
              Restoration progress
            </h3>
            <div className="mt-4 h-4 w-full overflow-hidden rounded-full bg-ink-900">
              <div
                className="h-full rounded-full bg-signal transition-all"
                style={{ width: `${bike.restoration}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-paper/60">
              {bike.restoration}% restored ·{" "}
              {bike.restoration === 100 ? "ready for adoption" : "still in good hands"}
            </p>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between border-b border-paper/10 pb-2">
                <dt className="text-paper/60">Status</dt>
                <dd>{bike.status.replace("-", " ")}</dd>
              </div>
              <div className="flex justify-between border-b border-paper/10 pb-2">
                <dt className="text-paper/60">Make / Model</dt>
                <dd>
                  {bike.make} {bike.model}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-paper/60">Adoption fee</dt>
                <dd>${bike.adoptionFee.toLocaleString()}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* journey */}
      <section className="border-t border-paper/10 bg-ink-900/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="mb-10 font-display text-2xl uppercase tracking-wide">
            <span className="underline-brush">The journey so far</span>
          </h2>
          <RescueTimeline
            steps={bike.timeline}
            bikeColor={bike.color}
            accent={bike.accent}
            photos={TIMELINE_PHOTOS[bike.slug]}
          />
        </div>
      </section>
    </>
  );
}