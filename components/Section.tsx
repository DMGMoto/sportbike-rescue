import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
      <div>
        {eyebrow && (
          <p className="eyebrow flex items-center gap-2">
            <span aria-hidden>🐾</span> {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          <span className="underline-brush">{title}</span>
        </h2>
      </div>
      {action}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="bg-noise-navy border-b border-paper/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="eyebrow flex items-center gap-2">
          <span aria-hidden>🐾</span> {eyebrow}
        </p>
        <h1 className="mt-2 font-display text-4xl uppercase leading-none tracking-wide sm:text-5xl lg:text-6xl">
          <span className="underline-brush">{title}</span>
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-paper/75">{intro}</p>}
      </div>
    </div>
  );
}
