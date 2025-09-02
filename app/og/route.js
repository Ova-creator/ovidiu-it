// app/og/route.js
import { ImageResponse } from "next/og";

export const runtime = "edge";

// (opțional) font simplu system; fără fetch extern → stabil & rapid
const brand = {
  title: "Ovidiu.IT — Next.js, SEO & Automation",
  subtitle: "Next.js websites, Technical SEO & automations.",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://ovdiu.it.com"}/icon.png`,
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || brand.title;
  const subtitle = searchParams.get("subtitle") || brand.subtitle;

  return new ImageResponse(
    (
      <div
        style={{
          height: "630px",
          width: "1200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0d0b12 0%, #151226 50%, #0d0b12 100%)",
          color: "white",
          padding: "56px",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Logo */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              backgroundColor: "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* fallback dacă nu se încarcă imaginea */}
            <img
              src={brand.logo}
              width={48}
              height={48}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ fontSize: 28, opacity: 0.9 }}>Ovidiu.IT</div>
        </div>

        {/* Middle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 30, opacity: 0.9 }}>{subtitle}</div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: 0.85,
            fontSize: 28,
          }}
        >
          <div
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(168,85,247,.15)",
              border: "1px solid rgba(168,85,247,.35)",
            }}
          >
            View Projects → ovidiu.it.com/projects
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
