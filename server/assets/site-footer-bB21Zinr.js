import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-B7SN_X_X.js";
import { L as Link } from "./router-ck0v4stG.js";
const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Investment" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "absolute left-0 right-0 top-0 z-30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12 md:py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex flex-col leading-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl tracking-tight text-cream md:text-3xl", children: "Maison Lumière" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[0.6rem] tracking-[0.4em] text-cream/70 uppercase", children: "Wedding Photography" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-10 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          className: "text-[0.7rem] tracking-[0.3em] uppercase text-cream/85 transition-colors hover:text-gold",
          activeProps: { className: "text-gold" },
          activeOptions: { exact: l.to === "/" },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen((v) => !v),
          "aria-label": "Toggle menu",
          className: "flex h-10 w-10 items-center justify-center text-cream md:hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative block h-3 w-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-0 h-px w-full bg-current" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 h-px w-full bg-current" })
          ] })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-cream/20 bg-ink/95 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col px-6 py-6", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: l.to,
        onClick: () => setOpen(false),
        className: "py-3 text-[0.7rem] tracking-[0.3em] uppercase text-cream/85",
        activeProps: { className: "text-gold" },
        activeOptions: { exact: l.to === "/" },
        children: l.label
      },
      l.to
    )) }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border/60 bg-ink text-cream", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-3 md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl", children: "Maison Lumière" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[0.6rem] tracking-[0.4em] text-cream/60 uppercase", children: "Wedding Photography" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xs text-sm leading-relaxed text-cream/70", children: "Heirloom photographs of weddings worth remembering. Documenting love stories across Italy, France & beyond." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold", children: "Explore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", className: "block text-cream/80 hover:text-gold", children: "Portfolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "block text-cream/80 hover:text-gold", children: "Investment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "block text-cream/80 hover:text-gold", children: "About" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "block text-cream/80 hover:text-gold", children: "Contact" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold", children: "Studio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80", children: "Florence · Paris" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80", children: "hello@maisonlumiere.co" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80", children: "+39 055 000 0000" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-gold", children: "Letters" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-cream/70", children: "Quiet stories, occasionally — sent only when there is something worth saying." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-5 flex border-b border-cream/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "your email",
              className: "flex-1 bg-transparent py-2 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "text-[0.65rem] tracking-[0.3em] uppercase text-gold hover:text-cream",
              children: "Subscribe"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-cream/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-[0.65rem] tracking-[0.25em] uppercase text-cream/40 md:flex-row md:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Maison Lumière"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with quiet devotion" })
    ] }) })
  ] });
}
export {
  SiteHeader as S,
  SiteFooter as a
};
