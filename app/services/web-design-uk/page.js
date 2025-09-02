// app/services/web-design-uk/page.js
import Script from "next/script";

export const metadata = {
  title: "Website Design Services UK | Affordable to Advanced — Ovidiu.IT",
  description:
    "Next.js websites for UK businesses — from simple 3–5 page sites to advanced builds with automations and AI. Transparent pricing ranges and fast delivery.",
  alternates: { canonical: "/services/web-design-uk" },
  robots: { index: true, follow: true },
  keywords: [
    "website design services UK",
    "affordable web design London",
    "Next.js developer UK",
    "small business website UK",
    "web design pricing UK",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/services/web-design-uk",
    siteName: "Ovidiu.IT",
    title: "Website Design Services UK | Affordable to Advanced — Ovidiu.IT",
    description:
      "Custom Next.js websites built for speed, SEO and conversions. Clear pricing ranges for UK businesses.",
    images: [
      {
        url: "/og/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Affordable to Advanced Web Design UK — Ovidiu.IT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Services UK | Affordable to Advanced — Ovidiu.IT",
    description:
      "From starter sites to advanced builds with automations and AI. Clear pricing ranges, UK-focused.",
    images: ["/og/og-image-1200x630.png"],
  },
};

export default function WebDesignUKPage() {
  const faqItems = [
    {
      q: "How much does a website cost in the UK?",
      a: "Projects start from £1,500 for a simple 3–5 page site. Most business websites range between £3,000–£6,000. Complex builds with custom features, automations or AI branding can reach £10,000+.",
    },
    {
      q: "What’s the typical timeline?",
      a: "Basic site: 2–3 weeks. Business site: 4–6 weeks. Complex/AI site: 6–10 weeks. Timelines assume content readiness and staged reviews.",
    },
    {
      q: "Is SEO included?",
      a: "Yes — technical SEO foundations are included: metadata, OG/Twitter, JSON-LD (Service/FAQ), sitemap, robots and performance polish.",
    },
    {
      q: "What stack do you use?",
      a: "Next.js + Tailwind on Vercel. Optional headless CMS (Sanity/Notion/Markdown). Integrations with Sheets/Email/Slack are available.",
    },
    {
      q: "Who hosts and owns the website?",
      a: "You do. We set up Vercel under your account and hand over the code repo. You own your content and infrastructure.",
    },
  ];

  // JSON-LD: Service + AggregateOffer + FAQ (UK, GBP)
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ovidiu.it.com/services/web-design-uk#service",
        name: "Website Design Services UK",
        serviceType: "Website Design",
        provider: {
          "@type": "Organization",
          name: "Ovidiu.IT",
          url: "https://ovidiu.it.com/",
        },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        description:
          "Next.js website design for UK businesses. Fast, SEO-ready, conversion-focused builds, from simple 3–5 page sites to advanced projects with automations and AI.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "GBP",
          lowPrice: "1500",
          highPrice: "10000",
          url: "https://ovidiu.it.com/services/web-design-uk",
          offerCount: 3,
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://ovidiu.it.com/services/web-design-uk#faq",
        mainEntity: faqItems.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <main className="container mx-auto px-4 py-10">
      {/* JSON-LD (headless via next/script) */}
      <Script id="ld-json-web-design-uk" type="application/ld+json">
        {JSON.stringify(ldJson)}
      </Script>

      <section className="hero-card card-luxe mb-10">
        <p className="text-sm text-zinc-300 mb-2">Web Design — UK & London</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Website Design Services in the UK
        </h1>
        <p className="mt-3 text-zinc-300">
          Affordable to advanced. From simple 3–5 page sites to complex builds
          with automations and AI — all SEO-ready and fast on Vercel.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/contact" className="btn-primary">Get a Quote</a>
          <a href="/projects" className="btn-ghost">View Projects</a>
          <a href="/services" className="btn-ghost">All Services</a>
        </div>
      </section>

      {/* Three-tier clarity: Basic / Business / Advanced */}
      <section className="grid md:grid-cols-3 gap-6">
        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Basic (Starter)</h3>
          <p className="text-zinc-300">
            3–5 pages, custom design, Next.js build, performance polish and
            technical SEO foundations. Ideal for a clean, fast presence.
          </p>
          <p className="mt-3 text-zinc-300">
            <strong>From £1,500</strong> · Timeline: <strong>2–3 weeks</strong>
          </p>
        </article>

        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Business (Most Popular)</h3>
          <p className="text-zinc-300">
            5–10 pages, deeper UX, CMS (Sanity/Notion/Markdown), tracking,
            on-page SEO, and guided content process.
          </p>
          <p className="mt-3 text-zinc-300">
            <strong>£3,000–£6,000</strong> · Timeline: <strong>4–6 weeks</strong>
          </p>
        </article>

        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Advanced / AI</h3>
          <p className="text-zinc-300">
            Custom features, automations (GAS + Sheets + Email), AI-assisted
            branding/content, integrations, and bespoke components.
          </p>
          <p className="mt-3 text-zinc-300">
            <strong>£6,000–£10,000+</strong> · Timeline: <strong>6–10 weeks</strong>
          </p>
        </article>
      </section>

      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Why Next.js</h3>
          <p className="text-zinc-300">
            Hybrid rendering, built-in Image optimisation, App Router,
            excellent Core Web Vitals — a strong foundation for SEO and conversions.
          </p>
        </article>
        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">SEO included</h3>
          <p className="text-zinc-300">
            Metadata, OG/Twitter, JSON-LD (Service/FAQ), sitemap & robots,
            clean IA and performance tuning — ready for UK SERPs.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className="mt-10 card-luxe">
        <h3 className="text-xl font-semibold mb-2">FAQ — Website design UK</h3>
        <ul className="text-zinc-300 list-disc pl-5 space-y-2">
          <li>
            <strong>Cost:</strong> projects start from £1,500; most business sites £3,000–£6,000; complex builds £10,000+.
          </li>
          <li>
            <strong>Timeline:</strong> Basic 2–3 weeks · Business 4–6 weeks · Advanced/AI 6–10 weeks.
          </li>
          <li>
            <strong>Hosting:</strong> Vercel (included in setup, billed to client).
          </li>
          <li>
            <strong>CMS:</strong> Optional (Sanity/Notion/Markdown) based on team workflow.
          </li>
          <li>
            <strong>Maintenance:</strong> Optional monthly SEO & updates, plus automation support.
          </li>
        </ul>
        <div className="mt-6">
          <a href="/contact" className="btn-primary">Start Your Project</a>
        </div>
      </section>
    </main>
  );
}
