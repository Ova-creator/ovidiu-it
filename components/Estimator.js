"use client";
import { useMemo, useState } from "react";
import { gaEvent } from "../lib/ga";

const BASE = {
  website: 3000,
  seo: 1500,
  auto: 2000,
  allin: 6000,
};

export default function Estimator() {
  const [sel, setSel] = useState({
    website: false,
    seo: false,
    auto: false,
    tier: "standard",
  });

  const price = useMemo(() => {
    let sum = 0;
    if (sel.website) sum += BASE.website;
    if (sel.seo) sum += BASE.seo;
    if (sel.auto) sum += BASE.auto;
    if (!sel.website && !sel.seo && !sel.auto) sum = 0;
    if (sel.website && sel.seo && sel.auto) sum = Math.max(sum, BASE.allin);
    const mult = sel.tier === "premium" ? 2 : sel.tier === "advanced" ? 1.5 : 1;
    return Math.ceil((sum * mult) / 50) * 50;
  }, [sel]);

  const toggle = (k) => setSel((s) => ({ ...s, [k]: !s[k] }));

  return (
    <div className="card">
      <h3 className="text-2xl font-bold">Project Estimator</h3>
      <p className="text-white/80 mt-1">Transparent, no lowballing.</p>

      <div className="mt-5 grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-fuchsia-500"
              checked={sel.website}
              onChange={() => toggle("website")}
            />
            Next.js Website
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-fuchsia-500"
              checked={sel.seo}
              onChange={() => toggle("seo")}
            />
            Technical SEO
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-fuchsia-500"
              checked={sel.auto}
              onChange={() => toggle("auto")}
            />
            Automation & Integrations
          </label>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-white/70">Complexity</label>
          <select
            className="input w-full"
            value={sel.tier}
            onChange={(e) => setSel((s) => ({ ...s, tier: e.target.value }))}
          >
            <option value="standard">Standard</option>
            <option value="advanced">Advanced</option>
            <option value="premium">Premium</option>
          </select>

          <div className="mt-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-sm text-white/70">Estimate</div>
            <div className="text-3xl font-extrabold mt-1">
              {price > 0
                ? `From €${price.toLocaleString("en-GB")}`
                : "Select services"}
            </div>
            <div className="text-xs text-white/60 mt-1">
              Exact quote after a short discovery call.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="/contact"
          className="btn-primary"
          onClick={() =>
            gaEvent("cta_quote_click", {
              placement: "estimator",
              tier: sel.tier,
              website: sel.website,
              seo: sel.seo,
              auto: sel.auto,
              estimate: price,
            })
          }
        >
          Request a Quote
        </a>
        <a
          href="https://wa.me/447892720676"
          target="_blank"
          className="btn-ghost"
          onClick={() =>
            gaEvent("cta_whatsapp_click", { placement: "estimator" })
          }
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
