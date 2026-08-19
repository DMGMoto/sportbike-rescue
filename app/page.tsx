import Link from "next/link";
import Hero from "@/components/Hero";
import BikeCard from "@/components/BikeCard";
import RescueTimeline from "@/components/RescueTimeline";
import { SectionHeading } from "@/components/Section";
import TornEdge from "@/components/TornEdge";
import { getBike } from "@/lib/bikes";

// Featured on the home page: the three bikes that have real photos.
const featured = ["blue", "kawi", "yama"].map((slug) => getBike(slug)!);

const heroStory = getBike("red")!;
const HYPED_PHOTOS = [
  "/hyped1.jpg",
  "/hyped2.jpg",
  "/hyped3.jpg",
  "/hyped4.jpg",
  "/hyped6.jpg",
];

const PROCESS = [
  {
    title: "Foster Care",
    body: "We provide the care, tools, and love these bikes need to heal before adoption.",
    href: "/rescue-stories",
    cta: "Learn more",
    icon: "/foster.png",
  },
  {
    title: "Adoption Process",
    body: "Our friendly process helps you find the right ride, not just any ride.",
    href: "/adopt",
    cta: "How it works",
    icon: "/adoption.png",
  },
  {
    title: "Success Stories",
    body: "Happy bikes. Happy riders. Happy endings in forever garages everywhere.",
    href: "/forever-garages",
    cta: "Read stories",
    icon: "/success.png",
  },
  {
    title: "Support the Rescue",
    body: "Donations help us save more bikes and keep them rolling toward new homes.",
    href: "/contact",
    cta: "Donate now",
    icon: "/support.png",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Available for adoption — torn paper band */}
      <section className="relative bg-paper-edge text-ink-900">
        <TornEdge className="absolute left-0 top-0 h-[22px] w-full text-ink" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="flex items-center gap-2 font-hand text-sm text-ink-700">
                <span aria-hidden>🐾</span> Looking for a home
              </p>
              <h2 className="font-display text-3xl uppercase tracking-wide text-ink-900 sm:text-4xl">
                <span className="underline-brush">Available for adoption</span>
              </h2>
            </div>
            <Link
              href="/adopt"
              className="font-display text-sm uppercase tracking-wide text-ink-700 hover:text-ink-900"
            >
              View all available bikes →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((bike) => (
              <BikeCard key={bike.slug} bike={bike} />
            ))}
          </div>
        </div>
        <TornEdge flip className="absolute bottom-0 left-0 h-[22px] w-full text-ink" />
      </section>

      {/* Rescue stories timeline */}
      <section className="border-y border-paper/10 bg-ink-900/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow={`${heroStory.nickname}'s journey`}
            title="Rescue stories"
            action={
              <Link
                href="/rescue-stories"
                className="font-display text-sm uppercase tracking-wide text-signal hover:text-signal-bright"
              >
                See all rescue stories →
              </Link>
            }
          />
          <RescueTimeline
            steps={heroStory.timeline}
            bikeColor={heroStory.color}
            accent={heroStory.accent}
            photos={HYPED_PHOTOS}
          />
        </div>
      </section>

      {/* Process — cream band, column layout */}
      <section className="relative bg-paper-edge text-ink-900">
        <TornEdge className="absolute left-0 top-0 h-[22px] w-full text-ink" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-ink-900/15">
            {PROCESS.map((p) => (
              <div
                key={p.title}
                className="flex flex-col px-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"
              >
                <h3 className="font-display text-2xl uppercase tracking-wide text-ink-900">
                  {p.title}
                </h3>
                <div className="mt-4 flex items-start gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.icon}
                    alt=""
                    className="h-20 w-20 shrink-0 object-contain"
                  />
                  <p className="text-sm leading-relaxed text-ink-700">
                    {p.body}
                  </p>
                </div>
                <Link
                  href={p.href}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-[3px] bg-ink-900 px-4 py-2 font-display text-xs uppercase tracking-wider text-paper transition-colors hover:bg-ink-800"
                >
                  {p.cta} <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <TornEdge flip className="absolute bottom-0 left-0 h-[22px] w-full text-ink" />
      </section>
    </>
  );
}