// lib/email-templates.js
function esc(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderAutoReplyHTML({ name, service, complexity, budget, message } = {}) {
  const nameLine = name ? `, ${esc(name)}` : "";
  const rows = [
    service ? `<div><strong>Service:</strong> ${esc(service)}</div>` : "",
    complexity ? `<div><strong>Complexity:</strong> ${esc(complexity)}</div>` : "",
    budget ? `<div><strong>Budget:</strong> ${esc(budget)}</div>` : "",
    message ? `<div style="margin-top:6px;"><strong>Message:</strong><br>${esc(message)}</div>` : "",
  ].join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="x-apple-disable-message-reformatting">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>We received your request — Ovidiu.IT</title>
</head>
<body style="margin:0;background:#0b0b10;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#0b0b10;">
<tr><td align="center" style="padding:24px;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;background:#11131a;border:1px solid #232535;border-radius:16px;color:#e8e8ef;font-family:Inter,Segoe UI,Arial,Helvetica,sans-serif;">
<tr><td style="height:6px;background:#C084FC;border-radius:16px 16px 0 0;"></td></tr>
<tr><td style="padding:28px 28px 8px;">
  <div style="font-size:20px;font-weight:800;letter-spacing:.2px;">Ovidiu<span style="color:#C084FC">.IT</span></div>
  <div style="margin-top:4px;font-size:12px;color:#A7AAB7;">Next.js websites · Technical SEO · Automations</div>
</td></tr>
<tr><td style="padding:8px 28px 0;">
  <h1 style="margin:0 0 6px;font-size:22px;line-height:1.35;color:#ffffff;">Thanks — we’ve received your request ✅</h1>
  <p style="margin:0 0 10px;font-size:14px;line-height:1.65;color:#D5D7E3;">Hi${nameLine}, thanks for reaching out. I’ll review your message and reply shortly with next steps.</p>
</td></tr>
${rows ? `
<tr><td style="padding:6px 28px 0;">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:separate;border-spacing:0;background:#121420;border:1px solid #232535;border-radius:12px;">
<tr><td style="padding:12px 14px;font-size:13px;color:#C084FC;font-weight:700;">Your request</td></tr>
<tr><td style="padding:0 14px 12px 14px;"><div style="font-size:13px;color:#D5D7E3;line-height:1.6;">${rows}</div></td></tr>
</table>
</td></tr>` : ``}
<tr><td style="padding:16px 28px 0;">
  <p style="margin:0;font-size:13px;line-height:1.65;color:#B9BCCB;">Meanwhile, here’s a quick look at what I deliver:</p>
  <ul style="margin:8px 0 0 18px;padding:0;color:#D5D7E3;font-size:13px;line-height:1.6;">
    <li>Fast, clean Next.js builds with clear CTAs</li>
    <li>Technical SEO: JSON-LD, metadata, sitemaps & robots</li>
    <li>Lightweight automations (secure forms, Sheets, HTML replies)</li>
  </ul>
</td></tr>
<tr><td style="padding:18px 28px 8px;">
  <a href="https://ovidiu.it.com/projects" style="display:inline-block;background:#C084FC;color:#191129;text-decoration:none;font-weight:800;font-size:13px;padding:12px 16px;border-radius:999px;">See live & demos →</a>
  <span style="margin-left:8px;font-size:12px;color:#A7AAB7;">In AI we trust</span>
</td></tr>
<tr><td style="padding:8px 28px 24px;">
  <div style="height:1px;background:#232535;"></div>
  <div style="margin-top:10px;font-size:12px;color:#A7AAB7;">
    From: <a href="mailto:digital@ovidiu.it.com" style="color:#EDEDF5;text-decoration:none;">digital@ovidiu.it.com</a> —
    <a href="https://ovidiu.it.com" style="color:#EDEDF5;text-decoration:none;">ovidiu.it.com</a> —
    <a href="tel:+447892720676" style="color:#EDEDF5;text-decoration:none;">+44 7892 720 676</a><br>
    <span style="font-size:10px;color:#84899A;">This automated confirmation helps us respond faster. If you didn’t make this request, just ignore this email.</span>
  </div>
</td></tr>
</table>
<div style="font-size:11px;color:#6F7382;margin-top:10px;">© Ovidiu.IT</div>
</td></tr></table>
</body></html>`;
}

export function renderAutoReplyText({ name, service, complexity, budget, message } = {}) {
  const parts = [];
  if (service) parts.push(`Service: ${service}`);
  if (complexity) parts.push(`Complexity: ${complexity}`);
  if (budget) parts.push(`Budget: ${budget}`);
  const msg = message ? `\nMessage:\n${message}\n` : "";

  return `Thanks — we’ve received your request ✅

Hi${name ? `, ${name}` : ""}, I’ll review your message and get back shortly with next steps.
${parts.length ? parts.join("\n") + "\n" : ""}${msg}
See live & demos: https://ovidiu.it.com/projects
— Ovidiu.IT · digital@ovidiu.it.com · +44 7892 720 676`;
}
