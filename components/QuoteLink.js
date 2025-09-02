"use client";
import { useRouter, usePathname } from "next/navigation";

function gaEvent(n, p = {}) {
  try { if (typeof window !== "undefined" && window.gtag) window.gtag("event", n, p); } catch {}
}

export default function QuoteLink({ children, className = "", placement = "default" }) {
  const router = useRouter();
  const pathname = usePathname();

  function onClick(e) {
    e.preventDefault();
    gaEvent("cta_quote_click", { placement });
    if (pathname === "/contact") {
      const el = document.getElementById("quote");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/contact#quote");
    }
  }

  return (
    <a href="/contact#quote" onClick={onClick} className={className}>
      {children}
    </a>
  );
}
