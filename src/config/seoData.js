/** Per-route SEO — természetes magyar szövegek, kulcsszavakkal (Flavon, fogyás, egészség, életmód, Miskolci Mária) */

export const pageSeo = {
  home: {
    title: "Flavon termékek, fogyás és életmód | Miskolci Mária",
    description:
      "marcsivital.hu — Miskolci Mária életmód tanácsadó. Flavon koncentrátumok, természetes fogyás, egészség és energia. Személyes ajánlás Miskolcról.",
    keywords:
      "Flavon, fogyás, egészség, életmód, életmód tanácsadó, Miskolci Mária, Miskolci Marcsi, marcsivital",
    path: "/",
    image: "/marcsivital_logo.jpg",
  },
  about: {
    title: "Miskolci Mária — életmód tanácsadó és Flavon",
    description:
      "Ismerd meg Miskolci Máriát (Marcsi): életmódváltás, Flavon, tartós fogyás és egészség. Több mint 2 év stabil eredmény a marcsivital közösségben.",
    keywords: "Miskolci Mária, Miskolci Marcsi, életmód tanácsadó, Flavon, fogyás, egészség",
    path: "/rolam",
    image: "/profilkep.jpg",
  },
  products: {
    title: "Flavon termékek: Green, Protect, Max, Peak",
    description:
      "Flavon Green, Protect, Max, Peak Boost és további termékek — egészség, fogyás és életmód támogatása. Darabár kosárba, gyártói karton a Flavon webshopban.",
    keywords:
      "Flavon termékek, Flavon Green, Flavon Protect, Flavon Max, Peak Boost, fogyás, egészség",
    path: "/termekek",
  },
  packages: {
    title: "Flavon csomagok fogyáshoz és vitalitáshoz",
    description:
      "Turbó fogyás, Bélrendszer, Vitality Pack és ízület támogató Flavon csomagok. Egészség és életmód — Miskolci Mária ajánlásával.",
    keywords: "Flavon csomag, Turbó fogyás, Vitality Pack, fogyás, egészség, életmód",
    path: "/csomagok",
    image: "/products/vitality_pack.jpg",
  },
  stories: {
    title: "Fogyás sikertörténetek és Flavon tapasztalatok",
    description:
      "Valódi fogyástörténetek, videók és vásárlói vélemények. Flavon, egészség és életmódváltás — a marcsivital / Miskolci Mária közösségéből.",
    keywords: "fogyás, sikertörténet, Flavon tapasztalat, életmódváltás, egészség",
    path: "/sikertortenetek",
  },
  platinum: {
    title: "Platinum Team — Flavon üzleti lehetőség",
    description:
      "Csatlakozz Miskolci Mária Platinum Teamjéhez: Flavon mentorálás, képzések, közösség. Egészség és életmód mellett üzleti növekedés.",
    keywords: "Platinum Team, Flavon, Miskolci Mária, életmód, egészség, csatlakozás",
    path: "/platinum-team",
    image: "/csapatkep.jpg",
  },
  contact: {
    title: "Kapcsolat — Miskolci Mária életmód tanácsadó",
    description:
      "Írj Miskolci Máriának: Flavon termékek, fogyás, egészség, életmód tanácsadás. Telefon, e-mail és Messenger — marcsivital.hu.",
    keywords: "Miskolci Mária, kapcsolat, Flavon, életmód tanácsadó, egészség, Miskolc",
    path: "/kapcsolat",
  },
  cart: {
    title: "Kosár — Flavon rendelésigény",
    description: "Kosár a marcsivital oldalon. Flavon termékek rendelésigénye e-mailben.",
    path: "/kosar",
    noIndex: true,
  },
  checkout: {
    title: "Pénztár — rendelésigény leadása",
    description: "Add meg a szállítási adatokat — Miskolci Mária egyezteti a Flavon rendelést.",
    path: "/penztar",
    noIndex: true,
  },
  orderSuccess: {
    title: "Rendelésigény elküldve",
    description: "Köszönjük — hamarosan felvesszük veled a kapcsolatot a Flavon rendelésről.",
    path: "/rendeles-sikeres",
    noIndex: true,
  },
  privacy: {
    title: "Adatvédelem — marcsivital / Miskolci Mária",
    description: "Adatvédelmi tájékoztató a marcsivital.hu oldalhoz — Miskolci Mária.",
    path: "/adatvedelem",
  },
  impressum: {
    title: "Impresszum — Miskolci Mária",
    description: "Impresszum: Miskolci Mária életmód tanácsadó, Flavon distributor — marcsivital.hu.",
    path: "/impresszum",
  },
  terms: {
    title: "ÁSZF — marcsivital Flavon rendelés",
    description:
      "Általános szerződési feltételek: Flavon tájékoztatás, kosár és rendelésigény a marcsivital oldalon.",
    path: "/aszf",
  },
  login: {
    title: "Belépés",
    description: "Tag belépés — hamarosan.",
    path: "/login",
    noIndex: true,
  },
};

/** SEO helper for category pages */
export function categorySeo(category) {
  if (!category) {
    return {
      title: "Kategória nem található",
      description: "Ez a Flavon kategória nem létezik.",
      path: "/kategoria",
      noIndex: true,
    };
  }
  return {
    title: `${category.title} — Flavon termékek | Miskolci Mária`,
    description: `${category.description} Flavon ajánlások egészséghez, fogyáshoz és életmódhoz — marcsivital, Miskolci Mária.`,
    keywords: `${category.title}, Flavon, egészség, fogyás, életmód, Miskolci Mária`,
    path: `/kategoria/${category.id}`,
  };
}
