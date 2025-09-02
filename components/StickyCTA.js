"use client";
import QuoteLink from "./QuoteLink";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <QuoteLink className="btn-primary shadow-lg" placement="sticky">Get a Quote</QuoteLink>

      <a
        href="https://wa.me/447892720676?text=Hi%20Ovidiu%2C%20I%20have%20a%20project%20in%20mind."
        target="_blank" rel="noopener noreferrer"
        className="btn-ghost shadow-lg"
        onClick={() => {
          try { if (window.gtag) window.gtag("event","cta_whatsapp_click",{placement:"sticky"}); } catch {}
        }}
      >
        WhatsApp
      </a>
    </div>
  );
}
