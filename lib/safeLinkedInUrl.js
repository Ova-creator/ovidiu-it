export function getSafeLinkedInUrl(raw) {
  const fallback = "https://www.linkedin.com/company/ovidiuit/";
  const val = (raw || "").trim();
  const sanitized = /^https?:\/\//i.test(val) ? val : (val ? `https://${val}` : "");
  const looksLinkedIn = /^https?:\/\/(www\.)?linkedin\.com\//i.test(sanitized);
  const path = sanitized.replace(/^https?:\/\/(www\.)?linkedin\.com\//i, "");
  const valid = looksLinkedIn && path.length > 1;
  const finalUrl = valid ? sanitized : fallback;
  if (typeof window !== "undefined" && !valid) {
    console.warn("[LinkedIn] ENV invalid/lipsă. Folosesc fallback:", finalUrl);
  }
  return finalUrl;
}
