import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-B7SN_X_X.js";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-bB21Zinr.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-ck0v4stG.js";
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-ink", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-[1400px] px-6 pt-32 pb-24 md:px-12 md:pt-44 md:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 md:grid-cols-12 md:gap-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow fade-up", children: "Begin a Conversation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "fade-up delay-100 mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl", children: [
          "Tell us",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "font-light italic text-burgundy", children: "your story." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 leading-relaxed text-foreground/75", children: "We reply to every enquiry within three days, often sooner. There is no formula — write as much or as little as feels right." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 space-y-6 border-t border-border pt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl", children: "Florence · Paris" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Direct" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl", children: "hello@maisonlumiere.co" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "By Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl", children: "+39 055 000 0000" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-card p-12 text-center md:p-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-burgundy", children: "Thank you" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl", children: "Your note is on its way to the studio." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 leading-relaxed text-foreground/75", children: "We'll be in touch within three days. In the meantime, may your week be quietly lovely." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Partner's name", name: "partner" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Wedding date (or season)", name: "date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Location", name: "location", placeholder: "e.g. Tuscany" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Tell us about your day" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 6, placeholder: "How you met, where you're marrying, what matters most…", className: "mt-3 w-full border-b border-input bg-transparent py-3 font-display text-lg leading-relaxed placeholder:font-sans placeholder:text-base placeholder:italic placeholder:text-muted-foreground focus:border-burgundy focus:outline-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "group inline-flex items-center gap-3 bg-burgundy px-10 py-4 text-[0.7rem] tracking-[0.3em] uppercase text-cream transition-colors hover:bg-ink", children: [
          "Send Enquiry",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "eyebrow", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-burgundy", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, placeholder, className: "mt-3 w-full border-b border-input bg-transparent py-3 font-display text-lg placeholder:text-base placeholder:italic placeholder:text-muted-foreground focus:border-burgundy focus:outline-none" })
  ] });
}
export {
  ContactPage as component
};
