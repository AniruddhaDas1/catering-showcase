import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Utensils, Users, Sparkles, Quote } from "lucide-react";

import wedding from "@/assets/post-wedding.jpg";
import charcuterie from "@/assets/post-charcuterie.jpg";
import plating from "@/assets/post-plating.jpg";
import garden from "@/assets/post-garden.jpg";
import desserts from "@/assets/post-desserts.jpg";
import sushi from "@/assets/post-sushi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saveur & Co. — Brooklyn Catering for Weddings & Events" },
      { name: "description", content: "Chef-driven catering in Brooklyn. Seasonal menus, seamless service for weddings, corporate events, and private dinners." },
      { property: "og:title", content: "Saveur & Co. — Brooklyn Catering" },
      { property: "og:description", content: "Seasonal menus and seamless service for weddings, corporate events, and private dinners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedGallery />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={wedding} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
          Brooklyn · Est. 2016
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-tight text-white md:text-7xl">
          Catering that tastes like the occasion.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Seasonal, chef-driven menus and effortless service for weddings, corporate events, and
          private dinners across New York.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Request a proposal <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/menus"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            View menus
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { n: "500+", l: "Events catered" },
    { n: "42k", l: "Guests served" },
    { n: "9yr", l: "In Brooklyn" },
    { n: "4.9★", l: "Client rating" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.l} className="text-center">
            <div className="font-display text-4xl font-bold text-primary">{i.n}</div>
            <div className="mt-1 text-sm text-muted-foreground">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: Sparkles,
      title: "Weddings",
      body: "Multi-course tasting menus, family-style feasts, and cocktail hours designed around your love story.",
    },
    {
      icon: Users,
      title: "Corporate",
      body: "Client dinners, launches, and boxed lunches served with hotel-level polish and a chef's touch.",
    },
    {
      icon: Utensils,
      title: "Private Events",
      body: "Intimate dinners, birthdays, and holiday gatherings — cooked in your kitchen or ours.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
        <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
          A full-service kitchen behind every event.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-border bg-card p-8 transition hover:shadow-lg">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <it.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedGallery() {
  const imgs = [charcuterie, plating, garden, desserts, sushi, wedding];
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Recent work</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">From the pass.</h2>
          </div>
          <Link to="/events" className="text-sm font-semibold text-primary hover:underline">
            See all events →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {imgs.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { q: "Every single dish was perfect. Our guests are still talking about the fig salad.", a: "Emma & Julien", r: "Wedding · 180 guests" },
    { q: "Effortless from tasting to teardown. They made our launch feel like a dinner party.", a: "Nora K.", r: "Corporate launch · 240 guests" },
    { q: "The most thoughtful, seasonal menu we've ever served at a private event.", a: "David R.", r: "50th birthday · 60 guests" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Kind words</p>
      <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Trusted by hosts across NY.</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {t.map((x, i) => (
          <blockquote key={i} className="rounded-2xl border border-border bg-card p-8">
            <Quote className="h-6 w-6 text-primary" />
            <p className="mt-4 text-base leading-relaxed">"{x.q}"</p>
            <footer className="mt-6">
              <div className="font-semibold">{x.a}</div>
              <div className="text-xs text-muted-foreground">{x.r}</div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">Planning an event?</h2>
          <p className="mt-2 text-primary-foreground/80">
            Tell us the date, the vibe, and the headcount — we'll take it from there.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90"
        >
          Start a proposal <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
