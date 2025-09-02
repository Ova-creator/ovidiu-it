// app/page.js
import Script from "next/script";
import QuoteLink from "../components/QuoteLink";
import { posts } from "../lib/blogPosts";

export const metadata = {
  title: "Website Design & SEO Services UK | Ovidiu.IT",
  description:
    "Affordable website design, SEO services, and Next.js development for UK businesses. Based in London/Wembley. Get a fast, SEO-friendly website that converts.",
  keywords: [
    "website design services UK",
    "SEO services UK",
    "Next.js developer UK",
    "affordable web design London",
    "hire web developer UK",
    "website automation UK",
    "personal branding with AI",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Ovidiu.IT",
    title: "Website Design & SEO Services UK | Ovidiu.IT",
    description:
      "Affordable web design & SEO in the UK. Next.js expert building fast, secure, SEO-first sites for small businesses and freelancers.",
    images: [
      {
        url: "/og/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Ovidiu.IT — Website Design & SEO Services UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OvidiuIT",
    title: "Website Design & SEO Services UK | Ovidiu.IT",
    description:
      "Next.js websites and SEO services for UK businesses. Fast, accessible, conversion-first.",
    images: ["/og/og-image-1200x630.png"],
  },
};

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-10">
      {/* JSON-LD — Organization + WebSite + Service */}
      <Script id="ld-json-home" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://ovidiu.it.com/#org",
              name: "Ovidiu.IT",
              url: "https://ovidiu.it.com/",
              logo: "https://ovidiu.it.com/logo.svg",
              sameAs: [
                "https://www.linkedin.com/company/ovidiuit",
                "https://github.com/Ova-creator",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "digital@ovidiu.it.com",
                  areaServed: "GB",
                  availableLanguage: ["en-GB", "ro-RO"],
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://ovidiu.it.com/#website",
              url: "https://ovidiu.it.com/",
              name: "Ovidiu.IT",
              inLanguage: "en-GB",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://ovidiu.it.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Service",
              "@id": "https://ovidiu.it.com/#service-web-design-seo-uk",
              serviceType: "Website Design & SEO",
              provider: { "@id": "https://ovidiu.it.com/#org" },
              areaServed: { "@type": "Country", name: "United Kingdom" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web & SEO Packages (UK)",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Website Design (Next.js)",
                    url: "https://ovidiu.it.com/services/web-design-uk",
                    priceCurrency: "GBP",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    name: "SEO Services (UK)",
                    url: "https://ovidiu.it.com/services/seo-uk",
                    priceCurrency: "GBP",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    name: "Website Automation (GAS + Sheets)",
                    url: "https://ovidiu.it.com/services/automation-uk",
                    priceCurrency: "GBP",
                    availability: "https://schema.org/InStock",
                  },
                ],
              },
            },
          ],
        })}
      </Script>

      {/* HERO existent */}
      <section className="hero-card card-luxe mb-10">
        <p className="text-sm text-zinc-300 mb-2">Ovidiu.IT — Next.js + SEO</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Building <span className="text-[var(--accent)]">Websites</span> that Perform &amp; Convert
        </h1>
        <p className="mt-3 text-zinc-300">
          Premium, UX-ready websites in Next.js — measured SEO and automations that save hours.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/services" className="btn-primary">See Website Creation</a>
          <a href="/projects" className="btn-ghost">View Projects</a>
          <a href="/contact" className="btn-ghost">Start Your Project</a>
          <a href="/blog" className="btn-ghost">Blog</a>
        </div>
      </section>

      {/* GRID existent */}
      <section className="grid md:grid-cols-3 gap-6">
        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Next.js Websites</h3>
          <p className="text-zinc-300">Design → Dev → Deploy on Vercel. App Router, Tailwind, accessibility, performance.</p>
        </article>
        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Technical SEO</h3>
          <p className="text-zinc-300">CWV, metadata/OG/Twitter, JSON-LD, sitemaps & robots, clean IA.</p>
        </article>
        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Automation</h3>
          <p className="text-zinc-300">GAS + Sheets + Email automations to replace manual work.</p>
        </article>
      </section>

      {/* Services in the UK */}
      <section className="card-luxe mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Services in the <span className="text-[var(--accent)]">UK</span>
        </h2>
        <p className="text-zinc-300 mb-4">
          UK-focused services with transparent pricing ranges and fast delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/services/web-design-uk" className="btn-ghost">Website Design UK</a>
          <a href="/services/seo-uk" className="btn-ghost">SEO Services UK</a>
          <a href="/services/automation-uk" className="btn-ghost">Automation UK</a>
        </div>
      </section>

      {/* 🆕 Featured posts — ÎNĂUNTRU, o singură dată */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">
          Featured <span className="text-[var(--accent)]">Posts</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((p) => (
            <article key={p.slug} className="card-luxe">
              <h3 className="text-xl font-semibold mb-1">
                <a href={`/blog/${p.slug}`} className="hover:underline">{p.title}</a>
              </h3>
              <p className="text-zinc-400 text-sm mb-2">
                {new Date(p.date).toLocaleDateString("en-GB", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </p>
              <p className="text-zinc-300">{p.description}</p>
              <div className="mt-3">
                <a href={`/blog/${p.slug}`} className="btn-ghost">Read article</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <a href="/blog" className="btn-ghost">View all posts</a>
        </div>
      </section>
    </main>
  );
}
