import Link from "next/link";
import { ReactNode } from "react";

interface AdoptionCardProps {
  title: string;
  body: string;
  href: string;
  cta: string;
  icon?: ReactNode;
  variant?: "light" | "fill";
}

export default function AdoptionCard({
  title,
  body,
  href,
  cta,
  icon,
  variant = "light",
}: AdoptionCardProps) {
  const fill = variant === "fill";
  return (
    <div
      className={`flex flex-col rounded-sm p-6 ${
        fill
          ? "bg-signal text-ink-900 shadow-card"
          : "border-t-2 border-paper/15 bg-ink-800/40"
      }`}
    >
      {icon && (
        <div className={`mb-4 ${fill ? "text-ink-900" : "text-signal"}`}>
          {icon}
        </div>
      )}
      <h3 className="font-display text-2xl uppercase tracking-wide leading-none">
        {title}
      </h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          fill ? "text-ink-900/80" : "text-paper/70"
        }`}
      >
        {body}
      </p>
      <Link
        href={href}
        className={`mt-5 inline-flex w-fit items-center gap-2 font-display uppercase text-xs tracking-wider px-4 py-2 rounded-[3px] transition-colors ${
          fill
            ? "bg-ink-900 text-paper hover:bg-ink-800"
            : "bg-signal text-ink-900 hover:bg-signal-bright"
        }`}
      >
        {cta} <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
