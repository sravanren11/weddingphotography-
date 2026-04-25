import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import photographer from "@/assets/photographer.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Lumière" },
      {
        name: "description",
        content: "Founded in Florence in 2014. A small studio devoted to slow, cinematic wedding photography.",
      },
      { property: "og:title", content: "About — Maison Lumière" },
      { property: "og:description", content: "A small studio devoted to slow, cinematic wedding photography." },
      { property: "og:image", content: photographer },
      { name: "twitter:image", content: photographer },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background">
      <div className="bg-ink">
        <SiteHeader />
      </div>

      <section className="bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 pt-32 pb-24 md:grid-cols-12 md:gap-20 md:px-12 md:pt-44 md:pb-32">
          <div className="image-frame md:col-span-5">
            <img
              src={photographer}
              alt="Portrait of the founding photographer"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-[480px] w-full object-cover md:h-[720px]"
            />
          </div>
          <div className="md:col-span-7 md:pt-20">
            <p className="eyebrow">A Word, by way of introduction</p>
            <h1 className="mt-6 text-5xl leading-[1.1] md:text-6xl">
              I'm Aurélie<span className="text-burgundy">.</span><br />
              <em className="font-light italic">Welcome to the studio.</em>
            </h1>
            <div className="mt-10 space-y-6 leading-relaxed text-foreground/80">
              <p>
                Maison Lumière began in 2014, in a sun-bleached apartment above
                a flower market in Florence. It started small — one camera, one
                roll of film, and a quiet conviction that wedding photographs
                ought to feel like the day they came from.
              </p>
              <p>
                A decade and two hundred weddings later, that conviction
                hasn't moved. We still work mostly on film. We still believe in
                long, unhurried days. And we still photograph fewer weddings
                each year than most studios shoot in a season — because the
                photographs that matter take the time they take.
              </p>
              <p>
                I'm based between Florence and Paris, and travel often. If
                you've made it this far, I'd love to hear about your wedding.
              </p>
              <p className="font-display text-2xl italic text-burgundy">
                — Aurélie Lavigne, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border/60 bg-secondary/30 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <p className="eyebrow text-center">How we work</p>
          <h2 className="mt-4 text-center text-4xl md:text-5xl">Three quiet principles</h2>

          <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-12">
            {[
              {
                no: "I.",
                title: "Slowness",
                body: "We arrive early, stay late, and refuse to rush a moment that's still becoming itself.",
              },
              {
                no: "II.",
                title: "Film, mostly",
                body: "Medium-format film for the soft, certain colour that no algorithm has learned to imitate.",
              },
              {
                no: "III.",
                title: "Honesty",
                body: "No staging, no posing the unposeable. We document what's there — beautifully, but as it is.",
              },
            ].map((p) => (
              <div key={p.no}>
                <p className="font-display text-5xl text-gold">{p.no}</p>
                <h3 className="mt-6 text-2xl">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-foreground/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured in */}
      <section className="bg-background py-24 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <p className="eyebrow text-center">As Featured In</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 font-display text-2xl italic text-muted-foreground md:text-3xl">
            <span>Vogue Sposa</span>
            <span>·</span>
            <span>Harper's Bazaar</span>
            <span>·</span>
            <span>Magnolia Rouge</span>
            <span>·</span>
            <span>Once Wed</span>
            <span>·</span>
            <span>Condé Nast Traveler</span>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-center text-cream md:py-32">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-4xl text-cream md:text-5xl">Shall we talk?</h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex border border-gold/60 px-8 py-4 text-[0.7rem] tracking-[0.3em] uppercase text-cream hover:bg-gold hover:text-ink"
          >
            Begin a conversation
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}