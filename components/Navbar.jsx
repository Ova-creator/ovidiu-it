'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail } from 'lucide-react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Ovidiu | <span className="text-brand">SEO & Automation</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${active ? 'text-brand' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="mailto:digital@ovidiu.it.com"
          className="ml-4 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
        >
          <Mail className="h-4 w-4" />
          Contact
        </a>
      </div>
    </header>
  );
}
