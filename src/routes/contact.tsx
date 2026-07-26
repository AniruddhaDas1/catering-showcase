import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Saveur & Co. Catering" },
      { name: "description", content: "Request a proposal for your wedding, corporate event, or private dinner in Brooklyn and NYC." },
      { property: "og:title", content: "Contact — Saveur & Co. Catering" },
      { property: "og:description", content: "Request a proposal for your next event." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold md:text-6xl">
            Tell us about your event.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Share a few details and our events team will reply within one business day with a
            proposal and a suggested menu.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-card p-8"
        >
          {sent ? (
            <div className="flex flex-col items-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">Thanks — we've got it.</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll be in touch within one business day.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Event date" name="date" type="date" />
              <Field label="Event type" name="type" placeholder="Wedding, corporate, birthday..." />
              <Field label="Guest count" name="guests" type="number" placeholder="e.g. 120" />
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium">Tell us about your event</label>
                <textarea
                  name="details"
                  rows={5}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  placeholder="Venue, vibe, dietary considerations, must-haves..."
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Send inquiry
                </button>
              </div>
            </div>
          )}
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold">Reach us directly</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" /> hello@saveurandco.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" /> (718) 555-0142
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> 221 Kent Ave, Brooklyn NY
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold">Planning ahead?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Peak wedding dates (May–October) fill 6–9 months out. Corporate dinners typically
              book 4–6 weeks in advance.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
