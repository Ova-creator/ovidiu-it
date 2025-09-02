"use client";

const Icon = ({ path }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
);

const linkedinPath =
  "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm12.5 10.29h-3v-4.8c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.23-1.82 2.52v4.88h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2.01 3.61 4.62v4.71z";
const whatsappPath =
  "M20.52 3.48c-4.66-4.64-12.21-4.64-16.87 0-4.27 4.27-4.64 10.88-1.11 15.57l-1.54 5.67 5.82-1.52c4.53 3.07 10.7 2.56 14.71-1.45 4.66-4.66 4.66-12.21-.01-16.27zm-8.27 18.02c-2.04 0-4.04-.55-5.79-1.61l-.41-.24-3.45.9.92-3.38-.25-.43c-2.88-4.82-1.41-11.03 3.37-14.2 4.84-3.22 11.37-2.06 14.86 2.65 3.52 4.74 2.58 11.4-2.15 15.05-2 1.56-4.44 2.26-7.1 2.26zm6.09-6.71c-.33-.17-1.96-.97-2.26-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.05 1.3-.19.22-.39.25-.72.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.14-.68.14-.14.33-.36.5-.55.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.09-.17-.74-1.79-1.01-2.46-.27-.65-.54-.56-.74-.56-.19 0-.41-.03-.63-.03-.22 0-.58.08-.88.41-.3.33-1.16 1.14-1.16 2.78s1.19 3.23 1.36 3.45c.17.22 2.34 3.57 5.66 4.87.79.33 1.41.52 1.89.66.79.25 1.5.22 2.07.14.63-.09 1.96-.8 2.24-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39z";

export default function SocialBar({ size = "md", linkedInUrl = "#", whatsAppUrl = "#" }) {
  const cls = size === "lg" ? "h-11 px-4" : "h-9 px-3";
  return (
    <div className="flex items-center gap-2">
      <a href={linkedInUrl} target="_blank" rel="noreferrer" className={`rounded-2xl bg-white/10 hover:bg-white/20 ${cls} inline-flex items-center gap-2`}>
        <Icon path={linkedinPath} /><span className="hidden sm:block">LinkedIn</span>
      </a>
      <a href={whatsAppUrl} target="_blank" rel="noreferrer" className={`rounded-2xl bg-emerald-500/20 hover:bg-emerald-500/30 ${cls} inline-flex items-center gap-2`}>
        <Icon path={whatsappPath} /><span className="hidden sm:block">WhatsApp</span>
      </a>
    </div>
  );
}
