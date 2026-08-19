"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/adopt", label: "Adopt" },
  { href: "/rescue-stories", label: "Rescue Stories" },
  { href: "/forever-garages", label: "Forever Garages" },
  { href: "/surrender", label: "Surrender" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-ink-900/85 backdrop-blur supports-[backdrop-filter]:bg-ink-900/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="text-paper" aria-label="Sportbike Rescue home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display text-sm uppercase tracking-wide transition-colors ${
                isActive(item.href)
                  ? "text-signal underline-brush"
                  : "text-paper/80 hover:text-paper"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-yellow hidden text-sm sm:inline-flex">
            Support the Rescue <span aria-hidden>♥</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-[3px] border border-paper/20 text-paper lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-paper/10 bg-ink-900 px-4 py-3 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2.5 font-display text-base uppercase tracking-wide ${
                    isActive(item.href) ? "text-signal" : "text-paper/85"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-yellow w-full text-sm"
              >
                Support the Rescue <span aria-hidden>♥</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
