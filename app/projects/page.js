// app/projects/page.js
import Script from "next/script";
import Image from "next/image";

export const metadata = {
  title: "Projects — Case Studies",
  description:
    "A taste of what you’ll get — fast, clean, and built to convert.",
  openGraph: {
    title: "Projects — Case Studies | Ovidiu.IT",
    description:
      "Fast, clean builds with clear CTAs, Technical SEO, and automations.",
    images: [
      {
        url: "/og-projects-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Ovidiu.IT project case studies — Next.js, Technical SEO and Automations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Case Studies | Ovidiu.IT",
    description:
      "Fast, clean builds with clear CTAs, Technical SEO, and automations.",
    images: ["/og-projects-1200x630.png"],
  },
};

const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function Chips({ items }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2 text-xs">
      {items.map((t, i) => (
        <span
          key={i}
          className="px-2 py-1 rounded-full border border-[var(--card-border)] bg-[rgba(255,255,255,.04)]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  // JSON-LD pentru lucrări (cu image + about) — include și case study-ul nou
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: "Next.js Projects — Gallery",
        url: `${base}/live/nextjs`,
        image: `${base}/nextjs.jpg`,
        about: ["Next.js", "Web design", "Core Web Vitals", "Tailwind"],
        inLanguage: "en-GB",
      },
      {
        "@type": "CreativeWork",
        name: "Technical SEO — Site cleanup",
        url: `${base}/live/seo`,
        image: `${base}/seo.jpg`,
        about: ["Technical SEO", "Sitemaps", "Robots.txt", "JSON-LD"],
        inLanguage: "en-GB",
      },
      {
        "@type": "CreativeWork",
        name: "Automation & Integrations",
        url: `${base}/live/automation`,
        image: `${base}/automation.jpg`,
        about: ["Google Apps Script", "Sheets", "Email automations"],
        inLanguage: "en-GB",
      },
      {
        "@type": "CreativeWork",
        name: "Case Study — EgoDentLab (Dental Lab Website)",
        url: `${base}/projects/egodentlab`,
        image: `${base}/previews/egodentlab.png`,
        about: ["Next.js", "Core Web Vitals", "Dental lab website", "Technical SEO"],
        inLanguage: "en-GB",
      },
    ],
  };

  return (
    <>
      <Script
        id="jsonld-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      <main className="container mx-auto px-4 py-10">
        <section className="hero-card card-luxe mb-8 text-center">
          <h1 className="text-4xl font-extrabold">Projects</h1>
          <p className="mt-2 text-zinc-300">
            A taste of what you’ll get — fast, clean, and built to convert.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {/* Next.js Projects — DEMO (același tab, intern) */}
          <article className="card-luxe">
            <div className="relative rounded-xl overflow-hidden mb-4">
              <a href="/live/nextjs" aria-label="Open Next.js Projects" title="Open demo">
                <Image
                  src="/nextjs.jpg"
                  alt="Next.js project gallery with code and UI preview"
                  width={1200}
                  height={800}
                  className="w-full h-44 object-cover"
                  priority
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-[rgba(255,255,255,.08)] border border-[var(--card-border)] backdrop-blur">
                  Demo
                </span>
              </a>
            </div>

            <h3 className="text-lg font-semibold">
              <a
                href="/live/nextjs"
                className="hover:underline decoration-[var(--accent)] underline-offset-4"
              >
                Next.js Projects — Gallery
              </a>
            </h3>

            <p className="text-[var(--accent)] mt-1">
              Product-grade builds & templates
              <a href="/live/nextjs" className="ml-2 hover:underline">
                See gallery
              </a>
            </p>

            <ul className="list-disc ml-5 mt-3 text-zinc-300 space-y-1">
              <li>Clean IA, strong CTAs</li>
              <li>Technical SEO + JSON-LD</li>
              <li>Fast CWV, scalable structure</li>
            </ul>
            <Chips items={["Next.js", "Tailwind", "Vercel", "GA4"]} />
          </article>

          {/* Technical SEO — DEMO (același tab) */}
          <article className="card-luxe">
            <div className="relative rounded-xl overflow-hidden mb-4">
              <a href="/live/seo" aria-label="Open Technical SEO Demo" title="Open demo">
                <Image
                  src="/seo.jpg"
                  alt="Technical SEO project with search optimisation visuals"
                  width={800}
                  height={400}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-[rgba(255,255,255,.08)] border border-[var(--card-border)] backdrop-blur">
                  Demo
                </span>
              </a>
            </div>

            <h3 className="text-lg font-semibold">
              <a
                href="/live/seo"
                className="hover:underline decoration-[var(--accent)] underline-offset-4"
              >
                Technical SEO — Site cleanup
              </a>
            </h3>

            <p className="text-[var(--accent)] mt-1">
              Better visibility & indexing
              <a href="/live/seo" className="ml-2 hover:underline">
                See live
              </a>
            </p>

            <ul className="list-disc ml-5 mt-3 text-zinc-300 space-y-1">
              <li>Metadata & JSON-LD</li>
              <li>Sitemaps & robots tuning</li>
              <li>Image & asset optimization</li>
            </ul>
            <Chips items={["JSON-LD", "Sitemaps", "Robots", "CWV"]} />
          </article>

          {/* Automation — DEMO (același tab) */}
          <article className="card-luxe">
            <div className="relative rounded-xl overflow-hidden mb-4">
              <a href="/live/automation" aria-label="Open Automation Demo" title="Open demo">
                <Image
                  src="/automation.jpg"
                  alt="Automation and integrations with AI and data workflows"
                  width={800}
                  height={400}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <span className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-[rgba(255,255,255,.08)] border border-[var(--card-border)] backdrop-blur">
                  Demo
                </span>
              </a>
            </div>

            <h3 className="text-lg font-semibold">
              <a
                href="/live/automation"
                className="hover:underline decoration-[var(--accent)] underline-offset-4"
              >
                Automation & Integrations
              </a>
            </h3>

            <p className="text-[var(--accent)] mt-1">
              Save time with smart workflows
              <a href="/live/automation" className="ml-2 hover:underline">
                See live
              </a>
            </p>

            <ul className="list-disc ml-5 mt-3 text-zinc-300 space-y-1">
              <li>Secure forms + spam guard</li>
              <li>Google Sheets dashboards</li>
              <li>HTML autoresponder & Slack/Trello</li>
            </ul>
            <Chips items={["Apps Script", "Sheets", "Zoho SMTP", "Slack/Trello"]} />
          </article>

          {/* Case Study — EgoDentLab (nou) */}
          <article className="card-luxe">
            <div className="relative rounded-xl overflow-hidden mb-4">
              <a href="/projects/egodentlab" aria-label="Open EgoDentLab case study" title="Open case study">
                <Image
                  src="/previews/egodentlab.png"
                  alt="EgoDentLab dental lab website design preview"
                  width={1200}
                  height={800}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </a>
            </div>

            <h3 className="text-lg font-semibold">
              <a
                href="/projects/egodentlab"
                className="hover:underline decoration-[var(--accent)] underline-offset-4"
              >
                Case Study — EgoDentLab (Dental Lab Website)
              </a>
            </h3>

            <p className="text-zinc-300 mt-1">
              Next.js build with fast CWV, clear CTAs and technical SEO foundations.
            </p>

            <div className="mt-3">
              <a href="/projects/egodentlab" className="btn-ghost">Read case study</a>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
