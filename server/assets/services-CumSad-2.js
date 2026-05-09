import { T as jsxRuntimeExports } from "./worker-entry-B7SN_X_X.js";
import { L as Link } from "./router-ck0v4stG.js";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-bB21Zinr.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const collections = [{
  name: "L'Intime",
  subtitle: "Elopement & Micro-Wedding",
  price: "from €4,800",
  hours: "Six hours of coverage",
  bullets: ["Single photographer", "Hand-edited digital gallery (~400 images)", "One roll of 35mm film, scanned", "Pre-wedding consultation in studio or by call"]
}, {
  name: "La Maison",
  subtitle: "The Signature Collection",
  price: "from €7,400",
  hours: "Ten hours of coverage",
  bullets: ["Lead photographer + second shooter", "Hand-edited gallery (~700 images)", "Three rolls of medium format film", "Engagement or rehearsal portrait session", "Heirloom 10×10 linen-bound proof book"],
  featured: true
}, {
  name: "L'Héritage",
  subtitle: "Multi-Day Editorial",
  price: "from €11,500",
  hours: "Two to three day coverage",
  bullets: ["Lead photographer + second shooter", "Welcome dinner, ceremony, reception, day-after", "Five rolls of medium format film", "Full-day editorial portrait session", "Fine-art Italian leather album, 12×12"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 pt-44 pb-24 text-cream md:px-12 md:pt-52 md:pb-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold fade-up", children: "Investment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "fade-up delay-100 mt-6 text-5xl md:text-7xl", children: [
          "Three ways to be",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold/90", children: "remembered." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fade-up delay-200 mt-8 max-w-xl text-cream/70", children: "Each commission begins with a conversation. Collections are a starting point — every wedding is shaped to its couple." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3 md:gap-8", children: collections.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `relative flex flex-col border p-10 md:p-12 ${c.featured ? "border-burgundy bg-secondary/40" : "border-border bg-card"}`, children: [
        c.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-burgundy px-4 py-1 text-[0.6rem] tracking-[0.35em] uppercase text-cream", children: "Most chosen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: c.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-lg italic text-burgundy", children: c.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs tracking-widest uppercase text-muted-foreground", children: c.hours }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3 border-t border-border/60 pt-8 text-sm leading-relaxed text-foreground/80", children: c.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-px w-3 flex-shrink-0 bg-gold" }),
          b
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 self-start border-b border-burgundy pb-1 text-[0.7rem] tracking-[0.3em] uppercase text-burgundy hover:text-gold", children: "Enquire →" })
      ] }, c.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 grid gap-12 border-t border-border pt-16 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "À la Carte" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-3xl", children: "Albums & Heirlooms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-foreground/80", children: "Italian leather, hand-marbled endpapers, museum-grade pigment prints. Designed in studio, bound in Florence." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-2 text-sm text-foreground/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "10×10 linen-bound album · from €640" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "12×12 leather album · from €1,180" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Parents' duplicate album · from €520" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Travel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-3xl", children: "Wherever you marry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 leading-relaxed text-foreground/80", children: "Travel within Italy and France is included. For weddings further afield — Greece, Morocco, the British countryside — we add transport and lodging at cost." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ServicesPage as component
};
