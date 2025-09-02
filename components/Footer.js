import Link from "next/link";
import { getSafeLinkedInUrl } from "../lib/safeLinkedInUrl";

const linkedInUrl = getSafeLinkedInUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">Ovidiu.IT</span>
            <span className="text-xs text-pink-400">SEO • Automation • Next.js</span>
          </div>

          <nav className="flex flex-wrap items-center gap-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>

            {/* LinkedIn — extern, new-tab */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="mt-6 text-xs text-white/60">
          © {new Date().getFullYear()} Ovidiu.IT — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
