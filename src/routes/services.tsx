import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import gallery2 from "@/assets/gallery-2.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Investment — Maison Lumière" },
      {
        name: "description",
        content: "Wedding photography collections starting at €4,800. Heirloom albums, film and digital coverage.",
      },
      { property: "og:title", content: "Investment — Maison Lumière" },
      { property: "og:description", content: "Wedding collections, albums and editorial coverage." },
      { property: "og:image", content: gallery2 },
      { name: "twitter:image", content: gallery2 },
    ],
  }),
  component: ServicesPage,
});

const collections = [
  {
    name: "L'Intime",
    subtitle: "Elopement & Micro-Wedding",
    price: "from €4,800",
    hours: "Six hours of coverage",
    bullets: [
      "Single photographer",
      "Hand-edited digital gallery (~400 images)",
      "One roll of 35mm film, scanned",
      "Pre-wedding consultation in studio or by call",
    ],
  },
  {
    name: "La Maison",
    subtitle: "The Signature Collection",
    price: "from €7,400",
    hours: "Ten hours of coverage",
    bullets: [
      "Lead photographer + second shooter",
      "Hand-edited gallery (~700 images)",
      "Three rolls of medium format film",
      "Engagement or rehearsal portrait session",
      "Heirloom 10×10 linen-bound proof book",
    ],
    featured: true,
  },
  {
    name: "L'Héritage",
    subtitle: "Multi-Day Editorial",
    price: "from €11,500",
    hours: "Two to three day coverage",
    bullets: [
      "Lead photographer + second shooter",
      "Welcome dinner, ceremony, reception, day-after",
      "Five rolls of medium format film",
      "Full-day editorial portrait session",
      "Fine-art Italian leather album, 12×12",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="bg-ink">
        <SiteHeader />
        <div className="mx-auto max-w-[1400px] px-6 pt-44 pb-24 text-cream md:px-12 md:pt-52 md:pb-32">
          <p className="eyebrow text-gold fade-up">Investment</p>
          <h1 className="fade-up delay-100 mt-6 text-5xl md:text-7xl">
            Three ways to be<br />
            <em className="text-gold/90">remembered.</em>
          </h1>
          <p className="fade-up delay-200 mt-8 max-w-xl text-cream/70">
            Each commission begins with a conversation. Collections are a
            starting point — every wedding is shaped to its couple.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {collections.map((c) => (
            <article
              key={c.name}
              className={`relative flex flex-col border p-10 md:p-12 ${
                c.featured
                  ? "border-burgundy bg-secondary/40"
                  : "border-border bg-card"
              }`}
            >
              {c.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-burgundy px-4 py-1 text-[0.6rem] tracking-[0.35em] uppercase text-cream">
                  Most chosen
                </span>
              )}
              <p className="eyebrow">{c.subtitle}</p>
              <h2 className="mt-4 text-4xl">{c.name}</h2>
              <p className="mt-3 font-display text-lg italic text-burgundy">
                {c.price}
              </p>
              <p className="mt-1 text-xs tracking-widest uppercase text-muted-foreground">
                {c.hours}
              </p>

              <ul className="mt-8 space-y-3 border-t border-border/60 pt-8 text-sm leading-relaxed text-foreground/80">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-px w-3 flex-shrink-0 bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 self-start border-b border-burgundy pb-1 text-[0.7rem] tracking-[0.3em] uppercase text-burgundy hover:text-gold"
              >
                Enquire →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-12 border-t border-border pt-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">À la Carte</p>
            <h3 className="mt-4 text-3xl">Albums & Heirlooms</h3>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Italian leather, hand-marbled endpapers, museum-grade pigment
              prints. Designed in studio, bound in Florence.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/70">
              <li>10×10 linen-bound album · from €640</li>
              <li>12×12 leather album · from €1,180</li>
              <li>Parents' duplicate album · from €520</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">Travel</p>
            <h3 className="mt-4 text-3xl">Wherever you marry</h3>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Travel within Italy and France is included. For weddings further
              afield — Greece, Morocco, the British countryside — we add
              transport and lodging at cost.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}