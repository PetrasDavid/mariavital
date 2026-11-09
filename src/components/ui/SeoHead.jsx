import { useEffect } from "react";
import { siteConfig } from "../../config/config";

const DEFAULT_IMAGE = siteConfig.brand.logo;
const SITE_URL = `https://${siteConfig.brand.domain}`;
const JSON_LD_ID = "marcsivital-jsonld";

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

function setJsonLd(data) {
  let el = document.getElementById(JSON_LD_ID);
  if (!el) {
    el = document.createElement("script");
    el.id = JSON_LD_ID;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Per-page document title + Open Graph / Twitter meta + JSON-LD (SPA-friendly).
 */
export default function SeoHead({
  title,
  description,
  keywords,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
}) {
  const { brand, distributor, contact, social } = siteConfig;
  const fullTitle = title.includes(brand.name)
    ? title
    : `${title} | ${brand.name}`;
  const desc =
    description ||
    brand.description ||
    "Éhezésmentes fogyás, egészséges életmód — Miskolci Mária, marcsivital.";
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const kw =
    keywords ||
    "marcsivital, éhezésmentes fogyás, egészséges életmód, fogyás, egészség, Miskolci Mária, Miskolci Marcsi";

  useEffect(() => {
    document.title = fullTitle;
    setMeta("name", "description", desc);
    setMeta("name", "keywords", kw);
    setMeta("name", "author", "Miskolci Mária");
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

    const sameAs = [social?.facebook?.href, social?.instagram?.href, social?.messenger?.href].filter(
      Boolean
    );

    setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: brand.displayName || brand.name,
          description: brand.description,
          inLanguage: "hu-HU",
          publisher: { "@id": `${SITE_URL}/#person` },
        },
        {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: distributor.formalName,
          alternateName: [distributor.fullName, distributor.name, "Miskolci Marcsi"],
          jobTitle: distributor.title,
          url: SITE_URL,
          image: `${SITE_URL}${distributor.profileImage}`,
          description:
            "Életmód tanácsadó: éhezésmentes fogyás, egészséges életmód, energia és tartós eredmények.",
          email: contact?.email,
          telephone: contact?.phone,
          sameAs,
          knowsAbout: [
            "éhezésmentes fogyás",
            "egészséges életmód",
            "életmódváltás",
            "tartós fogyás",
            "egészség",
          ],
        },
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: fullTitle,
          description: desc,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#person` },
          inLanguage: "hu-HU",
        },
      ],
    });
  }, [
    fullTitle,
    desc,
    kw,
    url,
    imageUrl,
    type,
    noIndex,
    brand.name,
    brand.displayName,
    brand.description,
    distributor.formalName,
    distributor.fullName,
    distributor.name,
    distributor.title,
    distributor.profileImage,
    contact?.email,
    contact?.phone,
    social?.facebook?.href,
    social?.instagram?.href,
    social?.messenger?.href,
  ]);

  return null;
}
