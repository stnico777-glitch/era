"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  const inputClass =
    "mt-1 w-full rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-era-ink shadow-sm outline-none transition-[box-shadow,border-color] placeholder:text-era-muted/70 focus:border-era-accent/50 focus:ring-2 focus:ring-era-accent/25";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-era-card md:p-8"
    >
      <h2 className="font-display text-xl font-bold text-era-ink">
        Send a message
      </h2>
      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-era-ink">Name</span>
          <input
            required
            name="name"
            className={inputClass}
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-era-ink">Email</span>
          <input
            required
            type="email"
            name="email"
            className={inputClass}
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-era-ink">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            className={inputClass}
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-era-ink py-3 text-sm font-semibold text-era-cream hover:bg-era-ink-hover md:w-auto md:px-10"
      >
        Submit
      </button>
      {status === "sent" ? (
        <p className="mt-4 text-sm text-era-muted" role="status">
          Thanks — we&apos;ll be in touch shortly.
        </p>
      ) : null}
    </form>
  );
}
