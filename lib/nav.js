// All redirects/scrolling in the site go through these window-based helpers.
const OFFSET = 84; // sticky header height

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  window.history.replaceState(null, "", `${window.location.pathname}#${id}`);
  return true;
}
export const openExternal = (url) => window.open(url, "_blank", "noopener,noreferrer");
export const goTo = (url) => window.location.assign(url);

export function navigate(href, { newTab = false, local = false } = {}) {
  if (!href || href === "#") return;
  if (href.startsWith("#")) {
    // on another page (e.g. /privacy-policy) section links go to the home page first
    if (!local && window.location.pathname !== "/") return goTo(`/${href}`);
    return scrollToId(href.slice(1));
  }
  if (newTab || /^https?:\/\//.test(href)) return openExternal(href);
  return goTo(href); // /path, tel:, mailto:
}
