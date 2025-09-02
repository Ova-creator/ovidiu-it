// lib/mail.js
import nodemailer from "nodemailer";

const {
  SMTP_HOST = "smtp.zoho.eu",
  SMTP_PORT = "465",
  SMTP_SECURE = "true",
  SMTP_USER,
  SMTP_PASS,
} = process.env;

export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,                          // ex: smtp.zoho.eu
  port: Number(SMTP_PORT),                  // 465
  secure: SMTP_SECURE === "true",           // true
  auth: { user: SMTP_USER, pass: SMTP_PASS }
});

// Trimite confirmarea către client (autoresponder)
export async function sendAutoReply({ to, html, text }) {
  return transporter.sendMail({
    from: `Ovidiu.IT <digital@ovidiu.it.com>`,
    to,
    replyTo: "digital@ovidiu.it.com",
    subject: "We received your request — Ovidiu.IT",
    html,
    text,
    headers: {
      "Auto-Submitted": "auto-replied",
      "X-Auto-Response-Suppress": "All",
      "Precedence": "auto_reply",
    },
  });
}

// Trimite notificare internă către tine
export async function sendOwnerNotice({ to, subject, html, text }) {
  return transporter.sendMail({
    from: `Ovidiu.IT <digital@ovidiu.it.com>`,
    to,                                      // de ex: digital@ovidiu.it.com
    subject,
    html,
    text,
  });
}
