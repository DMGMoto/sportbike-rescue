"use client";

import { useState } from "react";

const NEWSLETTER_ENDPOINT = "https://formspree.io/f/xdenobev";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setDone(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Couldn't reach the server. Try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <p className="mt-4 rounded-[3px] border border-signal/40 bg-ink-800 px-3 py-2.5 text-sm text-signal">
        🐾 You&apos;re in the pack! Watch your inbox for new rescues.
      </p>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-4 flex gap-2" aria-label="Newsletter signup">
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          aria-label="Email address"
          className="w-full rounded-[3px] border border-paper/20 bg-ink-800 px-3 py-2.5 text-sm text-paper placeholder:text-paper/40 focus:border-signal"
        />
        <button type="submit" disabled={submitting} className="btn-yellow text-sm disabled:opacity-60">
          {submitting ? "…" : "Join"}
        </button>
      </form>
      {error && <p className="mt-2 text-xs text-rescue-red">{error}</p>}
    </div>
  );
}