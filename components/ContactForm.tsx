"use client";

import { useState } from "react";

const fieldClass =
  "w-full rounded-[3px] border border-paper/20 bg-ink-800/60 px-3 py-2.5 text-sm text-paper placeholder:text-paper/40 focus:border-signal";
const labelClass = "block text-xs uppercase tracking-wider text-paper/60 mb-1.5";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwlekykr";

export default function ContactForm() {
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
          "Something went wrong sending your message. Please try again, or email admin@sportbikerescue.com directly."
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
      <div className="rounded-md border border-signal/40 bg-ink-800/40 p-8 text-center">
        <p className="text-3xl" aria-hidden>
          🐾
        </p>
        <h2 className="mt-2 font-display text-2xl uppercase tracking-wide text-signal">
          Message sent!
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-paper/70">
          Thanks for reaching out. A volunteer will get back to you soon — usually
          within a day or two between rides.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 inline-flex rounded-[3px] border border-paper/20 px-5 py-2.5 font-display text-xs uppercase tracking-wider text-paper hover:border-signal hover:text-signal"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-paper/10 bg-ink-800/30 p-6 sm:p-8"
    >
      {/* gives the notification email a clear subject line */}
      <input
        type="hidden"
        name="_subject"
        value="New contact from Sportbike Rescue website"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="c-name">
            Name
          </label>
          <input id="c-name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="c-email">
            Email
          </label>
          <input id="c-email" name="email" type="email" required className={fieldClass} placeholder="you@email.com" />
        </div>
      </div>
      <div className="mt-4">
        <label className={labelClass} htmlFor="c-topic">
          What&apos;s this about?
        </label>
        <select id="c-topic" name="topic" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Choose a topic…
          </option>
          <option>Adopting a bike</option>
          <option>Surrendering a bike</option>
          <option>Volunteering</option>
          <option>Donating / supporting the rescue</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="mt-4">
        <label className={labelClass} htmlFor="c-message">
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          required
          className={fieldClass}
          placeholder="Tell us how we can help…"
        />
      </div>

      {error && (
        <p className="mt-4 rounded-[3px] border border-rescue-red/40 bg-rescue-red/10 px-3 py-2 text-sm text-rescue-red">
          {error}
        </p>
      )}

      <button type="submit" disabled={submitting} className="btn-yellow mt-5 disabled:opacity-60">
        {submitting ? "Sending…" : "Send message"} <span aria-hidden>♥</span>
      </button>
    </form>
  );
}