"use client";

import { useEffect } from "react";
import Link from "next/link";
import Portal from "./Portal";
import { getSafeLinkedInUrl } from "../lib/safeLinkedInUrl";

const linkedInUrl = getSafeLinkedInUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL);

export default function MobileMenu({ open, onClose }) {
  // Blochează scroll & close on ESC
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Portal>
      {/* strat top absolut peste TOT; izolăm blend-urile */}
      <div
        className="fixed inset-0 z-[2147483647] isolate" // maxim sigur
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onClick={onClose}
        style={{ mixBlendMode: "normal" }}
      >
        {/* overlay complet opac */}
        <div className="absolute inset-0 bg-black" />

        {/* panoul; click-ul înăuntru nu închide */}
        <div
          className="absolute right-0 top-0 h-full w-80 border-l border-white/10 bg-neutral-950 p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-semibold">Menu</span>
            <button
              aria-label="Close menu"
              className="rounded-lg border border-white/10 p-2"
              onClick={onClose}
            >
              {/* X svg */}
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6l-12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="grid gap-3">
            <Link href="/" onClick={onClose} className="block py-2">Home</Link>
            <Link href="/services" onClick={onClose} className="block py-2">Services</Link>
            <Link href="/projects" onClick={onClose} className="block py-2">Projects</Link>
            <Link href="/about" onClick={onClose} className="block py-2">About</Link>
            <Link href="/contact" onClick={onClose} className="block py-2">Contact</Link>
            <Link href="/blog" onClick={onClose} className="block py-2">Blog</Link>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2"
              onClick={onClose}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Portal>
  );
}
