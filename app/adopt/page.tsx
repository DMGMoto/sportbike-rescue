import type { Metadata } from "next";
import { PageHeader } from "@/components/Section";
import BikeGrid from "@/components/BikeGrid";
import { bikes } from "@/lib/bikes";

export const metadata: Metadata = {
  title: "Available for Adoption — Sportbike Rescue",
  description:
    "Meet the sportbikes currently looking for forever garages. Each one rescued, assessed, and ready for the right rider.",
};

export default function AdoptPage() {
  return (
    <>
      <PageHeader
        eyebrow="Meet the residents"
        title="Available for adoption"
        intro="Every bike here was rescued, assessed, and given a clean kennel card. Filter by status to find the one that fits your garage and your skill level."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <BikeGrid bikes={bikes} />
      </section>
    </>
  );
}