"use client";
import { useState, useMemo } from "react";

/* GA helper (nu aruncă erori dacă gtag nu există) */
function gaEvent(name, params = {}) {
  try {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", name, params);
    }
  } catch {}
}

export default function ContactForm() {
  const [state, setState] = useState({ loading: false, ok: false, error: "" });
  const [justSent, setJustSent] = useState(false);
  const [toast, setToast] = useState({ show: false, text: "" });

  // WhatsApp link cu text + UTM incluse în mesaj (WhatsApp nu preia UTM din URL)
  const waHref = useMemo(() => {
    const txt =
      "Hi Ovidiu, I just sent a quote request from ovidiu.it.com " +
      "(utm_source=site&utm_medium=cta&utm_campaign=quote).";
    return `https://wa.me/447892720676?text=${encodeURIComponent(txt)}`;
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setState({ loading: true, ok: false, error: "" });

    const fd = new FormData(form);
    fd.set("hp_field", ""); // honeypot guard
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.ok) {
        setState({ loading: false, ok: true, error: "" });
        setJustSent(true);
        gaEvent("form_submit_success", {
          placement: "contact",
          service: payload.service || "(none)",
          budget: payload.budget || "(none)",
        });

        form.reset();

        // „Sent ✓” rămâne ~1.4s pe buton
        setTimeout(() => setJustSent(false), 1400);

        // Toast 3s
        setToast({ show: true, text: "Request received — check your inbox ✅" });
        setTimeout(() => setToast({ show: false, text: "" }), 3000);
      } else {
        throw new Error(json?.error || "Submit failed");
      }
    } catch (err) {
      const msg = err?.message || "Error";
      setState({ loading: false, ok: false, error: msg });
      setToast({ show: true, text: "Something went wrong. Please try again." });
      setTimeout(() => setToast({ show: false, text: "" }), 3000);
      gaEvent("form_submit_error", { placement: "contact" });
    }
  }

  return (
    <div className="relative">
      {/* Toast */}
      {toast.show && (
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-none fixed right-4 bottom-24 z-[60] max-w-sm rounded-xl border border-white/10 bg-zinc-900/95 px-4 py-3 text-sm text-white shadow-xl backdrop-blur"
        >
          {toast.text}
        </div>
      )}

      <form
        id="quote"
        onSubmit={onSubmit}
        action="/api/contact"
        method="POST"
        className="card p-6 md:p-8 space-y-4"
      >
        <h2 className="text-xl font-bold">Request a price quote</h2>

        {/* SUCCES inline + CTA-uri */}
        {state.ok && (
          <div>
            <div
              role="status"
              aria-live="polite"
              className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-200"
            >
              Thanks — your request was sent. I’ll get back to you shortly.
            </div>

            <div className="flex gap-2 pt-2">
              <a href="/projects" className="btn-ghost">
                View Projects
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                onClick={() =>
                  gaEvent("cta_whatsapp_click", { placement: "contact" })
                }
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* EROARE */}
        {state.error && (
          <div
            role="alert"
            className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-rose-200"
          >
            {state.error}. Please try again.
          </div>
        )}

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              name="name"
              className="input w-full"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              className="input w-full"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div>
            <label className="block text-sm mb-1">Service</label>
            <select
              name="service"
              className="input w-full"
              defaultValue="Website"
            >
              <option value="Website">Website</option>
              <option value="SEO">SEO</option>
              <option value="Automation">Automation</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Complexity</label>
            <select
              name="complexity"
              className="input w-full"
              defaultValue="Standard"
            >
              <option value="Standard">Standard</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Budget</label>
          <select
            name="budget"
            className="input w-full"
            defaultValue="Prefer not to say"
          >
            <option value="Prefer not to say">Prefer not to say</option>
            <option value="€3k–€5k">€3k–€5k</option>
            <option value="€5k–€10k">€5k–€10k</option>
            <option value="€10k+">€10k+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="input w-full"
            placeholder="Tell me about your project…"
          />
        </div>

        {/* honeypot */}
        <input
          name="hp_field"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={state.loading}
            className={[
              "btn-primary transition-all min-w-[150px] justify-center",
              justSent
                ? "bg-emerald-500 text-emerald-950 shadow-emerald-500/40 ring-2 ring-emerald-400/60"
                : "",
            ].join(" ")}
          >
            <span className="inline-flex items-center gap-2">
              {state.loading && (
                <span className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
              )}
              {!state.loading && justSent && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
              <span>
                {state.loading ? "Sending…" : justSent ? "Sent ✓" : "Send request"}
              </span>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
