// lib/ratelimit.js
const sent = new Map(); // key: email, value: timestamp (ms)

export function canSendAutoReply(email, windowHours = 24) {
  if (!email) return false;
  const now = Date.now();
  const last = sent.get(email) || 0;
  if (now - last < windowHours * 3600 * 1000) return false;
  sent.set(email, now);
  return true;
}
