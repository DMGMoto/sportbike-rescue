import Link from "next/link";
import { Bike } from "@/lib/bikes";
import BikeSketch from "./BikeSketch";
import StatusBadge from "./StatusBadge";

// Real photos by bike. Bikes not listed here fall back to the sketch.
const BIKE_PHOTOS: Record<string, string> = {
  red: "/vader.jpeg",
  blue: "/GSXR.jpg",
  kawi: "/ZX7.jpg",
  yama: "/FZR.jpg",
};

function Bolts({ n }: { n: number }) {
  return (
    <span className="inline-flex gap-0.5 align-middle" aria-label={`${n} of 4 energy`}>
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className={i < n ? "text-signal-deep" : "text-ink-900/15"}
        >
          ⚡
        </span>
      ))}
    </span>
  );
}

export default function BikeCard({ bike }: { bike: Bike }) {
  return (
    <article className="paper-card group flex flex-col p-4 pt-7 animate-fade-up">
      {/* paperclip */}
      <span
        aria-hidden
        className="absolute -top-2 right-7 h-9 w-4 rounded-full border-[3px] border-ink-700/70 rotate-6"
      />
      {/* status tab */}
      <div className="absolute -top-3 left-4">
        <StatusBadge status={bike.status} />
      </div>

      {/* photo / sketch */}
      <div className="relative mt-1 overflow-hidden rounded-[3px] border border-paper-edge bg-[#dfd7c2]">
        <BikeSketch
          color={bike.color}
          accent={bike.accent}
          src={BIKE_PHOTOS[bike.slug]}
          title={`${bike.year} ${bike.make} ${bike.model}`}
          className="h-44 w-full transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {/* name */}
      <div className="mt-4 flex items-baseline justify-between gap-2">
        <h3 className="font-display text-3xl uppercase leading-none tracking-wide text-ink-900">
          {bike.nickname}
        </h3>
        <span className="text-rescue-red text-lg" aria-hidden>
          ♥
        </span>
      </div>
      <p className="mt-1 font-body text-sm font-semibold text-ink-700">
        {bike.year} {bike.make}{" "}
        <span className="text-rescue-red">{bike.model}</span>
      </p>

      {/* facts */}
      <dl className="mt-3 space-y-1.5 text-[13px] text-ink-900/85">
        <div className="flex gap-2">
          <dt className="font-bold">Age:</dt>
          <dd>{bike.ageYears} years</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="font-bold">Temperament:</dt>
          <dd>
            <Bolts n={bike.temperament} />
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-bold shrink-0">Loves:</dt>
          <dd>{bike.loves.join(", ")}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-bold shrink-0">Not a fan of:</dt>
          <dd>{bike.notFanOf.join(", ")}</dd>
        </div>
      </dl>

      {/* fee stamp + cta */}
      <div className="mt-4 flex items-end justify-between gap-3 border-t border-dashed border-ink-900/20 pt-4">
        <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-full border-2 border-ink-700/70 text-center rotate-[-8deg]">
          <div>
            <p className="font-hand text-[9px] leading-none text-ink-700">
              Adoption fee
            </p>
            <p className="font-display text-base leading-tight text-ink-900">
              ${bike.adoptionFee.toLocaleString()}
            </p>
          </div>
        </div>
        <Link
          href={`/bikes/${bike.slug}`}
          className="btn-ink"
          aria-label={`View ${bike.nickname}'s profile`}
        >
          View profile <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}