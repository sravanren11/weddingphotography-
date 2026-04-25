import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImg from "@/assets/hero-couple.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Lumière — Editorial Wedding Photography" },
      {
        name: "description",
        content:
          "Heirloom wedding photography across Italy, France and beyond. Cinematic, timeless storytelling on film and digital.",
      },
      { property: "og:title", content: "Maison Lumière — Editorial Wedding Photography" },
      {
        property: "og:description",
        content: "Heirloom wedding photography. Cinematic, timeless storytelling.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Bride and groom embracing in a Tuscan vineyard at golden hour"
          width={1600}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />

        <SiteHeader />

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-32">
          <p className="eyebrow fade-up text-gold">Est. MMXIV · Florence</p>
          <h1 className="fade-up delay-100 mt-6 max-w-4xl text-5xl leading-[1.05] text-cream md:text-7xl lg:text-[6.5rem]">
            The quiet poetry<br />
            <em className="font-light italic text-gold/90">of being loved.</em>
          </h1>
          <p className="fade-up delay-200 mt-8 max-w-md text-base leading-relaxed text-cream/80">
            Maison Lumière documents weddings as heirlooms — unhurried, intimate,
            and rendered in the warm grain of film.
          </p>
          <div className="fade-up delay-300 mt-10 flex flex-wrap items-center gap-6">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 border-b border-gold pb-1 text-[0.7rem] tracking-[0.3em] uppercase text-cream"
            >
              View the Portfolio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="text-[0.7rem] tracking-[0.3em] uppercase text-cream/70 hover:text-gold"
            >
              Enquire
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-10 hidden text-[0.6rem] tracking-[0.3em] uppercase text-cream/50 md:block">
          Vol. XII · Spring Editorial
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-28 md:py-40">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="eyebrow">
            <span className="rule mr-4" />
            A Note from the Studio
            <span className="rule ml-4" />
          </p>
          <p className="mt-10 font-display text-3xl leading-[1.4] text-foreground md:text-[2.6rem] md:leading-[1.3]">
            We believe a wedding photograph should feel less like a record and
            more like a <em className="text-burgundy">memory you can hold</em> —
            soft at the edges, certain at the heart.
          </p>
        </div>
      </section>

      {/* EDITORIAL GRID */}
      <section className="bg-background pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Recent stories</h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden text-[0.7rem] tracking-[0.3em] uppercase text-burgundy hover:text-gold md:inline-flex"
            >
              All work →
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <figure className="image-frame col-span-12 md:col-span-7">
              <img
                src={gallery3}
                alt="Outdoor candlelit wedding dinner under string lights"
                width={1280}
                height={1024}
                loading="lazy"
                className="h-[420px] w-full object-cover md:h-[560px]"
              />
              <figcaption className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-display italic">Sofia & Matteo</span>
                <span className="tracking-widest uppercase">Val d'Orcia</span>
              </figcaption>
            </figure>

            <figure className="image-frame col-span-12 md:col-span-5">
              <img
                src={gallery1}
                alt="Bride by tall arched window in lace gown"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-[420px] w-full object-cover md:h-[560px]"
              />
              <figcaption className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-display italic">Eleanor</span>
                <span className="tracking-widest uppercase">Villa Cetinale</span>
              </figcaption>
            </figure>

            <figure className="image-frame col-span-12 mt-6 md:col-span-5">
              <img
                src={gallery4}
                alt="First dance under warm string lights"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
              <figcaption className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-display italic">Camille & Luca</span>
                <span className="tracking-widest uppercase">Provence</span>
              </figcaption>
            </figure>

            <figure className="image-frame col-span-12 mt-6 md:col-span-7">
              <img
                src={gallery2}
                alt="Bride's hand with wedding ring on bouquet of cream roses"
                width={1280}
                height={1024}
                loading="lazy"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
              <figcaption className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-display italic">A quiet detail</span>
                <span className="tracking-widest uppercase">Lake Como</span>
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              to="/portfolio"
              className="text-[0.7rem] tracking-[0.3em] uppercase text-burgundy"
            >
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-y border-border/60 bg-secondary/40 py-28 md:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="eyebrow">In their words</p>
          <blockquote className="mt-8 font-display text-2xl leading-[1.5] italic text-foreground md:text-3xl">
            "Looking through our album felt like reading a love letter someone
            else had written about us. Every frame remembers something we'd
            already half-forgotten."
          </blockquote>
          <p className="mt-8 text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground">
            — Sofia & Matteo · Tuscany
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-32 text-cream md:py-40">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-12">
          <p className="eyebrow text-gold">Limited Commissions</p>
          <h2 className="mt-6 text-5xl text-cream md:text-6xl">
            Twelve weddings each year.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/70">
            We accept a small number of commissions to give every couple the
            time their story deserves. Enquiries open for 2026.
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 border border-gold/60 px-8 py-4 text-[0.7rem] tracking-[0.3em] uppercase text-cream transition-colors hover:bg-gold hover:text-ink"
          >
            Begin a conversation →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
