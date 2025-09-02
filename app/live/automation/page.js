// app/live/automation/page.js
export const metadata = {
  title: "Automation & Integrations — Live Demo | Ovidiu.IT",
  description:
    "See how secure forms, Sheets dashboards and HTML autoresponder workflows cut manual work.",
  alternates: { canonical: "/live/automation" },
};

const webhookExample = `POST /api/webhook
Content-Type: application/json

{
  "event": "form_submitted",
  "payload": {
    "service": "Website",
    "complexity": "Standard",
    "budget": "€5k–€10k",
    "email": "client@example.com"
  }
}`;

const htmlReply = `<!doctype html>
<html>
  <body style="font-family:Inter,Arial,sans-serif;color:#111">
    <h2 style="margin:0 0 8px">We received your request ✅</h2>
    <p>Thanks for reaching out! We'll get back to you shortly.</p>
    <p style="font-size:13px;color:#666">— Ovidiu.IT</p>
  </body>
</html>`;

export default function AutomationLiveDemo() {
  return (
    <main className="container mx-auto px-4 py-10">
      <section className="hero-card card-luxe mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Automation &amp; Integrations — Live Demo
        </h1>
        <p className="mt-2 text-zinc-300">
          A simple flow that saves hours: secure form → spam guard → autoresponder →
          Sheets dashboard → Slack/Trello.
        </p>
      </section>

      {/* BEFORE / AFTER */}
      <section className="grid lg:grid-cols-2 gap-6 mb-8">
        <article className="card-luxe">
          <h2 className="text-xl font-semibold mb-2">Before automation</h2>
          <ul className="list-disc ml-5 space-y-1 text-zinc-300">
            <li>Manual lead triage in inbox, no prioritization</li>
            <li>Copy–paste into Excel/Sheets, missed data</li>
            <li>No autoresponder — cold lead until you reply</li>
            <li>Spam & burst submissions unfiltered</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 rounded-full bg-[rgba(255,255,255,.06)] border border-[var(--card-border)]">
              1–2h/day wasted
            </span>
            <span className="px-2 py-1 rounded-full bg-[rgba(255,255,255,.06)] border border-[var(--card-border)]">
              transcription errors
            </span>
          </div>
        </article>

        <article className="card-luxe">
          <h2 className="text-xl font-semibold mb-2">After automation</h2>
          <ul className="list-disc ml-5 space-y-1 text-zinc-300">
            <li>Secure form (honeypot + rate limit)</li>
            <li>HTML autoresponder — instant reply</li>
            <li>Row in Sheets + KPI dashboard</li>
            <li>Slack/Trello alert with key details</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 rounded-full bg-[rgba(255,255,255,.06)] border border-[var(--card-border)]">
              &lt;1 min/lead
            </span>
            <span className="px-2 py-1 rounded-full bg-[rgba(255,255,255,.06)] border border-[var(--card-border)]">
              zero copy–paste
            </span>
          </div>
        </article>
      </section>

      {/* 3-column demo */}
      <section className="grid lg:grid-cols-3 gap-6">
        <article className="card-luxe">
          <h2 className="text-xl font-semibold mb-2">Secure form flow</h2>
          <ol className="list-decimal ml-5 space-y-1 text-zinc-300">
            <li>Honeypot + rate limit</li>
            <li>Zoho SMTP & HTML autoresponder</li>
            <li>GA4 events (server & client)</li>
            <li>Webhook to Sheets/Slack</li>
          </ol>
        </article>

        <article className="card-luxe">
          <h2 className="text-xl font-semibold mb-2">Webhook endpoint (mock)</h2>
          <p className="text-zinc-300 mb-2">
            Minimal payload for Apps Script/Trello/Slack integrations.
          </p>
          <pre className="p-4 overflow-x-auto text-sm text-zinc-200 bg-[rgba(255,255,255,.03)] border border-[var(--card-border)] rounded-xl">
            <code>{webhookExample}</code>
          </pre>
        </article>

        <article className="card-luxe">
          <h2 className="text-xl font-semibold mb-2">HTML autoresponder (sample)</h2>
          <p className="text-zinc-300 mb-2">Clean, deliverable template with proper salutation.</p>
          <pre className="p-4 overflow-x-auto text-sm text-zinc-200 bg-[rgba(255,255,255,.03)] border border-[var(--card-border)] rounded-xl">
            <code>{htmlReply}</code>
          </pre>
          <div className="mt-4 flex gap-2">
            <a className="btn-primary" href="/contact">Automate my workflow</a>
            <a className="btn-ghost" href="/projects">Back to Projects</a>
          </div>
        </article>
      </section>
    </main>
  );
}
