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
  title: "Ovidiu.IT — Next.js + SEO & Automation",
  description: "Affordable web design & SEO in the UK. Next.js expert building fast, secure, SEO-first sites for small businesses and freelancers.",
  metadataBase: new URL("https://ovidiu.it.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ovidiu.it.com",
    siteName: "Ovidiu.IT",
    title: "Ovidiu.IT — Next.js + SEO & Automation",
    description: "Affordable web design & SEO in the UK. Next.js expert building fast, secure, SEO-first sites for small businesses and freelancers.",
    images: [
      {
        url: "https://ovidiu.it.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Ovidiu.IT — Web Design & SEO UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OvidiuIT",
    title: "Ovidiu.IT — Next.js + SEO & Automation",
    description: "Affordable web design & SEO in the UK. Next.js expert building fast, secure, SEO-first sites for small businesses and freelancers.",
    images: ["https://ovidiu.it.com/og-default.png"],
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
