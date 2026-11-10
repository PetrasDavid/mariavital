/**
 * marcsivital — central configuration
 * Update affiliate URLs, contact info, and social links here.
 */
export const siteConfig = {
  brand: {
    name: "marcsivital",
    shortName: "marcsivital",
    displayName: "MARCSIVITAL",
    domain: "www.marcsivital.eu",
    slogan: "Egészség. Energia. Életminőség.",
    identityLine: "Miskolci Marcsi | Életmód tanácsadó",
    logo: "/marcsivital_logo.jpg",
    heroHeadline: "Az egészség a legjobb befektetés – önmagadba.",
    heroSubtitle:
      "Éhezésmentes fogyás és egészséges életmód — segítek, hogy több energiád legyen, jobban érezd magad a bőrödben, és tartós, jojó-effektus nélküli eredményt érj el.",
    promise:
      "Nem csodát ígérek. Egy utat mutatok egy energikusabb, egészségesebb élet felé.",
    description:
      "Éhezésmentes fogyás és egészséges életmód — Miskolci Mária (Miskolci Marcsi) életmód tanácsadó oldala: marcsivital.",
  },

  distributor: {
    name: "Marcsi",
    fullName: "Miskolci Marcsi",
    formalName: "Miskolci Mária",
    title: "Életmód tanácsadó",
    teamName: "Platinum Team",
    rank: "Elit Team vezető",
    profileImage: "/profilkep.jpg",
    profileImageAlt: "Miskolci Marcsi profilképe",
    beforeAfterImage: "/elotte-utana.jpg",
    beforeAfterImageAlt: "Marcsi előtte–utána átalakulása",
    teamImage: "/csapatkep.jpg",
    teamImageAlt: "Platinum Team közös csapatkép",
  },

  contact: {
    email: "marcsiflavon@gmail.com",
    emailSecondary: "marcsimiskolci@gmail.com",
    /** Rendelésigények (kosár / pénztár) erre a címre mennek */
    orderEmail: "marcsiflavon@gmail.com",
    /**
     * FormSubmit rejtett hash (opcionális). Üresen az orderEmail-t használja.
     * Éles domainen az első rendelésnél FormSubmit aktiváló e-mailt küld Marcsi címére.
     */
    formSubmitHash: "",
    phone: "+36 30 405 0618",
    phoneHref: "+36304050618",
  },

  social: {
    facebookProfile: {
      label: "Marcsi Miskolci – Facebook",
      href: "https://www.facebook.com/miskolci.maria",
    },
    facebookGroup1: {
      label: "Platinum Team Facebook csoport",
      href: "https://www.facebook.com/groups/2378320169060369/",
    },
    facebookGroup2: {
      label: "Közösségi csoport",
      href: "https://www.facebook.com/groups/231700674671746/",
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
    affiliateUrl: "https://webshop.flavonmax.com/lang=&sponsor=M-486391",
    /** Kiskereskedelmi / darabos vásárlás */
    retailUrl: "https://webshop.flavonmax.com/lang=&sponsor=M-486391",
    /** Közvetlen gyártói vásárlás + regisztráció */
    registerUrl: "https://webshop.flavonmax.com/lang=&sponsor=M-486391",
    calendlyUrl: "#",
    ebookDownloadUrl: "#",
  },

  /**
   * On-site webshop foundation (cart /kosar, checkout /penztar).
   * Full settings live in src/shop/shopConfig.js
   */
  shop: {
    enabled: true,
    checkoutEnabled: true,
  },

  /** Optional Formspree / webhook URL for shop orders (JSON POST). */
  orderEndpoint: null,

  /**
   * How to deliver order requests:
   * - "formsubmit" → server-side email to contact.orderEmail (no Outlook)
   * - "mailto" → opens the visitor's mail app (legacy)
   */
  orderSubmitMode: "formsubmit",

  navigation: [
    { label: "Kezdőlap", to: "/" },
    { label: "Rólam", to: "/rolam" },
    { label: "Termékek", to: "/termekek" },
    { label: "Csomagok", to: "/csomagok" },
    { label: "Sikertörténetek", to: "/sikertortenetek" },
    { label: "Platinum Team", to: "/platinum-team" },
    { label: "Kapcsolat", to: "/kapcsolat" },
  ],

  legal: {
    disclaimer:
      "A marcsivital (www.marcsivital.eu) egy független Flavon distributor személyes weboldala. Nem a Flavon hivatalos vállalati oldala. A vásárlás, szállítás és számlázás a Flavon hivatalos webshopján keresztül történik.",
    operatorName: "Miskolci Mária",
    operatorDisplayName: "Miskolci Marcsi",
  },

  formEndpoint: null,

  /**
   * Newsletter — free mailto mode (no paid MailerLite needed).
   * Optional: set formActionUrl later if a free form service is connected.
   */
  newsletter: {
    enabled: true,
    /** "mailto" = opens email to Marcsi; "mailerlite" if formActionUrl is set */
    mode: "mailto",
    formActionUrl: "",
    title: "Iratkozz fel a hírlevélre",
    subtitle:
      "Hasznos tippek a jojó-effektus nélküli és éhezésmentes fogyáshoz — közvetlenül Marcsitól. Feliratkozáskor ajándék e-bookot küldünk az egészségprogramról.",
    buttonLabel: "Feliratkozás",
    successMessage:
      "Köszönjük! Megnyílt az e-mail ablak — küldd el az üzenetet a feliratkozás befejezéséhez.",
    pendingMessage:
      "A feliratkozáshoz írj nekünk e-mailben a megadott címeddel.",
    privacyNote:
      "Az adataidat csak hírlevélküldésre használjuk. Bármikor leiratkozhatsz. Részletek: Adatvédelem.",
  },
};

export const productCategories = [
  {
    id: "immunrendszer",
    emoji: "🌿",
    title: "Immunrendszer",
    description: "Természetes támogatás a mindennapi ellenállóképességhez.",
    to: "/kategoria/immunrendszer",
    productIds: ["flavon-protect", "flavon-green", "flavon-green-plus", "flavon-max"],
  },
  {
    id: "sziv",
    emoji: "❤️",
    title: "Szív- és érrendszer",
    description: "Vitalitás és keringés – a hosszú távú egészségért.",
    to: "/kategoria/sziv",
    productIds: ["flavon-protect", "flavon-max", "peak-fruit", "flavon-green"],
  },
  {
    id: "energia",
    emoji: "⚡",
    title: "Energia",
    description: "Több lendület a napjaidhoz – természetes összetevőkkel.",
    to: "/kategoria/energia",
    productIds: ["peak-boost", "flavon-max", "future", "flavon-green-plus"],
  },
  {
    id: "emesztes",
    emoji: "🥗",
    title: "Emésztés",
    description: "Bélrendszer-támogatás és kiegyensúlyozott közérzet.",
    to: "/kategoria/emesztes",
    productIds: ["flavon-green", "flavon-green-plus", "flavon-protect", "veggie", "belrendszer-2havi"],
  },
  {
    id: "aktiv",
    emoji: "🏃",
    title: "Aktív életmód",
    description: "Mozgás, regeneráció és tartós energia.",
    to: "/kategoria/aktiv",
    productIds: ["peak-boost", "collagen", "glucosamine", "izulet-csomag", "complex-pack"],
  },
  {
    id: "noi",
    emoji: "🌸",
    title: "Női egészség",
    description: "Támogatás a változó életkorban és a női vitalitásban.",
    to: "/kategoria/noi",
    productIds: ["flavon-joy", "flavon-protect", "collagen", "flavon-green", "vitality-pack"],
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
  "Nem csupán lefogytam. Új életet kezdtem. Az eredményemet pedig több mint két éve sikerült megtartanom. Ez adott hitet ahhoz, hogy másoknak is segítsek elindulni.";

/** Marcsi — 2026 tavaszi mérföldkő (Facebook csoport bejegyzés) */
export const spring2026Story = {
  title: "2026 Tavasz",
  eyebrow: "Személyes mérföldkő",
  paragraphs: [
    "Rengeteg fantasztikus dolog történt velem… Volt egy tavaszi kiírás a Flavonnál — így kezdődött minden.",
    "A jutalma egy Michelin-csillagos vacsora a Costes étteremben, és utána a Magyar Tudományos Akadémián egy különleges koncertélmény volt. Sikeresen teljesítettem a kiírást, így vasárnap én is részese lehettem ennek a fantasztikus programnak.",
    "Az áprilisi hónapnak rengeteg céllal, álommal indultunk neki — ami hónap végére valósággá vált. A kitűzött célokat teljesítve Elit vezetői szintre léptem a Flavonnál.",
  ],
  images: [
    {
      src: "/stories/2026_tavasz_1.jpg",
      alt: "Marcsi — 2026 tavasz, Michelin-vacsora és ünneplés",
    },
    {
      src: "/stories/2026_tavasz_2.jpg",
      alt: "Marcsi — 2026 tavasz, különleges este",
    },
    {
      src: "/stories/2026_tavasz_3.jpg",
      alt: "Marcsi — 2026 tavasz, Magyar Tudományos Akadémia koncert",
    },
  ],
};

/** Marcsi — Flavon jubileumi elismerés */
export const recognitionStory = {
  title: "Megérte elindulni",
  eyebrow: "Van az a pillanat…",
  paragraphs: [
    "Tegnap a Flavon jubileumi rendezvényén vehettem részt, egy igazán különleges, inspiráló eseményen. Ott állni ezen a színpadon, látni a sikereket, a boldog arcokat, a rengeteg munkát és kitartást a történetek mögött… egyszerűen fantasztikus érzés volt!",
    "De tudjátok, mi az, ami számomra igazán fontos? Hogy minden siker egy döntéssel kezdődik. Egy apró lépéssel, egy lehetőséggel, aminek talán eleinte még nem is látjuk, hová vezethet.",
    "Én sem úgy indultam el ezen az úton, hogy mindent tudtam. Tanultam, fejlődtem, voltak kérdéseim, és lépésről lépésre jutottam el oda, ahol ma tartok. Büszke vagyok arra, amit eddig elértem, és hálás vagyok mindazért, amit ez az út adott nekem.",
    "Számomra a Flavon nemcsak egy vállalkozás. Hanem egy közösség, folyamatos fejlődés, célok és lehetőség arra, hogy valami olyat építsek, amire igazán büszke lehetek.",
    "És tudod, mi a legjobb? Nem kell mindent tudnod az induláskor. Nem kell tökéletesnek lenned. Csak nyitottnak kell lenned arra, hogy tanulj, fejlődj, és merj belevágni.",
    "Most olyan hölgyeket keresek magam mellé, akik szeretnének fejlődni, új célokat kitűzni, és szívesen építenének velem egy közös jövőt. Akik nemcsak álmodozni szeretnének, hanem tennének is az álmaikért.",
    "Szívesen megmutatom, én mit találtam ebben a lehetőségben, és hogyan lehet elindulni rajta. Lehet, hogy számodra is egy ilyen beszélgetés lesz az első lépés valami új felé.",
  ],
  cta: "Ha kíváncsi vagy a Flavon üzleti lehetőségére, vagy szeretnéd tudni, hogyan jutottam el idáig, írj üzenetet a „LEHETŐSÉG” szóval — lehet, hogy éppen most kezdődik a te történeted is!",
  images: [
    {
      src: "/stories/elismeres_1.jpg",
      alt: "Marcsi — Flavon jubileumi rendezvény, színpad",
    },
    {
      src: "/stories/elismeres_2.jpg",
      alt: "Marcsi — elismerés és ünneplés",
    },
    {
      src: "/stories/elismeres_3.jpg",
      alt: "Marcsi — jubileumi pillanat",
    },
  ],
};

export const platinumPitch = {
  headline: "Egyedül nehéz. Egy jó csapatban viszont sokkal könnyebb fejlődni.",
  points: ["mentorálás", "képzések", "közösség", "támogatás", "üzleti lehetőség"],
  cta: "Csatlakozom",
};

/** Platinum Team — mentorprogram élmény (Facebook bejegyzés) */
export const mentorProgramStory = {
  title: "Mentorprogram",
  eyebrow: "4 nap · 8 sikeres nő · Egy közös út",
  paragraphs: [
    "Négy nap, amit nem lehet egyszerűen csak egy továbbképzésnek nevezni.",
    "8 sikeres vezető nő, akik különböző utakon indultunk el, mégis ugyanazért dolgozunk: fejlődni, tanulni, példát mutatni és másokat is magunkkal vinni az úton.",
    "Ez a 4 nap adott új tudást, új lendületet, rengeteg beszélgetést, nevetést, felismerést és persze olyan pillanatokat, amiket még sokáig a szívünkben őrzünk.",
    "Mert a siker nem csak a számokról és eredményekről szól. A siker számomra azt is jelenti, hogy vannak mellettem olyan emberek, akikkel együtt lehet fejlődni, egymást támogatni és együtt örülni egymás sikereinek.",
    "Hálás vagyok ezért a 4 napért, ezért a csapatért és minden közös élményért. És tudom, hogy ez még csak egy újabb állomás volt… innen megyünk tovább!",
  ],
  images: [
    {
      src: "/stories/mentorprogram_1.jpg",
      alt: "Mentorprogram — közös pillanat",
    },
    {
      src: "/stories/mentorprogram_2.jpg",
      alt: "Mentorprogram — csapat",
    },
    {
      src: "/stories/mentorprogram_3.jpg",
      alt: "Mentorprogram — 8 vezető nő",
    },
    {
      src: "/stories/mentorprogram_4.jpg",
      alt: "Mentorprogram — közös út",
    },
  ],
  certificate: {
    src: "/stories/mentorprogram_oklevel.jpg",
    alt: "Mentorprogram oklevél",
  },
};

/** Platinum Team — vezetőképzés élmény */
export const platinumLeadershipStory = {
  title: "Vezetőképzés",
  eyebrow: "Megannyi felismerés · Rengeteg nevetés · Egy közös cél",
  paragraphs: [
    "A Platinum Team vezetőképzése ismét bebizonyította, hogy a siker nem véletlen. A siker mögött tanulás, fejlődés, kitartás és egy olyan közösség áll, ahol valóban felemeljük egymást.",
    "Ez a 4 nap nem csupán egy képzés volt. Egy újabb lépcsőfok lett azon az úton, ahol nemcsak jobb vezetővé, hanem jobb emberré is válunk.",
    "Hiszem, hogy a vezető nem attól vezető, hogy elöl áll… hanem attól, hogy példát mutat, inspirál és másokat is sikerre segít.",
    "Hálás vagyok, hogy ennek a fantasztikus közösségnek a tagja lehetek. Köszönöm a felső vezetőimnek és a csapattársaimnak ezt a felejthetetlen négy napot!",
    "A fejlődés nem ér véget itt… ez még csak a következő szint kezdete!",
  ],
  cta: "Szeretnél velünk tartani? Keress privát üzenetben, vagy töltsd ki az űrlapot — megbeszéljük a részleteket.",
  images: [
    {
      src: "/csapatkep.jpg",
      alt: "Platinum Team közös csapatkép",
    },
    {
      src: "/stories/platinum_team_1.jpg",
      alt: "Platinum Team vezetőképzés — közös pillanat",
    },
    {
      src: "/stories/platinum_team_2.jpg",
      alt: "Platinum Team vezetőképzés — csapat",
    },
    {
      src: "/stories/platinum_team_3.jpg",
      alt: "Platinum Team vezetőképzés — 4 nap együtt",
    },
  ],
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
    id: "indulo-proba",
    productId: "indulo-proba-csomag",
    emoji: "🌱",
    name: "Induló próba csomag",
    description:
      "10 db Peak Boost (kismamáknak Fruit) + 1 db Green — akciósan 26 800 Ft + futár. Csak Marcsitól kapható, a Flavontól nem.",
    products: ["Peak Boost / Fruit", "Flavon Green", "Csak Marcsitól"],
    accentColor: "from-lime-400 to-rose-500",
    image: "/products/indulo_proba_csomag.jpg",
    imageAlt: "Induló próba csomag — Green és Peak Boost",
  },
  {
    id: "belrendszer",
    productId: "belrendszer-2havi",
    emoji: "🌿",
    name: "Bélrendszer karbantartás – 2 havi",
    description: "2× Green + 2× Protect — akciós csomag 54 000 Ft-ért (eredeti 65 000 Ft).",
    products: ["Flavon Green", "Flavon Protect"],
    accentColor: "from-emerald-400 to-green-600",
    image: "/products/belrendszer_karbantartas.jpg",
    imageAlt: "Bélrendszer karbantartás csomag",
  },
  {
    id: "turbo",
    productId: "turbo-fogyas",
    emoji: "🔥",
    name: "Turbó fogyás hatás csomag",
    description: "2 üveg Green + 1 doboz Peak Boost — gyártói ár: 1# = 54 000 Ft.",
    products: ["Flavon Green", "Peak Boost"],
    accentColor: "from-orange-400 to-amber-500",
    image: "/products/turbo_fogyas_hatas.jpg",
    imageAlt: "Turbó fogyás hatás csomag",
  },
  {
    id: "vegyes-karton",
    productId: "vitality-pack",
    emoji: "📦",
    name: "Vitality Pack",
    description:
      "Flavon Green + Protect + Peak Fruit. Kiskereskedelmi ár: 65 000 Ft, gyártói karton: 54 000 Ft.",
    products: ["Flavon Green", "Flavon Protect", "Peak Fruit"],
    accentColor: "from-blue-400 to-indigo-600",
    image: "/products/vitality_pack.jpg",
    imageAlt: "Vitality Pack termékcsomag",
  },
  {
    id: "izulet",
    productId: "izulet-csomag",
    emoji: "🦴",
    name: "Ízület támogató csomag",
    description: "Glucosamine & Chondroitin + Collagen — mozgás és regeneráció.",
    products: ["Glucosamine & Chondroitin", "Collagen"],
    accentColor: "from-sky-400 to-blue-600",
  },
];
