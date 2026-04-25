import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Lumière" },
      {
        name: "description",
        content: "Begin a conversation about photographing your wedding. Limited commissions for 2026.",
      },
      { property: "og:title", content: "Contact — Maison Lumière" },
      { property: "og:description", content: "Begin a conversation. Limited commissions for 2026." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-background">
      <div className="bg-ink">
        <SiteHeader />
      </div>

      <section className="mx-auto max-w-[1400px] px-6 pt-32 pb-24 md:px-12 md:pt-44 md:pb-32">
        <div className="grid gap-16 md:grid-cols-12 md:gap-24">
          <div className="md:col-span-5">
            <p className="eyebrow fade-up">Begin a Conversation</p>
            <h1 className="fade-up delay-100 mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Tell us<br />
              <em className="font-light italic text-burgundy">your story.</em>
            </h1>
            <p className="mt-8 leading-relaxed text-foreground/75">
              We reply to every enquiry within three days, often sooner. There
              is no formula — write as much or as little as feels right.
            </p>

            <div className="mt-12 space-y-6 border-t border-border pt-10">
              <div>
                <p className="eyebrow">Studio</p>
                <p className="mt-2 font-display text-xl">Florence · Paris</p>
              </div>
              <div>
                <p className="eyebrow">Direct</p>
                <p className="mt-2 font-display text-xl">hello@maisonlumiere.co</p>
              </div>
              <div>
                <p className="eyebrow">By Phone</p>
                <p className="mt-2 font-display text-xl">+39 055 000 0000</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-border bg-card p-12 text-center md:p-16">
                <p className="eyebrow text-burgundy">Thank you</p>
                <h2 className="mt-6 font-display text-4xl">
                  Your note is on its way to the studio.
                </h2>
                <p className="mt-6 leading-relaxed text-foreground/75">
                  We'll be in touch within three days. In the meantime, may
                  your week be quietly lovely.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Partner's name" name="partner" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Wedding date (or season)" name="date" />
                  <Field label="Location" name="location" placeholder="e.g. Tuscany" />
                </div>

                <label className="block">
                  <span className="eyebrow">Tell us about your day</span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="How you met, where you're marrying, what matters most…"
                    className="mt-3 w-full border-b border-input bg-transparent py-3 font-display text-lg leading-relaxed placeholder:font-sans placeholder:text-base placeholder:italic placeholder:text-muted-foreground focus:border-burgundy focus:outline-none"
                  />
                </label>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-burgundy px-10 py-4 text-[0.7rem] tracking-[0.3em] uppercase text-cream transition-colors hover:bg-ink"
                >
                  Send Enquiry
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow">
        {label}
        {required && <span className="text-burgundy">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-input bg-transparent py-3 font-display text-lg placeholder:text-base placeholder:italic placeholder:text-muted-foreground focus:border-burgundy focus:outline-none"
      />
    </label>
  );
}