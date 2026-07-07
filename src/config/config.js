/**
 * Mariavital.hu — central configuration
 * Update affiliate URLs, contact info, and social links here.
 */
export const siteConfig = {
  brand: {
    name: "Mariavital.hu",
    shortName: "Mariavital",
    slogan: "Egészség • Mozgás • Közösség",
    heroTagline: "Egészség, vitalitás és közösség – szeretettel, Máriával.",
    description:
      "Prémium Flavon táplálkozás, Ringa Dance mozgás és támogató közösség Mária vezetésével.",
  },

  distributor: {
    name: "Mária",
    fullName: "Mária Miskolci",
    title: "Flavon független distributor · Ringa Dance oktató",
    teamName: "Platinum Team",
    profileImage: "/profilkep.jpg",
    profileImageAlt: "Mária Kovács profilképe",
  },

  contact: {
    email: "marcsiflavon@gmail.com",
    phone: "+36 30 405 0618",
    phoneHref: "+36304050618",
  },

  social: {
    facebookProfile: {
      label: "Mária Miskolci – Facebook",
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
      label: "Messenger – írj Máriának!",
      href: "https://m.me/miskolci.maria",
    },
  },

  links: {
    affiliateUrl: "https://webshop.flavonmax.com",
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
    { label: "Ringa Dance", to: "/ringa-dance" },
    { label: "Blog", to: "/blog" },
    { label: "Kapcsolat", to: "/kapcsolat" },
  ],

  legal: {
    disclaimer:
      "Ez a Mariavital.hu egy független Flavon distributor személyes weboldala. Nem a Flavon hivatalos vállalati oldala. A vásárlás, szállítás és számlázás a Flavon hivatalos webshopján keresztül történik.",
  },

  formEndpoint: null,
};

export const homeNavCards = [
  {
    title: "Termékek",
    description: "Fedezd fel a prémium Flavon termékcsaládot",
    to: "/termekek",
    icon: "leaf",
    color: "from-brand-500 to-emerald-600",
  },
  {
    title: "Sikertörténetek",
    description: "Valódi emberek, valódi átalakulások",
    to: "/sikertortenetek",
    icon: "sparkles",
    color: "from-rose-400 to-pink-500",
  },
  {
    title: "Csatlakozz hozzánk",
    description: "Platinum Team · mentorálás · közösség",
    to: "/platinum-team",
    icon: "users",
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Kapcsolat",
    description: "Írj, hívj — szívesen segítek!",
    to: "/kapcsolat",
    icon: "heart",
    color: "from-accent-400 to-orange-500",
  },
];

export const ebookOffer = {
  title: "7 napos lapos has kihívás Ringa Dance-szel!",
  subtitle:
    "Töltsd le ingyenes e-bookomat, és kezdd el már ma az új életed — mozgással, táplálkozással és közösségi támogatással.",
  cta: "E-book letöltése ingyen",
  downloadUrl: siteConfig.links.ebookDownloadUrl,
};

export const blogPosts = [
  {
    id: "hashimoto-tippek",
    title: "5 tipp Hashimoto mellett",
    excerpt:
      "Hogyan támogathatod a pajzsmirigy működését táplálkozással és Flavon termékekkel — praktikus tanácsok mindennapra.",
    category: "Egészség",
    date: "2026. március 12.",
    readTime: "6 perc",
    image: null,
  },
  {
    id: "lupusz-taplalkozas",
    title: "Lupusz és táplálkozás",
    excerpt:
      "Az autoimmun életmód nemzetközi irányelvei és a gyulladáscsökkentő étrend alapjai — mit érdemes tudni?",
    category: "Autoimmun",
    date: "2026. február 28.",
    readTime: "8 perc",
    image: null,
  },
  {
    id: "magyaros-receptek",
    title: "Magyaros fogyókúrás receptek",
    excerpt:
      "Ízletes, egészséges magyar ételek kalóriacsökkentett változatban — a Marcselladiéta kedvencei közül.",
    category: "Receptek",
    date: "2026. február 15.",
    readTime: "5 perc",
    image: null,
  },
  {
    id: "ringa-dance-kezdo",
    title: "Ringa Dance kezdőknek",
    excerpt:
      "Mi az a Ringa Dance, és hogyan segíthet a fogyásban, a közérzet javításában és a közösségi élményben?",
    category: "Mozgás",
    date: "2026. január 20.",
    readTime: "7 perc",
    image: null,
  },
  {
    id: "flavon-napi-rutin",
    title: "Flavon napi rutin reggelre",
    excerpt:
      "Egyszerű reggeli szokások, amelyek energiát adnak — termékek, víz, mozgás és pozitív gondolatok.",
    category: "Életmód",
    date: "2026. január 8.",
    readTime: "4 perc",
    image: null,
  },
  {
    id: "nyari-detox",
    title: "Tavaszi feltöltődés otthon",
    excerpt:
      "Természetes méregtelenítés Flavon termékekkel és könnyű ételekkel — 2 hetes útmutató kezdőknek.",
    category: "Életmód",
    date: "2025. december 10.",
    readTime: "6 perc",
    image: null,
  },
];

export const packages = [
  {
    id: "immun",
    emoji: "🌿",
    name: "Immunerősítő csomag",
    description: "Flavon Green + Protect — az immunrendszer mindennapi támogatására.",
    products: ["Flavon Green", "Flavon Protect"],
    accentColor: "from-emerald-400 to-green-600",
  },
  {
    id: "ringa",
    emoji: "💃",
    name: "Ringa Dance energia csomag",
    description: "Boost + Active — mozgáshoz és vitalitáshoz, edzés előtt és után.",
    products: ["Flavon Boost", "Flavon Active"],
    accentColor: "from-rose-400 to-pink-500",
  },
  {
    id: "summer",
    emoji: "🔥",
    name: "30 napos Summer Body csomag",
    description: "Komplett 30 napos program termékekkel, receptekkel és Ringa Dance támogatással.",
    products: ["Flavon Max", "Flavon Green", "Flavon Boost"],
    accentColor: "from-orange-400 to-amber-500",
  },
  {
    id: "noi",
    emoji: "❤️",
    name: "Női vitalitás csomag",
    description: "Hormonális egyensúly és energia nőknek — természetes összetevőkkel.",
    products: ["Flavon Protect", "Flavon Max"],
    accentColor: "from-pink-400 to-rose-500",
  },
  {
    id: "autoimmun",
    emoji: "🛡️",
    name: "Autoimmun életmód csomag",
    description: "Gyulladáscsökkentő támogatás autoimmun betegségek mellett élt életmódhoz.",
    products: ["Flavon Green", "Flavon Protect", "Flavon Max"],
    accentColor: "from-teal-400 to-cyan-600",
  },
];
