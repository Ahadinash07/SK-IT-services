"use client";
import { navigate } from "@/lib/nav";

// Anchor that keeps a real href (right-click, SEO, accessibility) but performs every
// redirect with window functions (window.scrollTo / window.open / window.location).
export default function A({ href, onClick, target, local = false, children, ...rest }) {
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    navigate(href, { newTab: target === "_blank", local });
  };
  return <a href={href} target={target} onClick={handle} {...rest}>{children}</a>;
}
