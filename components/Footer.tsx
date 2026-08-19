import Link from "next/link";
import { stats } from "@/lib/bikes";
import NewsletterForm from "./NewsletterForm";

const STAT_ICON: Record<string, string> = {
  bike: "🏍️",
  wrench: "🔧",
  heart: "🤍",
  key: "🔑",
};

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink-900">
      {/* stats strip */}
      <div className="border-b border-paper/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl" aria-hidden>
                {STAT_ICON[s.icon]}
              </div>
              <div className="mt-1 font-display text-4xl text-signal">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-paper/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-4xl uppercase leading-none text-paper">
            Adopt
          </p>
          <p className="font-hand text-2xl text-signal">don&apos;t shop!</p>
          <p className="mt-4 max-w-xs text-sm text-paper/60">
            A volunteer-run sanctuary for vintage sportbikes in Huntington Beach,
            California.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-display text-sm uppercase tracking-wider text-paper/50">
            Explore
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {[
              ["/adopt", "Available Bikes"],
              ["/rescue-stories", "Rescue Stories"],
              ["/forever-garages", "Forever Garages"],
              ["/surrender", "Surrender a Bike"],
              ["/contact", "Contact"],
              ["/contact", "Support the Rescue"],
            ].map(([href, label], i) => (
              <li key={`${href}-${i}`}>
                <Link href={href} className="text-paper/75 hover:text-signal">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-lg uppercase tracking-wide text-paper">
            Join our pack!
          </p>
          <p className="mt-2 text-sm text-paper/60">
            Get updates on new rescues, events, and adoption days.
          </p>
          <NewsletterForm />
          <div className="mt-5 flex gap-3 text-paper/70">
            <a href="#" aria-label="Instagram" className="hover:text-signal">
              ◎
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-signal">
              ⓕ
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-signal">
              ▶
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-paper/50 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Sportbike Rescue. All rights reserved.</p>
          <p>Huntington Beach, CA · A fictional shelter, built with love.</p>
        </div>
      </div>
    </footer>
  );
}
