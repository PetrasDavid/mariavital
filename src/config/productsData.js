import { siteConfig } from "./config";

const shop = siteConfig.links.affiliateUrl;

/**
 * Product catalog — names and retail prices from Marcsi's shop listings.
 * Set `image` to a public path when product photos are available.
 */
export const products = [
  {
    id: "flavon-green",
    name: "A Flavon Green zöldség koncentrátum",
    description:
      "Zöldségalapú koncentrátum a mindennapi vitalitásért — antioxidánsok és növényi tápanyagok üveges kiszerelésben.",
    benefits: ["Zöldség koncentrátum", "Antioxidáns", "Napi rutin"],
    retailPrice: 16000,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Green zöldség koncentrátum",
    accentColor: "from-emerald-400 to-green-600",
    affiliateUrl: shop,
  },
  {
    id: "belrendszer-2havi",
    name: "Bélrendszer karbantartás – 2 havi adag!",
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
    id: "peak-boost",
    name: "BOOST Gyümölcs koncentrátum",
    description:
      "Flavon Peak Boost gyümölcs koncentrátum — energia és vitalitás pezsgő, gyümölcsös formulával.",
    benefits: ["Peak Boost", "Energia", "Gyümölcs"],
    retailPrice: 32500,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Peak Boost",
    accentColor: "from-rose-500 to-red-600",
    affiliateUrl: shop,
  },
  {
    id: "collagen",
    name: "Collagen by Flavon (10.000 mg/nap)",
    description:
      "Hidrolizált kollagén peptidek por formában — napi 10 000 mg, 300 g kiszerelés.",
    benefits: ["Kollagén", "10 000 mg/nap", "Por"],
    retailPrice: 16200,
    currency: "Ft",
    image: null,
    imageAlt: "Collagen by Flavon",
    accentColor: "from-amber-300 to-stone-500",
    affiliateUrl: shop,
  },
  {
    id: "complex-pack",
    name: "Complex Pack – Fehérje-szénhidrát-Inulin-vitaminok főétkezés",
    description:
      "Vegán fehérje + szénhidrát mátrix, inulinnal és vitaminokkal — csokoládé-banán íz. Több kiszerelés választható.",
    benefits: ["Fehérje", "Inulin", "Több opció"],
    retailPrice: 16200,
    priceTo: 48700,
    hasOptions: true,
    currency: "Ft",
    image: null,
    imageAlt: "Complex Pack by Flavon",
    accentColor: "from-gray-700 to-stone-900",
    affiliateUrl: shop,
  },
  {
    id: "green-boost-30",
    name: "Flavon Green és Peak Boost együtt – 30 napos adag",
    description:
      "Flavon Green + Peak Boost együtt — 30 napos adag a mindennapi energiához és vitalitáshoz.",
    benefits: ["30 nap", "Green + Boost", "Kombi"],
    retailPrice: 46700,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Green és Peak Boost 30 nap",
    accentColor: "from-emerald-500 to-rose-500",
    affiliateUrl: shop,
  },
  {
    id: "flavon-protect",
    name: "Flavon Protect gyümölcskoncentrátum",
    description:
      "Sötét bogyós gyümölcsökön alapuló koncentrátum a sejtvédelem és az antioxidáns támogatás jegyében.",
    benefits: ["Protect", "Antioxidáns", "Gyümölcs"],
    retailPrice: 16000,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Protect",
    accentColor: "from-purple-500 to-violet-800",
    affiliateUrl: shop,
  },
  {
    id: "glucosamine",
    name: "Glucosamine & Chondroitin by Flavon",
    description:
      "Glükózamin és kondroitin komplex kapszulákban — ízületek mindennapi támogatására (90 db).",
    benefits: ["Ízületek", "90 kapszula", "Komplex"],
    retailPrice: 16200,
    currency: "Ft",
    image: null,
    imageAlt: "Glucosamine & Chondroitin by Flavon",
    accentColor: "from-sky-300 to-blue-500",
    affiliateUrl: shop,
  },
  {
    id: "flavon-joy",
    name: "JOY PRÉMIUM gyümölcskoncentrátum kakaóporral 12% (cukorbetegeknek is)",
    description:
      "Prémium gyümölcskoncentrátum 12% kakaóporral — intenzív íz, cukorbetegeknek is ajánlható.",
    benefits: ["Joy Premium", "Kakaó 12%", "Cukorbeteg-barát"],
    retailPrice: 21600,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Joy Premium",
    accentColor: "from-amber-700 to-stone-900",
    affiliateUrl: shop,
  },
  {
    id: "peak-fruit",
    name: "PEAK FRUIT Gyümölcs-olaj (Omega3-Omega6-Omega9) koncentrátum",
    description:
      "Flavon Peak Fruit gyümölcs-olaj koncentrátum Omega-3, -6 és -9 zsírsavakkal.",
    benefits: ["Omega 3-6-9", "Peak Fruit", "Olaj koncentrátum"],
    retailPrice: 32500,
    currency: "Ft",
    image: null,
    imageAlt: "Flavon Peak Fruit",
    accentColor: "from-blue-400 to-indigo-600",
    affiliateUrl: shop,
  },
  {
    id: "celfuzet",
    name: "Motivációs és Célfüzet",
    description:
      "Motivációs és célfüzet a kihíváshoz — jegyzeteld a célokat, a rutinodat és a sikereidet.",
    benefits: ["Célfüzet", "Motiváció", "Kihívás"],
    retailPrice: 1299,
    currency: "Ft",
    image: null,
    imageAlt: "Motivációs és Célfüzet",
    accentColor: "from-pink-300 to-rose-500",
    affiliateUrl: shop,
  },
  {
    id: "turbo-fogyas",
    name: "Turbó fogyás hatás csomag a kihíváshoz (2 havi Green + 1 havi Boost)",
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
];

export const formatPrice = (price, currency = "Ft") =>
  `${price.toLocaleString("hu-HU")} ${currency}`;

export const formatProductPrice = (product) => {
  const { retailPrice, priceTo, originalPrice, currency = "Ft" } = product;
  if (priceTo != null) {
    return `${formatPrice(retailPrice, currency)} – ${formatPrice(priceTo, currency)}`;
  }
  return {
    current: formatPrice(retailPrice, currency),
    original: originalPrice ? formatPrice(originalPrice, currency) : null,
  };
};
