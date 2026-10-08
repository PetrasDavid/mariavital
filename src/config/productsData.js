import { siteConfig } from "./config";

const shop = siteConfig.links.affiliateUrl;

/**
 * Product catalog — retail prices from Marcsi (2026).
 * Manufacturer carton (1#) price: 54 000 Ft — shown on purchase CTAs.
 * Set `image` to a public path when product photos are available.
 */
export const products = [
  {
    id: "flavon-green-plus",
    name: "Green+New",
    description:
      "Prémium zöldség koncentrátum — a Green család új, prémium kategóriás változata. Polifenolokat tartalmazó étrend-kiegészítő: tömény zöldségek és gyümölcsök ellenőrzött minőségben. Feltölt, támogatja a kalóriadeficitet, egy adag mindössze ~15 kcal.",
    benefits: ["Green+New", "Prémium", "Zöldség koncentrátum", "1 karton = 3 üveg"],
    retailPrice: 21500,
    currency: "Ft",
    unit: "/üveg",
    premium: true,
    cartonUnits: 3,
    cartonNote: "1 karton = 3 üveg",
    cartonPrice: 54000,
    image: "/products/flavon_green_plus.jpg",
    imageAlt: "FLAVON Green+New prémium zöldség koncentrátum",
    accentColor: "from-emerald-500 to-lime-600",
    affiliateUrl: shop,
    ingredients:
      "Többek között narancs, homoktövis, brokkoli, spenót, kurkuma — polifenolokat tartalmazó prémium zöldség koncentrátum.",
    recommendedFor: [
      "Akik prémium kategóriás zöldségkoncentrátumot keresnek",
      "Fogyó- és tisztítókúrában",
      "Immunrendszer és antioxidáns támogatás",
      "Kalóriadeficit mellett is teljes értékű feltöltés",
    ],
    consumption:
      "A csomagoláson feltüntetett adagolás szerint (1 adag = 6 g / 1 adagolókanál). Egy adag kb. 15 kcal — feltölt, miközben támogatja a kalóriadeficitet. Egy üveg kb. 40 adag.",
    faq: "Prémium kategóriás termék. Kiskereskedelmi áron darabra rendelhető. Gyártói karton: 1 karton = 3 üveg, ára 54 000 Ft.",
  },
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
    image: "/products/flavon_protect_gyumolcs.jpg",
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
      "Ajánljuk minden egészségtudatos felnőttnek és azoknak, akik nem fogyasztanak elegendő mennyiségű gyümölcsöt és zöldséget. Immunrendszer, vitamin- és ásványianyag-háztartás, vitalitás támogatása.",
    benefits: ["Max", "Immun", "Vitalitás", "Antioxidáns"],
    retailPrice: 16200,
    currency: "Ft",
    unit: "/üveg",
    image: "/products/flavon_max.jpg",
    imageAlt: "Flavon Max",
    accentColor: "from-teal-400 to-cyan-700",
    affiliateUrl: shop,
    ingredients:
      "Fekete áfonya, homoktövis, fekete bodza, kékszőlő, fekete ribizli, cékla, ginzeng (Panax ginseng). Lékoncentrátumok (feketeribizli, fekete áfonya, fekete bodzabogyó, kékszőlő, cékla, homoktövis), fruktóz, aszkorbinsav (C-vitamin), D,L-alfa-tokoferol (E-vitamin), homoktövis gyümölcshús-, mag- és héj őrlemény, Panax ginseng gyökér őrlemény, sűrítőanyag (almapektin).",
    recommendedFor: [
      "Egészséges felnőtteknek egy jó immunrendszer fenntartásában",
      "Gyerekeknek 14 éves kor vagy 50 kg testsúly felett",
      "A megfelelő ásványi anyag-, vitamin- és aminosav-háztartás szinten tartásában / megőrzésében",
      "Vashiány, vérszegénység",
      "Hiánybetegségek elkerülésében",
      "Étvágytalanság és legyengült szervezet esetén",
      "Vérszegénység, fáradtság, levertség esetén",
      "Krónikus tüdőproblémák esetén (COPD)",
      "Ízületi problémák, köszvény megelőzésében / a kialakult köszvény tüneteinek csillapításában",
      "Alvászavarok, ismétlődő fejfájás esetén, migrén",
      "Nehézfémeket, elektroszmogot segít kivezetni a szervezetből",
    ],
    ingredientDetails: `Fekete áfonya — Antioxidáns hatás, látás és érrendszer támogatása.

Homoktövis — Magas C- és E-vitamin, immunrendszer, bőr.

Fekete bodza — Immunerősítés, antioxidáns polifenolok.

Kékszőlő — Flavonoidok, sejtvédelem oxidatív stressz ellen.

Fekete ribizli — C-vitamin, immun- és érrendszer támogatás.

Cékla — Ásványi anyagok, keringés, természetes nitrátok.

Ginzeng (Panax ginseng) — Testi és szellemi állóképesség, adaptogén hatás. A ginseng miatt 6 hét után szünet javasolt; magas vérnyomás, terhesség és szoptatás esetén a fogyasztás nem ajánlott.`,
    consumption:
      "Ajánlott fogyasztási mennyiség: naponta egy kávéskanál (kb. 6 g – 4,5 ml) étkezés után.",
    faq: "Kiskereskedelmi áron darabra rendelhető ezen az oldalon. Gyártói kartonos vásárlásnál az 1# karton ára 54 000 Ft.",
  },
  {
    id: "collagen",
    name: "Kollagén by Flavon",
    description:
      "100% kollagén — testünk ragasztója! Hidrolizált marha kollagén, mely minden területen kifejti a hatását: bőr, csontok, inak, szalagok, köröm és haj szerkezet, porc és szem, máj, tüdő, artériák, vese, méhlepény és a belső szervek.",
    benefits: ["100% kollagén", "Bőr & ízületek", "Regeneráció"],
    retailPrice: 16200,
    currency: "Ft",
    unit: "/doboz",
    image: "/products/flavon_kollagen.jpg",
    imageAlt: "Collagen by Flavon",
    accentColor: "from-amber-300 to-stone-500",
    affiliateUrl: shop,
    ingredients:
      "Hidrolizált marha kollagén — 100% kollagén.",
    recommendedFor: [
      "Fogyókúrában",
      "Szétnyílt hasizom esetén a bőr regenerálása miatt",
      "Kötényhas formálásánál a bőr regenerálása miatt",
      "Ízületek további sejtkárosodásának megakadályozása miatt",
      "Kismamáknak szülés után",
      "Narancsbőr eltüntetésének beindítása",
      "Bőrfeszesítésnél",
      "Izomlazításnál",
    ],
    ingredientDetails: `Hidrolizált marha kollagén — minden területen kifejti a hatását:

Bőr, csontok, inak, szalagok
Köröm, haj szerkezet
Porc és szem szerkezet
Máj, tüdő, artériák
Vese, méhlepény és a belső szervek`,
    faq: "Kiskereskedelmi áron darabra rendelhető ezen az oldalon.",
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
    image: "/products/flavon_glukozamin.jpg",
    imageAlt: "Glucosamine & Chondroitin by Flavon",
    accentColor: "from-sky-300 to-blue-500",
    affiliateUrl: shop,
  },
  {
    id: "peak-boost",
    name: "Peak Boost",
    description:
      "BOOST gyümölcs-koncentrátum — a Peak koncepció lendülete: értékes gyümölcsök és a guarana elnyújtott stimuláló hatása, amely egyszerre élénkít és erős antioxidáns támogatást nyújt. Mentálisan és fizikailag is a csúcson! Napi kiszerelés — elfér bármely zsebben. Tartósítószert és egyéb adalékanyagot (víz, sűrítő, állagjavító, színezék, ízfokozó) nem tartalmaz!",
    benefits: ["Peak Boost", "Guarana", "Energia", "98% gyümölcs"],
    retailPrice: 32400,
    currency: "Ft",
    unit: "/doboz",
    image: "/products/peak_boost.jpg",
    imageAlt: "Flavon Peak Boost",
    accentColor: "from-rose-500 to-red-600",
    affiliateUrl: shop,
    ingredients:
      "Gyümölcslé-koncentrátumok (ananász, alma, arónia, kaktuszfüge), noni gyümölcspulver (Morinda citrifolia), guarana (Paullinia cupana) por, C-vitamin (L-aszkorbinsav), koffein. Gyümölcstartalom: 98%.",
    recommendedFor: [
      "Hatékonyabb fogyáshoz",
      "Gyakran depressziós vagy kedvetlen állapotnál",
      "Intenzívebb zsírégetéshez",
      "Gyorsabb anyagcseréhez",
      "Több energiához",
      "Sportteljesítmény fokozásához",
      "Emésztőrendszeri problémáknál (pl. puffadás)",
      "Klimax időszakában",
      "Rendellenes menstruációnál",
      "Mikroelem-pótláshoz (A-, C-, E-, K-, H-vitamin, teljes B-vitamin család, magnézium, vas, szelén, kálium, nátrium stb.)",
    ],
    consumption:
      "Napi adag: 1–2 tasak délután 14 óráig, vagy sport előtt 10–15 perccel.",
    faq: "Tartósítószert és egyéb adalékanyagot (víz, sűrítő, állagjavító, színezék, ízfokozó) nem tartalmaz. Kiskereskedelmi áron darabra rendelhető ezen az oldalon.",
  },
  {
    id: "peak-fruit",
    name: "Peak Fruit",
    description:
      "Flavon Peak Fruit gyümölcs-olaj koncentrátum Omega-3, -6 és -9 zsírsavakkal — széles körű támogatás a mindennapi vitalitáshoz.",
    benefits: ["Omega 3-6-9", "Peak Fruit", "Olaj koncentrátum"],
    retailPrice: 32400,
    currency: "Ft",
    unit: "/doboz",
    image: "/products/flavon_peak_fruit.jpg",
    imageAlt: "Flavon Peak Fruit",
    accentColor: "from-blue-400 to-indigo-600",
    affiliateUrl: shop,
    recommendedFor: [
      "Felső légúti problémáknál",
      "Kismamáknak terhesség alatt, szoptatáskor",
      "A saját kollagéntermelés felgyorsításához",
      "Immunrendszeri betegeknek",
      "Autoimmun betegeknek",
      "Daganatos betegeknek",
      "Szív-érrendszeri betegeknek (magas vérnyomás)",
      "Vesebetegeknek",
      "Mozgásszervi betegeknek",
      "Bélbetegség esetén",
      "Migrénnél",
      "Bőrproblémák, sömör, sérülések esetén",
      "Bőrszárazságnál",
    ],
    faq: "Kiskereskedelmi áron darabra rendelhető ezen az oldalon. Gyártói kartonos vásárlásnál az 1# karton ára 54 000 Ft.",
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
    image: "/products/flavon_future.jpg",
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
    image: "/products/flavon_max_plus.png",
    imageAlt: "Flavon Max+",
    accentColor: "from-cyan-500 to-teal-800",
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
    id: "vitality-pack",
    name: "Vitality Pack",
    description:
      "Flavon Green + Protect + Peak Fruit — gyártói karton, 1# ár: 54 000 Ft.",
    benefits: ["Green", "Protect", "Peak Fruit", "1# karton"],
    retailPrice: 54000,
    currency: "Ft",
    cartonPrice: 54000,
    image: "/products/vitality_pack.jpg",
    imageAlt: "Vitality Pack termékcsomag",
    accentColor: "from-blue-400 to-indigo-600",
    affiliateUrl: shop,
  },
  {
    id: "izulet-csomag",
    name: "Ízület támogató csomag",
    description:
      "Glucosamine & Chondroitin + Collagen — mozgás és regeneráció.",
    benefits: ["Glükózamin", "Kollagén", "Ízületek"],
    retailPrice: 32400,
    currency: "Ft",
    image: null,
    imageAlt: "Ízület támogató csomag",
    accentColor: "from-sky-400 to-blue-600",
    affiliateUrl: shop,
  },
  {
    id: "complex-pack",
    name: "Complex Pack – Vegán fehérje-szénhidrát",
    description:
      "Vegán fehérje + komplex szénhidrát mátrix (maltodextrin és izomaltulóz), inulinnal, vitaminokkal és ásványi anyagokkal. Növényi eredetű proteinkeverék — vegetáriánusok és vegánok is fogyaszthatják. Glutén- és szójamentes, alacsony zsírtartalom. Egy adag ~14 g fehérje; csokoládé-banán íz.",
    benefits: ["Vegán fehérje", "Carb mátrix", "Inulin", "Csipkebogyó"],
    retailPrice: 16200,
    priceTo: 48700,
    hasOptions: true,
    currency: "Ft",
    image: "/products/flavon_complex_pack.jpg",
    imageAlt: "Complex Pack by Flavon",
    accentColor: "from-gray-700 to-stone-900",
    affiliateUrl: shop,
    ingredients:
      "Borsófehérje, rizsfehérje; komplex szénhidrát mátrix (maltodextrin, izomaltulóz); prebiotikus növényi rostok, inulin; magas csipkebogyó (C-vitamin) tartalom; D- és E-vitamin; B-vitamin család (B1, B2, B3, B5, B6, B9); ásványi anyagok (Zn, Ca, Cu); esszenciális aminosavak (L-arginin, L-lizin, L-metionin, L-karnitin).",
    recommendedFor: [
      "Vegetáriánusoknak és vegánoknak",
      "Akik növényi fehérjét és komplex szénhidrátot keresnek együtt",
      "Magas növényi rostbevitelhez",
      "Glutén- és szójamentes étrendet követőknek",
    ],
    ingredientDetails: `Borsófehérje, rizsfehérje — növényi eredetű proteinkeverék; vegetáriánusok és vegánok is fogyaszthatják. Az állati és növényi eredetű proteinek között lényeges egészségi különbségek vannak.

Komplex szénhidrát mátrix — maltodextrin és izomaltulóz. Az izomaltulóz lassan felszívódó szénhidrát.

Magas növényi rost — prebiotikus hatású növényi rostokat is tartalmaz; inulin.

Csipkebogyó — magas C-vitamin tartalom (adagonként 2000 mg csipkebogyó gyümölcspulver a csomagolás szerint).

Vitaminok — D- és E-vitamin; a B-vitamincsalád több tagja (B1, B2, B3, B5, B6, B9).

Ásványi anyagok — cink (Zn), kalcium (Ca), réz (Cu).

Esszenciális aminosavak — L-arginin, L-lizin, L-metionin, L-karnitin.

Glutén- és szójamentes, zsírtartalma alacsony. Íz: csokoládé-banán.`,
    faq: "Több kiszerelés választható. Kiskereskedelmi áron rendelhető ezen az oldalon. Laktóz-, glutén- és szójamentes.",
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
