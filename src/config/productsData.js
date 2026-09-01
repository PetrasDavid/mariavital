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
    name: "GREEN zöldség koncentrátum",
    description:
      "A tömény zöldség, az egészséges fogyás alapja! De ki tud naponta 1,5–2 kg-ot megenni? Annyi baj van vele: megvenni, megpucolni, sütni, főzni, nyersen… Macerás. A Green zöldség-koncentrátum az igazi kalóriadeficit támogatója — az üvegben ellenőrzött minőségben és mennyiségben tömény zöldség található, tudományosan igazolt vizsgálatok alapján összekeverve, olyan arányban, ahogyan számunkra a leghasznosabb. Feltölt, így nem leszel éhes, de az energiaszinted megmarad. Ez nem étvágycsökkentő, hanem sejt feltöltő élelmiszer, melynek egy adagja csak 16 kcal!",
    benefits: ["Zöldség koncentrátum", "16 kcal/adag", "Kalóriadeficit", "Prebiotikus"],
    retailPrice: 16200,
    currency: "Ft",
    unit: "/üveg",
    image: "/products/flavon_green.jpg",
    imageAlt: "Flavon Green zöldség koncentrátum",
    accentColor: "from-emerald-400 to-green-600",
    affiliateUrl: shop,
    ingredients:
      "Brokkoli, zeller, spenót, fokhagyma, spirulina alga, homoktövis, zöld tea, sárgarépa, búzafű, petrezselyem, grapefruit.",
    recommendedFor: [
      "Fogyó- és tisztítókúrában",
      "Lúgosításban, méregtelenítésben",
      "Emésztési zavaroknál, puffadásnál",
      "Csontritkulás, ásványi anyag pótlás",
      "Keringési zavaroknál, szív- és érrendszeri támogatás",
      "Kismamáknak (fólsav — nyers spenót)",
      "Gyulladások, fertőzések, fekélyek esetén",
      "Látás javításánál (magas béta-karotin)",
      "Vizelethajtásnál, vérnyomás szabályozásnál",
      "Cukorbetegeknek kifejezetten ajánlott",
      "Koleszterin csökkentésnél",
      "Mindenkinek, aki nem fogyaszt naponta 1–1,5 kg nyers zöldséget",
    ],
    ingredientDetails: `Brokkoli — A zöldségek királynője: A-, C-, E-vitamin, vas, folsav, kálium, glükozinolátok, inulin, rost és fehérje. Gazdag klorofill forrás.

Zeller — Ca, P, Mg, Fe, nyomelemek, karotin, illóolaj, A-, B-, C-vitamin. Vizelethajtó, vágykeltő, emésztési zavaroknál, erősen lúgosít.

Spenót — A-, B2-, B6-, C-, E-, K-vitamin, mangán, folsav, kalcium, kálium, réz, foszfor, cink. Daganatokban, keringési zavarokban, látás, lúgosítás. Kiváló rost- és Omega-3 forrás.

Fokhagyma — Flavonoidok, allinin és allicin enzimek, A-, B1-, B2-, C- és E-vitamin. Természetes antibiotikum, gombaellenes, emésztést és májműködést elősegítő, inulin, vérnyomáscsökkentő.

Spirulina alga — A WHO a tökéletes tápláléknak nevezi. Teljes B-vitamin sor, C- és E-vitamin, ásványi anyagok. ~60% tiszta fehérje — teljes értékű fehérjeforrás vegánoknak is. Fokozza a jóllakottság érzését.

Homoktövis — Magas béta-karotin, kiemelkedő C- és E-vitamin. Immunrendszer, bőr, gyomor-nyombél, máj, hajhullás.

Zöld tea — B2-, C-, D-, K-vitamin, ásványi anyagok. Nagyon magas polifenol- és antioxidáns tartalom. Hasi zsír csökkentés, egészséges testsúlykontroll, csontsűrűség, prebiotikus hatás.

Sárgarépa — Kalcium, kálium, nátrium, foszfor, vas, magnézium, króm, A-, B-, C-, E-, K-vitamin. Magas béta-karotin és karotin tartalom.

Búzafű — Ásványi anyagok, nyomelemek, vitaminok, enzimek, klorofill. Gyulladások, fertőzések, fekélyek ellen, emésztés javítás, intenzíven lúgosít, immunerősítő.

Petrezselyem — C-, B-, K-vitamin, flavonoidok, ásványi anyagok. Vizelethajtó, vesetisztító, gyulladáscsökkentő, gyomorerősítő.

Grapefruit — Magas B-, C-, E-, K-vitamin, pektin, bioflavonoid. Szív-érrendszer, vírus- és daganatellenes hatás, májtisztító, lúgosító.`,
    consumption:
      "Az első 2–3 hónapban emelt szintű adagolását ajánlom — a meglévő egészségi állapotot nem megőrizni, hanem emelni szeretnénk. Egy üveg kb. 30–40 napra elegendő zöldség-koncentrátumot tartalmaz, adagolása a csomagolásban levő kanállal. Ajánlott étkezés előtt 10 perccel, reggel, délben és este — igyál rá egy nagy pohár vizet!",
    faq: "A GREEN hatásai az összetevők erejében rejlik. Kiskereskedelmi áron darabra rendelhető ezen az oldalon, gyártói kartonos vásárlás esetén az 1# karton ára 54 000 Ft.",
  },
  {
    id: "flavon-protect",
    name: "FLAVON Protect gyümölcskoncentrátum",
    description:
      "A FLAVON Protect hatásai az összetevői erejében rejlik. A gyümölcskoncentrátum összetevői egymás hatását felerősítve járulnak hozzá a test egyensúlyban levő működéséhez — mindegyik a megfelelő helyen fejti ki jótékony hatását. Tartósítószert és egyéb adalékanyagot (víz, sűrítő, állagjavító, színezék, ízfokozó) nem tartalmaz!",
    benefits: ["Protect", "Gyümölcs", "Immun", "Antioxidáns"],
    retailPrice: 16200,
    currency: "Ft",
    unit: "/üveg",
    image: "/products/flavon_protect.jpg",
    imageAlt: "Flavon Protect gyümölcskoncentrátum",
    accentColor: "from-purple-500 to-violet-800",
    affiliateUrl: shop,
    ingredients:
      "Tőzegáfonya, fekete bodza, szőlőmag, sütőtök, meggy, csipkebogyó, fekete berkenye (arónia), fekete ribizli.",
    recommendedFor: [
      "Bélgyulladásoknál",
      "Zsíranyagcsere fokozásánál",
      "Menstruációs fájdalmaknál és zavaroknál",
      "Felfázásnál, húgyúti és veseproblémáknál",
      "Gyomor- és bélproblémáknál",
      "Ízületi problémáknál",
      "Ekcémánál, pikkelysömörnél, bőrproblémáknál",
      "Allergiánál",
      "Cukorbetegeknél",
      "Lágyszervi gyulladásoknál",
      "Csontritkulás megelőzésénél",
      "Immun-modulálásnál",
      "Stressz elleni káros hatásoknál",
      "Erős dohányosoknál",
      "Kemo- és sugárterápiák után",
      "Prosztata problémáknál",
    ],
    ingredientDetails: `Tőzegáfonya — Húgyúti probléma, vesebetegek, immunerősítő, szív- és érrendszer, látás, magas vérnyomás, cukorbetegek, bőrbetegség, memória.

Fekete bodza — Vértisztító, izzadásgátló, immunerősítő, reuma.

Szőlőmag — Méregtelenít, csökkenti a vérnyomást és a koleszterinszintet, gyulladások, aranyeres panaszok, fogyókúra.

Sütőtök — Gyulladás, megfázás, allergia és asztma, bőrprobléma (pattanás), máj, szív és koszorúér, prosztata.

Meggy — Vírusok, gyulladáscsökkentő, idegrendszer, alvászavar, emésztés, máj- és veseműködés.

Csipkebogyó — C-vitamin, immunerősítő, influenza, meghűlés, vese- és hólyagbántalmak, bélhurut és hörghurut.

Fekete berkenye (arónia) — Alzheimer-kór, magas vérnyomás, diabétesz (vércukorszint, hajszálerek), rákos daganatok.

Fekete ribizli — Daganat, köszvény, ízületi gyulladás, méregtelenítő, vízhajtó, egészséges bélflóra, hólyag, vese, prosztata.`,
    consumption:
      "Az első 2–3 hónapban emelt szintű adagolását ajánlom — a meglévő egészségi állapotot nem megőrizni, hanem emelni szeretnénk. Egy üveg kb. 1 havi adagnyi gyümölcskoncentrátumot tartalmaz, adagolása a csomagolásban levő kanállal. Ajánlott étkezés előtt 10 perccel, reggel és délben.",
    faq: `Kiskereskedelmi áron darabra rendelhető ezen az oldalon. Gyártói kartonos vásárlásnál (4 db) az 1# karton ára 54 000 Ft — a gyártótól vásárolva kedvezményes darabár érhető el.

A helyes étrend minden korosztály számára fontos — különösen azoknak, akik korábban nem táplálkoztak megfelelően. Főként számukra ajánljuk a Flavon Protectet, mely összetevőinek köszönhetően segít változatosabbá tenni táplálkozásukat.

A fiatal középkorúak és az idősebbek szervezete már sok megpróbáltatáson ment keresztül. Fontos figyelni a jelzésekre, és tenni az egészséges, káros hatásoktól védett életért — ennek hatékony része lehet a Flavon Protect.`,
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
    name: "FLAVON Green+ NEW zöldség koncentrátum",
    description:
      "A tömény zöldség, az egészséges fogyás alapja! De ki tud naponta 1,5–2 kg-ot megenni? Annyi baj van vele: megvenni, megpucolni, sütni, főzni, nyersen… Macerás. A Green+ zöldség-koncentrátum az igazi kalóriadeficit támogatója — az üvegben ellenőrzött minőségben és mennyiségben tömény zöldség található, tudományosan igazolt vizsgálatok alapján összekeverve, olyan arányban, ahogyan számunkra a leghasznosabb. Feltölt, így nem leszel éhes, de az energiaszinted megmarad. Ez nem étvágycsökkentő, hanem sejt feltöltő élelmiszer, melynek egy adagja csak 16 kcal!",
    benefits: ["Green+", "Zöldség koncentrátum", "16 kcal/adag", "Kalóriadeficit"],
    retailPrice: 21500,
    currency: "Ft",
    unit: "/üveg",
    cartonUnits: 3,
    cartonNote: "1 karton = 3 db (nem 4)",
    cartonPrice: 54000,
    image: "/products/flavon_green_plus.jpg",
    imageAlt: "FLAVON Green+ NEW zöldség koncentrátum",
    accentColor: "from-emerald-500 to-lime-600",
    affiliateUrl: shop,
    ingredients:
      "Tömény zöldségkoncentrátum — ellenőrzött minőségű és mennyiségű zöldségek tudományosan igazolt arányban.",
    consumption:
      "A csomagoláson feltüntetett adagolás szerint. Egy adag mindössze 16 kcal — feltölt, miközben támogatja a kalóriadeficitet.",
    faq: "Ez a darabár. A Green+ karton 3 üveget tartalmaz (nem 4-et, mint egyes más termékeknél). Gyártói 1# kartonár: 54 000 Ft.",
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
