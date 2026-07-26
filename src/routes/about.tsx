import { createFileRoute } from "@tanstack/react-router";
import chef from "@/assets/avatar-chef.jpg";
import plating from "@/assets/post-plating.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Saveur & Co. Catering" },
      { name: "description", content: "Meet the Brooklyn kitchen behind Saveur & Co. — chef Marco, our team, and how we source." },
      { property: "og:title", content: "About — Saveur & Co. Catering" },
      { property: "og:description", content: "Meet the Brooklyn kitchen behind Saveur & Co." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our story</p>
            <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">
              A kitchen built around the season.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Saveur &amp; Co. began in a 400-square-foot Brooklyn kitchen in 2016. Nine years
              later, we've catered everything from City Hall elopements to 300-guest weddings —
              and we still cook every menu ourselves.
            </p>
            <p className="mt-4 text-muted-foreground">
              We source from farms within 200 miles, cure our own charcuterie, bake our own bread,
              and refuse to serve anything we wouldn't cook for family.
            </p>
          </div>
          <img src={plating} alt="Chef plating a dish" className="rounded-2xl object-cover" />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">The team</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { name: "Marco Alvarez", role: "Executive Chef & Owner", img: chef },
              { name: "Priya Rao", role: "Head of Events", img: chef },
              { name: "Jonah Fields", role: "Pastry Chef", img: chef },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-border bg-card p-6 text-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="mt-4 font-display text-xl font-semibold">{p.name}</div>
                <div className="text-sm text-muted-foreground">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { n: "01", t: "Seasonal sourcing", b: "Menus change with what's coming out of the ground — never the other way around." },
            { n: "02", t: "In-house everything", b: "Bread, charcuterie, pickles, ice cream — made in our Brooklyn kitchen, not bought in." },
            { n: "03", t: "Hospitality first", b: "Our front-of-house team is trained to make your event feel effortless from load-in to last dance." },
          ].map((v) => (
            <div key={v.n}>
              <div className="font-display text-4xl font-bold text-primary">{v.n}</div>
              <div className="mt-2 font-display text-xl font-semibold">{v.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
