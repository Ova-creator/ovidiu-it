"use client";

/** Mic helper pentru click tracking pe link-uri externe / demo.
 * Trimite in GA4: event "view_project_live" cu { project, placement }.
 * Funcționează cu gtag() sau dataLayer; dacă nu există GA, continuă fără eroare.
 */
export default function TrackOutLink({ href, project, placement="projects_card", children, ...rest }) {
  const onClick = () => {
    try {
      const payload = { event: "view_project_live", project, placement };
      if (typeof window !== "undefined") {
        if (typeof window.gtag === "function") {
          window.gtag("event", "view_project_live", { project, placement });
        } else if (Array.isArray(window.dataLayer)) {
          window.dataLayer.push(payload);
        }
      }
    } catch (_) {}
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
