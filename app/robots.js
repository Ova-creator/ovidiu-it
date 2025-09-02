// app/robots.js
import { abs, siteUrl } from "../lib/site";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: abs("/sitemap.xml"),
    host: siteUrl.replace(/^https?:\/\//, ""),
  };
}
