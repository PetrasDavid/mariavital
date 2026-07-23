/**
 * Marcsivital.hu — central configuration
 * Update affiliate URLs, contact info, and social links here.
 */
export const siteConfig = {
  brand: {
    name: "Marcsivital.hu",
    shortName: "Marcsivital",
    slogan: "Egészség • Vitalitás • Közösség",
    logo: "/marcsivital_logo.png",
    heroHeadline: "Az egészség a legjobb befektetés – önmagadba.",
    heroSubtitle:
      "Segítek abban, hogy több energiád legyen, jobban érezd magad a bőrödben, és megtaláld azokat a természetes megoldásokat, amelyek hosszú távon is támogatják az egészségedet.",
    promise:
      "Nem csodát ígérek. Egy utat mutatok egy energikusabb, egészségesebb élet felé.",
    description:
      "Prémium Flavon táplálkozás, egészséges életmód és támogató közösség Marcsi vezetésével.",
  },

  distributor: {
    name: "Marcsi",
    fullName: "Miskolci Marcsi",
    formalName: "Miskolci Mária",
    title: "Flavon független distributor · Elit Team vezető",
    teamName: "Platinum Team",
    rank: "Elit Team vezető",
    profileImage: "/profilkep.jpg",
    profileImageAlt: "Miskolci Marcsi profilképe",
  },

  contact: {
    email: "marcsiflavon@gmail.com",
    phone: "+36 30 405 0618",
    phoneHref: "+36304050618",
  },

  social: {
    facebookProfile: {
      label: "Marcsi Miskolci – Facebook",
      href: "https://www.facebook.com/miskolci.maria",
    },
    facebookGroup1: {
      label: "Flavon / Platinum Team csoport",
      href: "https://www.facebook.com/groups/231700674671746/",
    },
    facebookGroup2: {
      label: "Közösségi csoport",
      href: "https://www.facebook.com/groups/985737345235720/",
    },
    facebookRecipe1: {
      label: "Marcselladiéta",
      href: "https://www.facebook.com/Marcselladieta",
    },
    facebookRecipe2: {
      label: "Receptek & életmód",
      href: "https://www.facebook.com/profile.php?id=100064287932625",
    },
    instagram: {
      label: "Instagram @marcsii73",
      href: "https://www.instagram.com/marcsii73/",
    },
    tiktok: {
      label: "TikTok @marcsella73",
      href: "https://www.tiktok.com/@marcsella73",
    },
    messenger: {
      label: "Messenger – írj Marcsinak!",
      href: "https://m.me/miskolci.maria",
    },
  },

  links: {
    /** Marcsi ajánlói / jutalék linkje — mindkét CTA ide vezet */
    affiliateUrl: "https://www.healthwithflavon.com/M-486391",
    /** Kiskereskedelmi / darabos vásárlás */
    retailUrl: "https://www.healthwithflavon.com/M-486391",
    /** Közvetlen gyártói vásárlás + regisztráció */
    registerUrl: "https://www.healthwithflavon.com/M-486391",
    calendlyUrl: "#",
    ebookDownloadUrl: "#",
  },

  navigation: [
    { label: "Kezdőlap", to: "/" },
    { label: "Rólam", to: "/rolam" },
    { label: "Termékek", to: "/termekek" },
    { label: "Csomagok", to: "/csomagok" },
    { label: "Sikertörténetek", to: "/sikertortenetek" },
    { label: "Platinum Team", to: "/platinum-team" },
    { label: "Blog", to: "/blog" },
    { label: "Kapcsolat", to: "/kapcsolat" },
  ],

  legal: {
    disclaimer:
      "Ez a Marcsivital.hu egy független Flavon distributor személyes weboldala. Nem a Flavon hivatalos vállalati oldala. A vásárlás, szállítás és számlázás a Flavon hivatalos webshopján keresztül történik.",
  },

  formEndpoint: null,
};

export const productCategories = [
  {
    id: "immunrendszer",
    emoji: "🌿",
    title: "Immunrendszer",
    description: "Természetes támogatás a mindennapi ellenállóképességhez.",
    to: "/kategoria/immunrendszer",
  },
  {
    id: "sziv",
    emoji: "❤️",
    title: "Szív- és érrendszer",
    description: "Vitalitás és keringés – a hosszú távú egészségért.",
    to: "/kategoria/sziv",
  },
  {
    id: "energia",
    emoji: "⚡",
    title: "Energia",
    description: "Több lendület a napjaidhoz – természetes összetevőkkel.",
    to: "/kategoria/energia",
  },
  {
    id: "emesztes",
    emoji: "🥗",
    title: "Emésztés",
    description: "Bélrendszer-támogatás és kiegyensúlyozott közérzet.",
    to: "/kategoria/emesztes",
  },
  {
    id: "aktiv",
    emoji: "🏃",
    title: "Aktív életmód",
    description: "Mozgás, regeneráció és tartós energia.",
    to: "/kategoria/aktiv",
  },
  {
    id: "noi",
    emoji: "🌸",
    title: "Női egészség",
    description: "Támogatás a változó életkorban és a női vitalitásban.",
    to: "/kategoria/noi",
  },
];

