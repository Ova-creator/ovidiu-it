"use client";

import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const signature = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function LogoSignature() {
  return (
   <Link href="/" className="leading-none select-none">
  <div className="flex items-end gap-1">
    <span
      className={`${signature.className} text-white`}
      style={{ fontSize: "40px", lineHeight: "1" }}
    >
      Ovidiu
    </span>
    <span className="font-semibold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent"
          style={{ fontSize: "42px", lineHeight: "1" }}>
      .IT
    </span>
  </div>
  <span className="block text-[11px] md:text-sm text-fuchsia-300 mt-0.5 tracking-wide">
    In AI we trust
  </span>
</Link>
  );
}
