import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-ink text-cream">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-3 md:px-12">
        <div>
          <p className="font-display text-3xl">Maison Lumière</p>
          <p className="mt-1 text-[0.6rem] tracking-[0.4em] text-cream/60 uppercase">
            Wedding Photography
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/70">
            Heirloom photographs of weddings worth remembering. Documenting love
            stories across Italy, France & beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <p className="eyebrow text-gold">Explore</p>
            <Link to="/portfolio" className="block text-cream/80 hover:text-gold">Portfolio</Link>
            <Link to="/services" className="block text-cream/80 hover:text-gold">Investment</Link>
            <Link to="/about" className="block text-cream/80 hover:text-gold">About</Link>
            <Link to="/contact" className="block text-cream/80 hover:text-gold">Contact</Link>
          </div>
          <div className="space-y-3">
            <p className="eyebrow text-gold">Studio</p>
            <p className="text-cream/80">Florence · Paris</p>
            <p className="text-cream/80">hello@maisonlumiere.co</p>
            <p className="text-cream/80">+39 055 000 0000</p>
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold">Letters</p>
          <p className="mt-3 text-sm text-cream/70">
            Quiet stories, occasionally — sent only when there is something
            worth saying.
          </p>
          <form className="mt-5 flex border-b border-cream/30">
            <input
              type="email"
              placeholder="your email"
              className="flex-1 bg-transparent py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="submit"
              className="text-[0.65rem] tracking-[0.3em] uppercase text-gold hover:text-cream"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-[0.65rem] tracking-[0.25em] uppercase text-cream/40 md:flex-row md:px-12">
          <p>© {new Date().getFullYear()} Maison Lumière</p>
          <p>Crafted with quiet devotion</p>
        </div>
      </div>
    </footer>
  );
}