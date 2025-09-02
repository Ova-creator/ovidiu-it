// app/layout.js
import Script from "next/script";
import SiteHeader from "../components/SiteHeader";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { siteUrl } from "../lib/site";
import "../app/globals.css";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: "Ovidiu.IT — Next.js, SEO & Automation",
    template: "%s | Ovidiu.IT",
  },
  description:
    "Next.js websites, Technical SEO & automations that actually save time. UK-focused and conversion-first.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ovidiu.IT",
    title: "Ovidiu.IT — Next.js, SEO & Automation",
    description:
      "Fast, clean, SEO-ready Next.js sites with Technical SEO and automations. UK-focused, conversion-first.",
    images: [`${siteUrl}/og`], // imagine globală dinamică
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovidiu.IT — Next.js, SEO & Automation",
    description:
      "Fast, clean, SEO-ready Next.js sites with Technical SEO and automations. UK-focused, conversion-first.",
    images: [`${siteUrl}/og`],
  },
  icons: {
    icon: "/favicon-16x16.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ovidiu.IT",
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
  };

  return (
    <html lang="en">
      <body>
        <Script
          id="jsonld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ScrollProgressBar />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
