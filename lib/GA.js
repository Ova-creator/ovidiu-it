// Mic helper – poți apela gaEvent('cta_quote_click', {placement:'sticky'})
export function gaEvent(action, params = {}) {
  try {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, params);
    }
  } catch (_) {}
}
