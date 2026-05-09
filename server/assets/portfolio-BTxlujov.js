import { T as jsxRuntimeExports } from "./worker-entry-B7SN_X_X.js";
import { h as heroImg, g as gallery3, a as gallery2, L as Link } from "./router-ck0v4stG.js";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-bB21Zinr.js";
import { g as gallery1, a as gallery4 } from "./gallery-4-CvRTszb6.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const stories = [{
  img: heroImg,
  names: "Aurelia & Theo",
  place: "Val d'Orcia, Tuscany",
  year: "2025",
  aspect: "tall"
}, {
  img: gallery3,
  names: "Sofia & Matteo",
  place: "Borgo Santo Pietro",
  year: "2024",
  aspect: "wide"
}, {
  img: gallery1,
  names: "Eleanor",
  place: "Villa Cetinale",
  year: "2024",
  aspect: "tall"
}, {
  img: gallery4,
  names: "Camille & Luca",
  place: "Provence",
  year: "2024",
  aspect: "tall"
}, {
  img: gallery2,
  names: "Hands & Roses",
  place: "Lake Como",
  year: "2023",
  aspect: "wide"
}];
function PortfolioPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 pt-44 pb-24 text-cream md:px-12 md:pt-52 md:pb-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold fade-up", children: "The Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "fade-up delay-100 mt-6 text-5xl md:text-7xl lg:text-[5.5rem]", children: [
          "Stories, gathered",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold/90", children: "like wildflowers." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fade-up delay-200 mt-8 max-w-xl text-cream/70", children: "A selection of weddings, elopements and quiet portraits from across Italy, France and the Mediterranean." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-32", children: stories.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `grid gap-8 md:grid-cols-12 md:gap-12 ${i % 2 === 1 ? "md:[&>figure]:order-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "image-frame md:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.names, loading: "lazy", className: `w-full object-cover ${s.aspect === "tall" ? "h-[500px] md:h-[720px]" : "h-[400px] md:h-[560px]"}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-end md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow", children: [
            "No. ",
            String(i + 1).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl md:text-4xl", children: s.names }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm tracking-widest uppercase text-muted-foreground", children: [
            s.place,
            " · ",
            s.year
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 leading-relaxed text-foreground/80", children: "A wedding shaped by long tables, low candlelight, and the kind of laughter that ends in held hands. Photographed on Portra 400 and a digital Leica." })
        ] })
      ] }, s.names)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-32 border-t border-border pt-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Limited Commissions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-4xl md:text-5xl", children: "If your story belongs here, we'd love to hear it." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-3 border-b border-burgundy pb-1 text-[0.7rem] tracking-[0.3em] uppercase text-burgundy hover:text-gold", children: "Enquire about your date →" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  PortfolioPage as component
};
