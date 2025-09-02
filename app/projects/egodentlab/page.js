// app/projects/egodentlab/page.js
import Script from "next/script";
import Image from "next/image";
import { abs } from "../../../lib/site";

export const metadata = {
  title: "Case Study — EgoDentLab (Dental Lab Website) | Ovidiu.IT",
  description:
    "Next.js website for a dental lab: fast CWV, clean UX, strong CTAs. Built with Tailwind, deployed on Vercel, with technical SEO foundations.",
  alternates: { canonical: "/projects/egodentlab" },
  openGraph: {
    type: "article",
    url: "/projects/egodentlab",
    title: "Case Study — EgoDentLab (Dental Lab Website) | Ovidiu.IT",
    description:
      "Next.js site with fast performance, clear IA and technical SEO.",
    images: [{ url: "/previews/egodentlab.png", width: 1200, height: 630, alt: "EgoDentLab dental lab website preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Study — EgoDentLab (Dental Lab Website) | Ovidiu.IT",
    description: "Next.js + Tailwind + Vercel + technical SEO.",
    images: ["/previews/egodentlab.png"],
  },
};

export default function EgoDentLabCaseStudy() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "EgoDentLab — Dental Lab Website",
    url: abs("/projects/egodentlab"),
    image: abs("/previews/egodentlab.png"),
    about: ["Next.js", "Core Web Vitals", "Dental lab website", "Technical SEO"],
    inLanguage: "en-GB",
    creator: { "@type": "Organization", name: "Ovidiu.IT", url: abs("/") },
    workExample: abs("https://egodentlab.vercel.app/"),
  };

  return (
    <main className="container mx-auto px-4 py-10">
      <Script id="ld-egodentlab" type="application/ld+json">
        {JSON.stringify(ld)}
      </Script>

      <section className="hero-card card-luxe mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Case Study — EgoDentLab</h1>
        <p className="mt-2 text-zinc-300">
          Next.js website for a dental lab: fast CWV, clean UX, strong CTAs.
        </p>
      </section>

      <article className="card-luxe">
        <div className="relative rounded-xl overflow-hidden h-64 border border-[var(--card-border)] mb-4">
          <Image
            src="/previews/egodentlab.png"
            alt="EgoDentLab dental lab website design preview"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <h3 className="text-xl font-semibold mb-2">Outcome</h3>
        <ul className="list-disc ml-5 text-zinc-300 space-y-1">
          <li>Core Web Vitals in the green (LCP under 2.0s on 4G).</li>
          <li>Clear IA with service pages and strong call-to-actions.</li>
          <li>Technical SEO: metadata, OG, JSON-LD (Service/FAQ), sitemap & robots.</li>
          <li>Deployed on Vercel; client owns hosting and repo.</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <a
            href="https://egodentlab.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Open live ↗
          </a>
          <a href="/contact" className="btn-primary">Start your project</a>
        </div>
      </article>
    </main>
  );
}
