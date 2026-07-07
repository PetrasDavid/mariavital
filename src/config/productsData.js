import { siteConfig } from "./config";

/**
 * Product catalog — edit names, prices, descriptions, images, and
 * per-product affiliate URLs here.
 *
 * `affiliateUrl` falls back to siteConfig.affiliateUrl when omitted.
 */
export const products = [
  {
    id: "flavon-green",
    name: "Flavon Green",
    description:
      "Zöld növényi kivonatok és antioxidánsok a mindennapi vitalitásért. Támogatja az immunrendszert és az emésztést.",
    benefits: ["Antioxidáns", "Immun támogatás", "Napi energia"],
    retailPrice: 12990,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Green termék",
    accentColor: "from-emerald-400 to-green-600",
    affiliateUrl: siteConfig.links.affiliateUrl,
  },
  {
    id: "flavon-protect",
    name: "Flavon Protect",
    description:
      "Speciális flavonoid formula a sejtvédelemért. Ideális a modern, stresszes életmód ellensúlyozására.",
    benefits: ["Sejtvédelem", "Stressz ellen", "Prémium flavonoidok"],
    retailPrice: 14990,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Protect termék",
    accentColor: "from-teal-400 to-cyan-600",
    affiliateUrl: siteConfig.links.affiliateUrl,
  },
  {
    id: "flavon-boost",
    name: "Flavon Boost",
    description:
      "Energia és koncentráció támogatása természetes összetevőkkel. Tökéletes aktív életmódhoz.",
    benefits: ["Energia", "Fókusz", "Természetes összetevők"],
    retailPrice: 13990,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Boost termék",
    accentColor: "from-lime-400 to-green-600",
    affiliateUrl: siteConfig.links.affiliateUrl,
  },
  {
    id: "flavon-max",
    name: "Flavon Max",
    description:
      "A prémium kategória zászlóshajója — komplex tápanyag-profil a maximális egészségért.",
    benefits: ["Komplex formula", "Prémium minőség", "Teljes körű támogatás"],
    retailPrice: 18990,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Max termék",
    accentColor: "from-green-500 to-emerald-700",
    affiliateUrl: siteConfig.links.affiliateUrl,
  },
  {
    id: "flavon-active",
    name: "Flavon Active",
    description:
      "Sportolóknak és aktív életmódot folytatóknak. Támogatja az izomregenerációt és a kitartást.",
    benefits: ["Regeneráció", "Kitartás", "Aktív életmód"],
    retailPrice: 15990,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Active termék",
    accentColor: "from-green-400 to-teal-600",
    affiliateUrl: siteConfig.links.affiliateUrl,
  },
  {
    id: "flavon-kids",
    name: "Flavon Kids",
    description:
      "Gyermekek számára kifejlesztett, finom ízű táplálékkiegészítő a fejlődő szervezet támogatására.",
    benefits: ["Gyerekbarát", "Finom íz", "Fejlődés támogatás"],
    retailPrice: 11990,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Kids termék",
    accentColor: "from-lime-300 to-green-500",
    affiliateUrl: siteConfig.links.affiliateUrl,
  },
];

export const formatPrice = (price, currency = "Ft") =>
  `${price.toLocaleString("hu-HU")} ${currency}`;
