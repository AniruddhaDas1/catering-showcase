import { createFileRoute } from "@tanstack/react-router";
import wedding from "@/assets/post-wedding.jpg";
import charcuterie from "@/assets/post-charcuterie.jpg";
import plating from "@/assets/post-plating.jpg";
import garden from "@/assets/post-garden.jpg";
import desserts from "@/assets/post-desserts.jpg";
import sushi from "@/assets/post-sushi.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Saveur & Co. Catering" },
      { name: "description", content: "A gallery of recent weddings, corporate launches, and private dinners catered by Saveur & Co." },
      { property: "og:title", content: "Events — Saveur & Co. Catering" },
      { property: "og:description", content: "Recent weddings, launches, and private dinners." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Events,
});

const events = [
  { image: wedding, title: "Emma & Julien", type: "Wedding", guests: 180, venue: "The Old Mill Estate" },
  { image: garden, title: "Rosewood Long-Table", type: "Private dinner", guests: 42, venue: "Rosewood Gardens" },
  { image: sushi, title: "Northlight Product Launch", type: "Corporate", guests: 240, venue: "Downtown Loft" },
  { image: charcuterie, title: "Q3 Client Reception", type: "Corporate", guests: 120, venue: "Studio Kitchen" },
  { image: plating, title: "Chef's Tasting Series", type: "Private dinner", guests: 20, venue: "Saveur Test Kitchen" },
  { image: desserts, title: "Ivy Baby Shower", type: "Private", guests: 35, venue: "Private Residence" },
];

function Events() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold md:text-6xl">
            A season of events.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            From intimate dinners to 300-guest weddings, here's a taste of what we've cooked this year.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <figure key={e.title} className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">{e.type}</div>
                <div className="mt-1 font-display text-xl font-bold">{e.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {e.guests} guests · {e.venue}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
