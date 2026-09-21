import { useEffect } from "react";
import { siteConfig } from "../../config/config";

const DEFAULT_IMAGE = siteConfig.brand.logo;
const SITE_URL = `https://${siteConfig.brand.domain}`;

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-page document title + Open Graph / Twitter meta (SPA-friendly).
 */
export default function SeoHead({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
}) {
  const { brand } = siteConfig;
  const fullTitle = title.includes(brand.name)
    ? title
    : `${title} | ${brand.name}`;
  const desc =
    description ||
    brand.description ||
    "Prémium Flavon termékek és egészséges életmód Marcsi vezetésével.";
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("name", "robots", noIndex ? "noindex,nofollow" : "index,follow");

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:locale", "hu_HU");
    setMeta("property", "og:site_name", brand.name);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", imageUrl);

    setCanonical(url);
  }, [fullTitle, desc, url, imageUrl, type, noIndex, brand.name]);

  return null;
}
