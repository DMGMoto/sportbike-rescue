"use client";

import { useState } from "react";
import BikeCard from "./BikeCard";
import { Bike, BikeStatus } from "@/lib/bikes";

const FILTERS: { key: BikeStatus | "all"; label: string }[] = [
  { key: "all", label: "All bikes" },
  { key: "available", label: "Available" },
  { key: "foster-care", label: "In foster care" },
  { key: "medical-treatment", label: "Medical treatment" },
  { key: "adopted", label: "Forever homes" },
];

export default function BikeGrid({ bikes }: { bikes: Bike[] }) {
  const [filter, setFilter] = useState<BikeStatus | "all">("all");
  const shown = filter === "all" ? bikes : bikes.filter((b) => b.status === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className={`rounded-[3px] px-4 py-2 font-display text-xs uppercase tracking-wider transition-colors ${
                active
                  ? "bg-signal text-ink-900"
                  : "border border-paper/20 text-paper/75 hover:border-signal hover:text-signal"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <p className="rounded-sm border border-dashed border-paper/20 px-6 py-12 text-center text-paper/60">
          No bikes in this group right now. Check back soon, or{" "}
          <span className="text-signal">surrender a bike</span> to fill the kennel.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((bike) => (
            <BikeCard key={bike.slug} bike={bike} />
          ))}
        </div>
      )}
    </div>
  );
}
