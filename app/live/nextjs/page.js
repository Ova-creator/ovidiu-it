// app/live/nextjs/page.js
import Script from "next/script";
import Image from "next/image";

export const metadata = {
  title: "Next.js Projects — Gallery (Demo)",
  description:
    "Selection of Next.js builds and templates, ready to brand and ship.",
  robots: { index: false }, // demo: noindex (respectăm guardrails)
  openGraph: {
    type: "website",
    title: "Next.js Projects — Gallery (Demo) | Ovidiu.IT",
    description:
      "Product-grade Next.js builds & starter templates. Clean IA, Tailwind, SEO & performance.",
    url: "/live/nextjs",
    images: [
      {
        url: "/og/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Next.js projects gallery — product-grade builds & templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Projects — Gallery (Demo) | Ovidiu.IT",
    description:
      "Starter templates and live projects built with Next.js and Tailwind.",
    images: ["/og/og-image-1200x630.png"],
  },
};

const templates = [
  {
    title: "Corporate Blue",
    desc: "Clean IA, pricing, FAQ",
    href: "https://premium-templates-theta.vercel.app/live/web1",
    img: "live_web1.png",
  },
  {
    title: "Tech Green",
    desc: "Dark, code vibe, testimonials",
    href: "https://premium-templates-theta.vercel.app/live/web2",
    img: "live_web2.png",
  },
  {
    title: "Pastel Creative",
    desc: "Services + portfolio",
    href: "https://premium-templates-theta.vercel.app/live/web3",
    img: "live_web3.png",
  },
  {
    title: "Luxury Mono",
    desc: "Editorial serif, gallery",
    href: "https://premium-templates-theta.vercel.app/live/web4",
    img: "live_web4.png",
  },
];

export default function NextjsGallery() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Next.js Projects — Gallery",
    inLanguage: "en-GB",
    hasPart: [
      {
        "@type": "CreativeWork",
        name: "EgoDentLab — Dental Lab Website",
        url: "https://egodentlab.vercel.app/",
        image: "/previews/egodentlab.png",
        about: ["Next.js", "Core Web Vitals", "Dental lab website"],
        inLanguage: "en-GB",
      },
      ...templates.map((t) => ({
        "@type": "CreativeWork",
        name: `${t.title} (Template)`,
        url: t.href,
        image: `/previews/${t.img}`,
        about: ["Next.js template", t.desc],
        inLanguage: "en-GB",
      })),
    ],
  };

  return (
    <>
      {/* Schema.org */}
      <Script
        id="jsonld-nextjs-gallery"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      <main className="container mx-auto px-4 py-10">
        {/* HERO */}
        <section className="hero-card card-luxe mb-8 text-center">
          <h1 className="text-4xl font-extrabold">Next.js Projects — Gallery</h1>
          <p className="mt-2 text-zinc-300">
            Selection of builds & templates. Internals open in the same tab; externals open in a new one.
          </p>
        </section>

        {/* LIVE PROJECTS (extern ↗ — Link Policy: new-tab + rel) */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold">Featured live project</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="card-luxe">
              <div className="relative rounded-xl overflow-hidden h-44 border border-[var(--card-border)]">
                <Image
                  src="/previews/egodentlab.png"
                  alt="EgoDentLab — Dental Lab Website preview"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  priority
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                EgoDentLab — Dental Lab Website
              </h3>
              <p className="text-sm text-zinc-300">
                Fast CWV, clear CTAs, clean UX
              </p>
              <div className="mt-4">
                <a
                  href="https://egodentlab.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Open live ↗
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* STARTER TEMPLATES (extern ↗ către Vercel demo) */}
        <section>
          <h2 className="text-xl font-semibold">Starter templates</h2>
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((t) => (
              <article key={t.title} className="card-luxe">
                <div className="relative rounded-xl overflow-hidden h-44 border border-[var(--card-border)]">
                  <Image
                    src={`/previews/${t.img}`}
                    alt={`${t.title} preview`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{t.title}</h3>
                <p className="text-sm text-zinc-300">{t.desc}</p>
                <div className="mt-4">
                  <a
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    aria-label={`${t.title} (opens in a new tab)`}
                  >
                    View demo ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA final (intern, same-tab) */}
        <section className="mt-12 text-center">
          <a href="/contact" className="btn-primary">Start your project</a>
        </section>
      </main>
    </>
  );
}
