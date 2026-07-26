import { createFileRoute, Link } from "@tanstack/react-router";
import charcuterie from "@/assets/post-charcuterie.jpg";
import plating from "@/assets/post-plating.jpg";
import garden from "@/assets/post-garden.jpg";
import desserts from "@/assets/post-desserts.jpg";
import sushi from "@/assets/post-sushi.jpg";
import wedding from "@/assets/post-wedding.jpg";

export const Route = createFileRoute("/menus")({
  head: () => ({
    meta: [
      { title: "Menus — Saveur & Co. Catering" },
      { name: "description", content: "Seasonal tasting menus, family-style feasts, grazing tables, and dessert bars for every event size." },
      { property: "og:title", content: "Menus — Saveur & Co. Catering" },
      { property: "og:description", content: "Seasonal tasting menus, family-style feasts, and grazing tables." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Menus,
});

const menus = [
  {
    name: "Coastal Tasting",
    price: "from $145 / guest",
    tag: "Plated · 7 courses",
    image: sushi,
    items: [
      "Kanpachi crudo, yuzu, sea beans",
      "Butter-poached lobster, brown butter dashi",
      "Wood-grilled turbot, fennel, meyer lemon",
      "Miso-glazed short rib, spring onion",
      "Chèvre cheesecake, brûléed rhubarb",
    ],
  },
  {
    name: "Garden Party",
    price: "from $85 / guest",
    tag: "Family style",
    image: garden,
    items: [
      "Heirloom tomato salad, stracciatella, basil oil",
      "Wood-fired flatbreads with seasonal toppings",
      "Herb-roasted chicken, salsa verde",
      "Farro & summer squash with preserved lemon",
      "Stone fruit galette, crème fraîche",
    ],
  },
  {
    name: "Corporate Lunch",
    price: "from $42 / guest",
    tag: "Grazing / boxed",
    image: charcuterie,
    items: [
      "Grain bowls with roasted vegetables & tahini",
      "House charcuterie & aged cheese boards",
      "Chicken paillard, arugula, shaved parmesan",
      "Seasonal soup and focaccia service",
      "Mini olive oil cakes & fresh berries",
    ],
  },
  {
    name: "Wedding Signature",
    price: "from $175 / guest",
    tag: "Plated · custom",
    image: wedding,
    items: [
      "Passed canapés (choose 6)",
      "First: seasonal salad or crudo",
      "Second: pasta or vegetable course",
      "Main: dual entrée or family-style feast",
      "Late-night bite + wedding cake service",
    ],
  },
  {
    name: "Sweet Table",
    price: "from $28 / guest",
    tag: "Add-on",
    image: desserts,
    items: [
      "French macarons in seasonal flavors",
      "Individual lemon tarts & pavlovas",
      "Chocolate pot de crème",
      "Fresh fruit & whipped mascarpone",
      "Espresso & digestif pairing available",
    ],
  },
  {
    name: "Chef's Tasting",
    price: "from $220 / guest",
    tag: "Private · 10 courses",
    image: plating,
    items: [
      "A custom menu built around your date & season",
      "Sourced from farms within 200 miles",
      "Optional wine pairing by our sommelier",
      "Ideal for 8–20 guests, in-home or in-studio",
      "One planning call + one live tasting included",
    ],
  },
];

function Menus() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our menus</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold md:text-6xl">
            Built around the season, tailored to your event.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every menu is a starting point. We adjust courses, allergens, and format so it feels
            like it was written just for you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {menus.map((m) => (
            <article key={m.name} className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={m.image} alt={m.name} className="aspect-[16/10] w-full object-cover" loading="lazy" />
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-2xl font-bold">{m.name}</h2>
                  <span className="text-sm font-semibold text-primary">{m.price}</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{m.tag}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {m.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Inquire about this menu →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
