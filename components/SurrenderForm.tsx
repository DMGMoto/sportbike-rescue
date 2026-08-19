"use client";

import { useState } from "react";

const fieldClass =
  "w-full rounded-[3px] border border-paper/20 bg-ink-800/60 px-3 py-2.5 text-sm text-paper placeholder:text-paper/40 focus:border-signal";
const labelClass = "block text-xs uppercase tracking-wider text-paper/60 mb-1.5";

// Set this to your Formspree endpoint.
// New "Surrender" form → paste its URL. Reusing your contact form → use the same /f/mwlekykr URL.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpzgjbo";

export default function SurrenderForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError(
          "Something went wrong submitting your intake. Please try again, or email admin@sportbikerescue.com directly."
        );
      }
    } catch {
      setError(
        "Couldn't reach the server. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="paper-card p-8 text-center text-ink-900">
        <p className="font-hand text-4xl text-rescue-red" aria-hidden>
          🐾
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase tracking-wide">
          Intake received!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink-700">
          Thank you for giving your bike a second chance. A volunteer will reach
          out within two business days to arrange an assessment. No bike is too
          rough — we have seen it all.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 inline-flex rounded-[3px] bg-ink-900 px-5 py-2.5 font-display text-xs uppercase tracking-wider text-paper hover:bg-ink-800"
        >
          Surrender another bike
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-paper/10 bg-ink-800/30 p-6 sm:p-8"
    >
      <input
        type="hidden"
        name="_subject"
        value="New bike surrender — Sportbike Rescue website"
      />

      <fieldset className="mb-8">
        <legend className="mb-4 font-display text-lg uppercase tracking-wide text-signal">
          About you
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="name">
              Your name
            </label>
            <input id="name" name="name" required className={fieldClass} placeholder="Alex Rider" />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@email.com" />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              Phone
            </label>
            <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="(555) 123-4567" />
          </div>
          <div>
            <label className={labelClass} htmlFor="city">
              City
            </label>
            <input id="city" name="city" className={fieldClass} placeholder="Huntington Beach, CA" />
          </div>
        </div>
      </fieldset>

      <fieldset className="mb-8">
        <legend className="mb-4 font-display text-lg uppercase tracking-wide text-signal">
          About the bike
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelClass} htmlFor="year">
              Year
            </label>
            <input id="year" name="year" className={fieldClass} placeholder="1998" />
          </div>
          <div>
            <label className={labelClass} htmlFor="make">
              Make
            </label>
            <input id="make" name="make" className={fieldClass} placeholder="Suzuki" />
          </div>
          <div>
            <label className={labelClass} htmlFor="model">
              Model
            </label>
            <input id="model" name="model" className={fieldClass} placeholder="GSX-R750" />
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="condition">
              Running condition
            </label>
            <select id="condition" name="condition" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Choose one…
              </option>
              <option>Runs and rides</option>
              <option>Runs, but rough</option>
              <option>Not running</option>
              <option>Project / parts</option>
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="title">
              Title status
            </label>
            <select id="title" name="title" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Choose one…
              </option>
              <option>Clean title in hand</option>
              <option>Title, needs transfer</option>
              <option>No title / bill of sale</option>
              <option>Not sure</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className={labelClass} htmlFor="story">
            Tell us its story
          </label>
          <textarea
            id="story"
            name="story"
            rows={4}
            className={fieldClass}
            placeholder="Where has it been? Why are you surrendering it? Any quirks we should know about?"
          />
        </div>
      </fieldset>

      {error && (
        <p className="mb-4 rounded-[3px] border border-rescue-red/40 bg-rescue-red/10 px-3 py-2 text-sm text-rescue-red">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={submitting} className="btn-yellow disabled:opacity-60">
          {submitting ? "Submitting…" : "Submit intake"} <span aria-hidden>🐾</span>
        </button>
        <p className="text-xs text-paper/50">
          No judgment, no cost to surrender. We just want them safe.
        </p>
      </div>
    </form>
  );
}