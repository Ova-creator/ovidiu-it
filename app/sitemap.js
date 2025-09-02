// app/sitemap.js
import { siteUrl } from "../lib/site";

export default function sitemap() {
  const url = siteUrl;
  const now = new Date();
  return [
    { url: `${url}/`, lastModified: now },
    { url: `${url}/services`, lastModified: now },
    { url: `${url}/services/web-design-uk`, lastModified: now },
    { url: `${url}/services/seo-uk`, lastModified: now },
    { url: `${url}/services/automation-uk`, lastModified: now },
    { url: `${url}/projects`, lastModified: now },
    { url: `${url}/projects/egodentlab`, lastModified: now }, // ← nou
    { url: `${url}/about`, lastModified: now },
    { url: `${url}/contact`, lastModified: now },
    { url: `${url}/blog`, lastModified: now },
    { url: `${url}/blog/website-cost-uk`, lastModified: now },
    { url: `${url}/blog/seo-best-practices-uk-2025`, lastModified: now },
  ];
}