export const whyChooseMe = [
  "Saját tapasztalatok",
  "Több éves Flavon ismeret",
  "Folyamatos támogatás",
  "Segítség a megfelelő termék kiválasztásában",
  "Csatlakozási lehetőség a Platinum Teamhez",
];

export const storyQuote =
  "Nem csupán lefogytam – új életet kezdtem. Az eredményemet pedig több mint két éve sikerült megtartanom. Ez adott hitet ahhoz, hogy másoknak is segítsek elindulni.";

export const platinumPitch = {
  headline: "Egyedül nehéz. Egy jó csapatban viszont sokkal könnyebb fejlődni.",
  points: ["mentorálás", "képzések", "közösség", "támogatás", "üzleti lehetőség"],
  cta: "Csatlakozom",
};

export const ebookOffer = {
  title: "7 napos lapos has kihívás!",
  subtitle:
    "Töltsd le ingyenes e-bookomat, és kezdd el már ma az új életed — táplálkozással, rutinnal és közösségi támogatással.",
  cta: "E-book letöltése ingyen",
  downloadUrl: siteConfig.links.ebookDownloadUrl,
};

export const blogPosts = [
  {
    id: "eletmodvaltas",
    title: "Hogyan kezdj életmódváltásba?",
    excerpt: "Gyakorlati első lépések, ha tartósan szeretnél változtatni – nem egyik napról a másikra.",
    category: "Életmód",
    date: "2026. március 12.",
    readTime: "6 perc",
    image: null,
  },
  {
    id: "zoldseg-gyumolcs",
    title: "Miért fontos a napi zöldség- és gyümölcsbevitel?",
    excerpt: "Antioxidánsok, rostok és energia – miért érdemes minden nap figyelni rá.",
    category: "Egészség",
    date: "2026. március 5.",
    readTime: "5 perc",
    image: null,
  },
  {
    id: "hashimoto-eletmod",
    title: "Hashimoto és életmód",
    excerpt: "Hogyan támogathatod magad pajzsmirigy-autoimmun mellett tudatos rutinnal.",
    category: "Autoimmun",
    date: "2026. február 28.",
    readTime: "8 perc",
    image: null,
  },
  {
    id: "autoimmun-taplalkozas",
    title: "Autoimmun betegségek és táplálkozás",
    excerpt: "Gyulladáscsökkentő irányelvek és mindennapi tippek a táplálkozáshoz.",
    category: "Autoimmun",
    date: "2026. február 15.",
    readTime: "7 perc",
    image: null,
  },
  {
    id: "tartos-fogyas",
    title: "Tippek a tartós fogyáshoz",
    excerpt: "Nem diéta, hanem rendszer – amit a saját 2+ éves tapasztalatomból tanultam.",
    category: "Életmód",
    date: "2026. január 20.",
    readTime: "6 perc",
    image: null,
  },
];

export const packages = [
  {
    id: "belrendszer",
    emoji: "🌿",
    name: "Bélrendszer karbantartás – 2 havi",
    description: "2× Green + 2× Protect — akciós csomag 54 000 Ft-ért (eredeti 65 000 Ft).",
    products: ["Flavon Green", "Flavon Protect"],
    accentColor: "from-emerald-400 to-green-600",
  },
  {
    id: "vitality",
    emoji: "💚",
    name: "Vitality csomag",
    description: "Peak Boost + Flavon Green + Flavon Protect — teljes vitalitás a mindennapokra.",
    products: ["Peak Boost", "Flavon Green", "Flavon Protect"],
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "turbo",
    emoji: "🔥",
    name: "Turbó fogyás hatás csomag",
    description: "2 havi Green + 1 havi Boost a kihíváshoz — akciósan 54 000 Ft.",
    products: ["Flavon Green", "Peak Boost"],
    accentColor: "from-orange-400 to-amber-500",
  },
  {
    id: "vegyes-karton",
    emoji: "📦",
    name: "Vegyes karton",
    description: "Flavon Green + Protect + Peak Fruit — vegyes összeállítás egy kartonban.",
    products: ["Flavon Green", "Flavon Protect", "Peak Fruit"],
    accentColor: "from-blue-400 to-indigo-600",
  },
  {
    id: "izulet",
    emoji: "🦴",
    name: "Ízület támogató csomag",
    description: "Glucosamine & Chondroitin + Collagen — mozgás és regeneráció.",
    products: ["Glucosamine & Chondroitin", "Collagen"],
    accentColor: "from-sky-400 to-blue-600",
  },
];
