// app/services/automation-uk/page.js
import Script from "next/script";

export const metadata = {
  title: "Website Automation UK | Google Apps Script & Sheets — Ovidiu.IT",
  description:
    "Replace manual work with automations: secure forms, Sheets dashboards, HTML autoresponders and integrations (Slack/Trello/Email). Built with Google Apps Script.",
  alternates: { canonical: "/services/automation-uk" },
  robots: { index: true, follow: true },
  keywords: [
    "website automation UK",
    "google apps script developer UK",
    "sheets automation UK",
    "email automation UK",
    "workflow automation UK",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/services/automation-uk",
    siteName: "Ovidiu.IT",
    title: "Website Automation UK | Google Apps Script & Sheets — Ovidiu.IT",
    description:
      "Secure forms → Sheets → Email + dashboards and integrations. Built on Google Apps Script.",
    images: [{ url: "/og/og-image-1200x630.png", width: 1200, height: 630, alt: "Automation UK — Ovidiu.IT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Automation UK | Google Apps Script & Sheets — Ovidiu.IT",
    description: "Automate forms, data & emails using Google Apps Script.",
    images: ["/og/og-image-1200x630.png"],
  },
};

export default function AutomationUKPage() {
  const faq = [
    {
      q: "How much does automation cost?",
      a: "Projects start from £1,000. Most business workflows range £1,800–£4,000. Complex multi-app integrations can reach £6,000+.",
    },
    {
      q: "What can you automate?",
      a: "Form submissions → Google Sheets → HTML autoresponder, Slack/Trello notifications, validation, deduplication, analytics dashboards.",
    },
    {
      q: "Is it secure?",
      a: "Yes — spam protection (honeypot/rate limit), validation and role-based access. You keep ownership in your Google Workspace.",
    },
  ];

  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ovidiu.it.com/services/automation-uk#service",
        name: "Website Automation UK",
        serviceType: "Automation",
        provider: { "@type": "Organization", name: "Ovidiu.IT", url: "https://ovidiu.it.com/" },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        description:
          "Google Apps Script + Sheets automations for UK businesses: secure forms, email workflows, and dashboards.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "GBP",
          lowPrice: "1000",
          highPrice: "6000",
          url: "https://ovidiu.it.com/services/automation-uk",
          offerCount: 3,
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://ovidiu.it.com/services/automation-uk#faq",
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
      <Script id="ld-json-automation-uk" type="application/ld+json">
        {JSON.stringify(ldJson)}
      </Script>

      <section className="hero-card card-luxe mb-10">
        <p className="text-sm text-zinc-300 mb-2">Automation — UK</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Website Automation for UK Businesses
        </h1>
        <p className="mt-3 text-zinc-300">
          Secure forms → Sheets → Email, with dashboards and Slack/Trello integrations.
          Replace manual copy/paste with reliable workflows.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/contact" className="btn-primary">Discuss Your Workflow</a>
          <a href="/services" className="btn-ghost">All Services</a>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Forms to Sheets</h3>
          <p className="text-zinc-300">
            Validate inputs, prevent spam, route data into structured Sheets for reporting and dashboards.
          </p>
          <p className="mt-3 text-zinc-300"><strong>From £1,000</strong></p>
        </article>

        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Email & Alerts</h3>
          <p className="text-zinc-300">
            HTML autoresponders, team notifications, and escalation rules to keep operations on track.
          </p>
          <p className="mt-3 text-zinc-300"><strong>£1,800–£4,000</strong></p>
        </article>

        <article className="card-luxe">
          <h3 className="text-xl font-semibold mb-2">Integrations</h3>
          <p className="text-zinc-300">
            Connect Slack, Trello, Calendar or third-party APIs to automate end-to-end workflows.
          </p>
          <p className="mt-3 text-zinc-300"><strong>Up to £6,000+</strong></p>
        </article>
      </section>

      <section className="mt-10 card-luxe">
        <h3 className="text-xl font-semibold mb-2">FAQ — Automation UK</h3>
        <ul className="text-zinc-300 list-disc pl-5 space-y-2">
          {faq.map(({ q, a }, i) => (
            <li key={i}><strong>{q} </strong> {a}</li>
          ))}
        </ul>
        <div className="mt-6">
          <a href="/contact" className="btn-primary">Start Your Automation</a>
        </div>
      </section>
    </main>
  );
}
