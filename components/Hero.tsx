import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-noise-navy">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="animate-fade-up">
          <p className="eyebrow flex items-center gap-2">
            <span aria-hidden>🐾</span> A shelter for forgotten sportbikes
          </p>
          <h1 className="mt-3 font-display text-5xl uppercase leading-[0.92] tracking-wide sm:text-6xl lg:text-7xl">
            Every bike
            <br />
            deserves a
            <br />
            <span className="underline-brush text-signal">second chance.</span>
          </h1>
          <p className="mt-6 max-w-md text-paper/75">
            We rescue abandoned sportbikes from the 80s, 90s, and early 2000s,
            nurse them back to health, and place them in loving forever garages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/adopt" className="btn-yellow">
              Meet available bikes <span aria-hidden>🐾</span>
            </Link>
            <Link href="/rescue-stories" className="btn-outline">
              View rescue stories
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-md border border-paper/10 bg-ink-800/60 p-5 shadow-lift">
            <img
              src="/ZX10.jpg"
              alt="Rescued sportbike"
              className="h-64 w-full rounded object-cover sm:h-80"
            />
          </div>
          {/* hand-drawn badge */}
          <div className="absolute -bottom-5 -right-2 rotate-[-8deg] sm:-right-6">
            <div className="grid h-28 w-28 place-items-center rounded-full border-2 border-paper text-center sm:h-32 sm:w-32">
              <p className="font-hand text-base leading-tight text-paper">
                Adopt
                <br />
                <span className="text-signal">don&apos;t</span>
                <br />
                shop!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}