import { siteConfig } from "./config";

const shop = siteConfig.links.affiliateUrl;

/**
 * Product catalog — retail prices from Marcsi (2026).
 * Manufacturer carton (1#) price: 54 000 Ft — shown on purchase CTAs.
 * Set `image` to a public path when product photos are available.
 */
export const products = [
  {
    id: "flavon-green",
    name: "Flavon Green",
    description:
      "Zöldségalapú koncentrátum a mindennapi vitalitásért — antioxidánsok és növényi tápanyagok.",
    benefits: ["Zöldség koncentrátum", "Antioxidáns", "Napi rutin"],
    retailPrice: 16200,
    currency: "Ft",
    unit: "/üveg",
    image: "/products/flavon_green.jpg",
    imageAlt: "Flavon Green",
    accentColor: "from-emerald-400 to-green-600",
    affiliateUrl: shop,
  },
  {
    id: "flavon-protect",
    name: "Flavon Protect",
    description:
      "Sötét bogyós gyümölcsökön alapuló koncentrátum a sejtvédelem és az antioxidáns támogatás jegyében.",
    benefits: ["Protect", "Antioxidáns", "Gyümölcs"],
    retailPrice: 16200,
    currency: "Ft",
    unit: "/üveg",
    image: "/products/flavon_protect.jpg",
    imageAlt: "Flavon Protect",
    accentColor: "from-purple-500 to-violet-800",
    affiliateUrl: shop,
  },
  {
    id: "flavon-max",
    name: "Flavon Max",
    description:
      "Koncentrátum a mindennapi teljesítményhez és vitalitáshoz.",
    benefits: ["Max", "Vitalitás", "Napi rutin"],
    retailPrice: 16200,
    currency: "Ft",
    unit: "/üveg",
    image: "/products/flavon_max.jpg",
    imageAlt: "Flavon Max",
    accentColor: "from-teal-400 to-cyan-700",
    affiliateUrl: shop,
  },
  {
    id: "collagen",
    name: "Kollagén by Flavon",
    description:
      "Hidrolizált kollagén peptidek — bőr, haj, körmök és kötőszövet támogatása.",
    benefits: ["Kollagén", "Regeneráció", "Por"],
    retailPrice: 16200,
    currency: "Ft",
    unit: "/doboz",
    image: null,
    imageAlt: "Collagen by Flavon",
    accentColor: "from-amber-300 to-stone-500",
    affiliateUrl: shop,
  },
  {
    id: "glucosamine",
    name: "Glükózamin by Flavon",
    description:
      "Glükózamin és kondroitin komplex — ízületek mindennapi támogatására.",
    benefits: ["Ízületek", "Glükózamin", "Komplex"],
    retailPrice: 16200,
    currency: "Ft",
    unit: "/doboz",
    image: null,
    imageAlt: "Glucosamine & Chondroitin by Flavon",
    accentColor: "from-sky-300 to-blue-500",
    affiliateUrl: shop,
  },
  {
    id: "peak-boost",
    name: "Peak Boost",
    description:
      "Flavon Peak Boost gyümölcs koncentrátum — energia és vitalitás pezsgő, gyümölcsös formulával.",
    benefits: ["Peak Boost", "Energia", "Gyümölcs"],
    retailPrice: 32400,
    currency: "Ft",
    unit: "/doboz",
    image: "/products/peak_boost.jpg",
    imageAlt: "Flavon Peak Boost",
    accentColor: "from-rose-500 to-red-600",
    affiliateUrl: shop,
  },
  {
    id: "peak-fruit",
    name: "Peak Fruit",
    description:
      "Flavon Peak Fruit gyümölcs-olaj koncentrátum Omega-3, -6 és -9 zsírsavakkal.",
    benefits: ["Omega 3-6-9", "Peak Fruit", "Olaj koncentrátum"],
    retailPrice: 32400,
    currency: "Ft",
    unit: "/doboz",
    image: "/products/flavon_peak_fruit.jpg",
    imageAlt: "Flavon Peak Fruit",
    accentColor: "from-blue-400 to-indigo-600",
    affiliateUrl: shop,
  },
  {
    id: "veggie",
    name: "Veggie",
    description:
      "Növényi alapú Flavon koncentrátum a mindennapi zöldségbevitel támogatására.",
    benefits: ["Veggie", "Növényi", "Koncentrátum"],
    retailPrice: 32400,
    currency: "Ft",
    unit: "/doboz",
    image: "/products/flavon_peak_veggie.jpg",
    imageAlt: "Flavon Veggie",
    accentColor: "from-lime-400 to-green-700",
    affiliateUrl: shop,
  },
  {
    id: "future",
    name: "Future",
    description:
      "Flavon Future — jövőorientált formula a hosszú távú vitalitásért.",
    benefits: ["Future", "Vitalitás", "Koncentrátum"],
    retailPrice: 32400,
    currency: "Ft",
    unit: "/doboz",
    image: "/products/flavon_peak_future.jpg",
    imageAlt: "Flavon Future",
    accentColor: "from-violet-400 to-fuchsia-700",
    affiliateUrl: shop,
  },
  {
    id: "flavon-joy",
    name: "Joy",
    description:
      "Prémium gyümölcskoncentrátum kakaóporral — intenzív íz, cukorbetegeknek is ajánlható.",
    benefits: ["Joy", "Kakaó", "Prémium"],
    retailPrice: 21600,
    currency: "Ft",
    unit: "/üveg",
    image: "/products/flavon_joy.jpg",
    imageAlt: "Flavon Joy",
    accentColor: "from-amber-700 to-stone-900",
    affiliateUrl: shop,
  },
  {
    id: "flavon-max-plus",
    name: "Max+",
    description:
      "Flavon Max+ — a Max prémium változata, intenzívebb támogatással.",
    benefits: ["Max+", "Prémium", "Vitalitás"],
    retailPrice: 21600,
    currency: "Ft",
    unit: "/üveg",
    image: null,
    imageAlt: "Flavon Max+",
    accentColor: "from-cyan-500 to-teal-800",
    affiliateUrl: shop,
  },
  {
    id: "flavon-green-plus",
    name: "Green+",
    description:
      "Flavon Green+ — hamarosan érkezik 2026 augusztusában.",
    benefits: ["Green+", "Hamarosan", "2026. augusztus"],
    retailPrice: 21600,
    currency: "Ft",
    unit: "/üveg",
    comingSoon: true,
    comingSoonLabel: "Hamarosan — 2026. augusztus",
    image: null,
    imageAlt: "Flavon Green+",
    accentColor: "from-emerald-500 to-lime-600",
    affiliateUrl: shop,
  },
  {
    id: "belrendszer-2havi",
    name: "Bélrendszer karbantartás – 2 havi adag",
    description:
      "2 doboz Flavon Green + 2 doboz Flavon Protect — bélrendszer-támogató csomag két hónapra.",
    benefits: ["2 havi adag", "Green + Protect", "Akció"],
    retailPrice: 54000,
    originalPrice: 65000,
    onSale: true,
    currency: "Ft",
    image: null,
    imageAlt: "Bélrendszer karbantartás csomag",
    accentColor: "from-green-500 to-purple-600",
    affiliateUrl: shop,
  },
  {
    id: "turbo-fogyas",
    name: "Turbó fogyás hatás csomag (2 havi Green + 1 havi Boost)",
    description:
      "2 havi Flavon Green + 1 havi Peak Boost — turbó csomag a kihíváshoz, akciós áron.",
    benefits: ["2+1 havi", "Green + Boost", "Akció"],
    retailPrice: 54000,
    originalPrice: 65000,
    onSale: true,
    currency: "Ft",
    image: null,
    imageAlt: "Turbó fogyás hatás csomag",
    accentColor: "from-emerald-500 to-rose-600",
    affiliateUrl: shop,
  },
  {
    id: "complex-pack",
    name: "Complex Pack – Fehérje-szénhidrát-Inulin-vitaminok",
    description:
      "Vegán fehérje + szénhidrát mátrix, inulinnal és vitaminokkal — több kiszerelés választható.",
    benefits: ["Fehérje", "Inulin", "Több opció"],
    retailPrice: 16200,
    priceTo: 48700,
    hasOptions: true,
    currency: "Ft",
    image: "/products/flavon_complex_pack.jpg",
    imageAlt: "Complex Pack by Flavon",
    accentColor: "from-gray-700 to-stone-900",
    affiliateUrl: shop,
  },
];

export const formatPrice = (price, currency = "Ft") =>
  `${price.toLocaleString("hu-HU")} ${currency}`;

export const formatProductPrice = (product) => {
  const { retailPrice, priceTo, originalPrice, currency = "Ft", unit = "" } = product;
  if (priceTo != null) {
    return `${formatPrice(retailPrice, currency)} – ${formatPrice(priceTo, currency)}`;
  }
  const current = `${formatPrice(retailPrice, currency)}${unit ? ` ${unit}` : ""}`;
  return {
    current,
    original: originalPrice ? formatPrice(originalPrice, currency) : null,
  };
};

export const getProductById = (id) => products.find((p) => p.id === id) ?? null;

/** Products that can be added to the on-site cart foundation */
export const canAddToCart = (product) =>
  Boolean(product && !product.comingSoon && product.retailPrice != null);

export const getShopProducts = () => products.filter(canAddToCart);
