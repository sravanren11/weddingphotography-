import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import hero from "@/assets/hero-couple.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Maison Lumière" },
      {
        name: "description",
        content: "Selected wedding stories from Tuscany, Provence, Lake Como and beyond.",
      },
      { property: "og:title", content: "Portfolio — Maison Lumière" },
      { property: "og:description", content: "Selected wedding stories on film and digital." },
      { property: "og:image", content: gallery3 },
      { name: "twitter:image", content: gallery3 },
    ],
  }),
  component: PortfolioPage,
});

const stories = [
  { img: hero, names: "Aurelia & Theo", place: "Val d'Orcia, Tuscany", year: "2025", aspect: "tall" },
  { img: gallery3, names: "Sofia & Matteo", place: "Borgo Santo Pietro", year: "2024", aspect: "wide" },
  { img: gallery1, names: "Eleanor", place: "Villa Cetinale", year: "2024", aspect: "tall" },
  { img: gallery4, names: "Camille & Luca", place: "Provence", year: "2024", aspect: "tall" },
  { img: gallery2, names: "Hands & Roses", place: "Lake Como", year: "2023", aspect: "wide" },
];

function PortfolioPage() {
  return (
    <div className="bg-background">
      <div className="bg-ink">
        <SiteHeader />
        <div className="mx-auto max-w-[1400px] px-6 pt-44 pb-24 text-cream md:px-12 md:pt-52 md:pb-32">
          <p className="eyebrow text-gold fade-up">The Portfolio</p>
          <h1 className="fade-up delay-100 mt-6 text-5xl md:text-7xl lg:text-[5.5rem]">
            Stories, gathered<br />
            <em className="text-gold/90">like wildflowers.</em>
          </h1>
          <p className="fade-up delay-200 mt-8 max-w-xl text-cream/70">
            A selection of weddings, elopements and quiet portraits from across
            Italy, France and the Mediterranean.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <div className="space-y-32">
          {stories.map((s, i) => (
            <article
              key={s.names}
              className={`grid gap-8 md:grid-cols-12 md:gap-12 ${i % 2 === 1 ? "md:[&>figure]:order-2" : ""}`}
            >
              <figure className="image-frame md:col-span-8">
                <img
                  src={s.img}
                  alt={s.names}
                  loading="lazy"
                  className={`w-full object-cover ${s.aspect === "tall" ? "h-[500px] md:h-[720px]" : "h-[400px] md:h-[560px]"}`}
                />
              </figure>
              <div className="flex flex-col justify-end md:col-span-4">
                <p className="eyebrow">No. {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-4 text-3xl md:text-4xl">{s.names}</h2>
                <p className="mt-3 text-sm tracking-widest uppercase text-muted-foreground">
                  {s.place} · {s.year}
                </p>
                <p className="mt-6 leading-relaxed text-foreground/80">
                  A wedding shaped by long tables, low candlelight, and the kind
                  of laughter that ends in held hands. Photographed on Portra
                  400 and a digital Leica.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-32 border-t border-border pt-16 text-center">
          <p className="eyebrow">Limited Commissions</p>
          <h2 className="mt-6 text-4xl md:text-5xl">
            If your story belongs here, we'd love to hear it.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 border-b border-burgundy pb-1 text-[0.7rem] tracking-[0.3em] uppercase text-burgundy hover:text-gold"
          >
            Enquire about your date →
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}