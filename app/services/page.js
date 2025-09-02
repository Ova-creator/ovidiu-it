// app/services/page.js
import Script from "next/script";
import QuoteLink from "../../components/QuoteLink";

export const metadata = {
  title: "Services — Web, SEO, Automation | Ovidiu.IT",
  description: "Websites in Next.js, technical SEO, and admin automations.",
  alternates: { canonical: "/services" },
};

const faqs = [
  {
    q: "What’s the minimum project budget?",
    a: "Web design projects typically start from £1,500. SEO retainers usually start from £800/month. Automation projects start from £1,000 depending on scope.",
  },
  {
    q: "How long does a website take?",
    a: "A premium site (design → dev → live) usually takes 2–6 weeks depending on complexity and content readiness.",
  },
  {
    q: "What’s included in technical SEO?",
    a: "Core Web Vitals, metadata/OG/Twitter, JSON-LD, sitemaps & robots, clean IA, and basic accessibility checks.",
  },
  {
    q: "Do you build automations with Sheets/Email?",
    a: "Yes. Secure forms, HTML autoresponder, Google Sheets dashboards, and Slack/Trello integrations.",
  },
];

export default function ServicesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      {/* JSON-LD: generic Service page + FAQ (nu afectează UI) */}
      <Script
        id="jsonld-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Development, SEO, Automation",
            provider: { "@type": "Organization", name: "Ovidiu.IT" },
            areaServed: { "@type": "Country", name: "United Kingdom" },
          }),
        }}
      />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="container mx-auto px-4 py-12">
        <section className="hero-card card-luxe mb-10">
          <p className="text-sm text-zinc-300 mb-2">Ovidiu.IT — Next.js + SEO</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Services: <span className="text-[var(--accent)]">Web</span>, SEO &amp; Automation
          </h1>
          <p className="mt-3 text-zinc-300">
            Fast, clean, SEO-ready websites, technical SEO foundations, and automations that save hours.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <a href="/contact" className="btn-primary">Get a Quote</a>
            <a href="/projects" className="btn-ghost">View Projects</a>
            {/* linkuri interne vizibile către landing-urile UK */}
            <a href="/services/web-design-uk" className="btn-ghost">Website Design UK</a>
            <a href="/services/seo-uk" className="btn-ghost">SEO Services UK</a>
            <a href="/services/automation-uk" className="btn-ghost">Automation UK</a>
          </div>
        </section>

        {/* Cards servicii — păstrat stilul; adăugat 3 carduri UK dedicate */}
        <section className="grid md:grid-cols-3 gap-6">
          <article className="card-luxe">
            <h3 className="text-xl font-semibold mb-2">Next.js Websites</h3>
            <ul className="list-disc ml-5 space-y-1 text-zinc-300">
              <li>App Router + Tailwind + a11y</li>
              <li>Clean UI components & CTAs</li>
              <li>Deploy on Vercel</li>
            </ul>
          </article>

          <article className="card-luxe">
            <h3 className="text-xl font-semibold mb-2">Technical SEO</h3>
            <ul className="list-disc ml-5 space-y-1 text-zinc-300">
              <li>Metadata & JSON-LD</li>
              <li>Sitemaps & robots tuning</li>
              <li>Image & asset optimization</li>
            </ul>
          </article>

          <article className="card-luxe">
            <h3 className="text-xl font-semibold mb-2">Automation</h3>
            <ul className="list-disc ml-5 space-y-1 text-zinc-300">
              <li>Secure forms with spam guard</li>
              <li>Sheets dashboards & HTML autoresponder</li>
              <li>Slack/Trello integrations</li>
            </ul>
          </article>

          {/* UK-specific cards */}
          <article className="card-luxe">
            <h3 className="text-xl font-semibold mb-2">Website Design UK</h3>
            <p className="text-zinc-300">
              Affordable to advanced — Next.js websites for UK businesses.
            </p>
            <div className="mt-3">
              <a href="/services/web-design-uk" className="btn-ghost">Learn More</a>
            </div>
          </article>

          <article className="card-luxe">
            <h3 className="text-xl font-semibold mb-2">SEO Services UK</h3>
            <p className="text-zinc-300">
              Technical + content SEO with monthly retainers and clear KPIs.
            </p>
            <div className="mt-3">
              <a href="/services/seo-uk" className="btn-ghost">Learn More</a>
            </div>
          </article>

          <article className="card-luxe">
            <h3 className="text-xl font-semibold mb-2">Automation UK</h3>
            <p className="text-zinc-300">
              Google Apps Script + Sheets + Email to replace manual work.
            </p>
            <div className="mt-3">
              <a href="/services/automation-uk" className="btn-ghost">Learn More</a>
            </div>
          </article>
        </section>

        {/* FAQ */}
        <section className="card-luxe mt-10">
          <h3 className="text-xl font-semibold mb-4">
            <span className="text-[var(--accent)]">FAQ</span> — quick answers
          </h3>
          <div className="space-y-2">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="rounded-xl border border-[var(--card-border)] bg-[rgba(255,255,255,.03)]"
              >
                <summary className="cursor-pointer px-4 py-3 font-medium list-none">
                  {q}
                </summary>
                <div className="px-4 pb-4 text-zinc-300">{a}</div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
