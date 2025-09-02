"use client";
import { gaEvent } from "../lib/ga";

export default function TrackedLink({
  href,
  className = "",
  children,
  event = "",
  params = {},
  target,
  rel,
}) {
  const onClick = () => {
    if (event) gaEvent(event, params);
  };
  return (
    <a href={href} className={className} onClick={onClick} target={target} rel={rel}>
      {children}
    </a>
  );
}
