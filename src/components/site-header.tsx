import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Investment" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl tracking-tight text-cream md:text-3xl">
            Maison Lumière
          </span>
          <span className="mt-1 text-[0.6rem] tracking-[0.4em] text-cream/70 uppercase">
            Wedding Photography
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.7rem] tracking-[0.3em] uppercase text-cream/85 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center text-cream md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span className="absolute left-0 top-0 h-px w-full bg-current" />
            <span className="absolute bottom-0 left-0 h-px w-full bg-current" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/20 bg-ink/95 md:hidden">
          <nav className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-[0.7rem] tracking-[0.3em] uppercase text-cream/85"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}