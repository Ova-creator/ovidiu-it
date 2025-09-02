// app/services/seo-uk/page.js
import Script from "next/script";

export const metadata = {
  title: "SEO Services UK | Technical SEO & Content — Ovidiu.IT",
  description:
    "UK-focused SEO: technical foundations, on-page optimisation, content strategy and clean analytics. Audits and monthly retainers with clear KPIs.",
  alternates: { canonical: "/services/seo-uk" },
  robots: { index: true, follow: true },
  keywords: [
    "SEO services UK",
    "technical SEO UK",
    "SEO audit UK",
    "SEO consultant London",
    "content SEO UK",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/services/seo-uk",
    siteName: "Ovidiu.IT",
    title: "SEO Services UK | Technical SEO & Content — Ovidiu.IT",
    description:
      "Audits, technical SEO, on-page optimisation and content. UK-focused monthly retainers with KPIs.",
    images: [{ url: "/og/og-image-1200x630.png", width: 1200, height: 630, alt: "SEO Services UK — Ovidiu.IT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services UK | Technical SEO & Content — Ovidiu.IT",
    description: "Technical foundations + content. Audits and retainers with KPIs.",
    images: ["/og/og-image-1200x630.png"],
  },
};

export default function SEOUKPage() {
  const faq = [
    {
      q: "How much does SEO cost in the UK?",
      a: "Initial audits start from £1,200. Monthly retainers typically range £800–£2,500 depending on scope, content velocity and link building.",
    },
    {
      q: "What’s included in technical SEO?",
      a: "CWV, metadata/OG/Twitter, JSON-LD, sitemaps/robots, crawl & index fixes, site architecture and internal linking.",
    },
    {
      q: "How do you measure results?",
      a: "Keyword tracking (UK), Search Console, Analytics, and business KPIs (leads, revenue). Monthly performance reports included.",
    },
  ];

  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ovidiu.it.com/services/seo-uk#service",
        name: "SEO Services UK",
        serviceType: "SEO",
        provider: { "@type": "Organization", name: "Ovidiu.IT", url: "https://ovidiu.it.com/" },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        description:
          "Technical SEO, on-page optimisation and content strategy for UK businesses. Audits and monthly retainers with clear KPIs.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "GBP",
          lowPrice: "800",
          highPrice: "2500",
          url: "https://ovidiu.it.com/services/seo-uk",
          offerCount: 2,
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://ovidiu.it.com/services/seo-uk#faq",
        mainEntity: faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <Script id="ld-json-seo-uk" type="application/ld+json">
        {JSON.stringify(ldJson)}
      </Script>

      <section className="hero-card card-luxe mb-10">
        <p className="text-sm text-zinc-300 mb-2">SEO — UK & London</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          SEO Services in the UK
        </h1>
        <p className="mt-3 text-zinc-300">
          Technical foundations, on-page optimisation and content — focused on
          UK search intent with clear KPIs and monthly reporting.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/contact" className="btn-primary">Get an SEO Audit</a>
          <a href="/services" className="btn-ghost">All Services</a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Audit & Fix</h3>
          <p className="text-zinc-300">
            Technical crawl, CWV review, schema, sitemaps/robots, internal linking and index coverage fixes.
          </p>
          <p className="mt-3 text-zinc-300"><strong>From £1,200 (one-off)</strong></p>
        </article>

        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Monthly Retainer</h3>
          <p className="text-zinc-300">
            Roadmap + execution: on-page optimisation, content briefs, link outreach and reporting.
          </p>
          <p className="mt-3 text-zinc-300"><strong>£800–£2,500 / month</strong></p>
        </article>

        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Content & Assets</h3>
          <p className="text-zinc-300">
            UK-focused guides, case studies and landing pages targeting high-intent keywords.
          </p>
        </article>
      </section>

      <section className="mt-10 card-luxe">
        <h3 className="text-xl font-semibold mb-2">FAQ — SEO UK</h3>
        <ul className="text-zinc-300 list-disc pl-5 space-y-2">
          {faq.map(({ q, a }, i) => (
            <li key={i}><strong>{q} </strong> {a}</li>
          ))}
        </ul>
        <div className="mt-6">
          <a href="/contact" className="btn-primary">Request an Audit</a>
        </div>
      </section>
    </main>
  );
}
