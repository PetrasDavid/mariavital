/** Per-route SEO — megosztási előnézet: éhezésmentes fogyás, egészséges életmód (nincs Flavon a címben/leírásban) */

export const pageSeo = {
  home: {
    title: "Éhezésmentes fogyás és egészséges életmód | Miskolci Mária",
    description:
      "marcsivital.eu — Miskolci Mária életmód tanácsadó. Éhezésmentes fogyás, egészséges életmód, energia. Személyes támogatás Miskolcról.",
    keywords:
      "éhezésmentes fogyás, egészséges életmód, fogyás, egészség, életmód tanácsadó, Miskolci Mária, Miskolci Marcsi, marcsivital",
    path: "/",
    image: "/marcsivital_logo.jpg",
  },
  about: {
    title: "Miskolci Mária — életmód tanácsadó",
    description:
      "Ismerd meg Miskolci Máriát (Marcsi): életmódváltás, tartós fogyás és egészség. Több mint 2 év stabil eredmény a marcsivital közösségben.",
    keywords:
      "Miskolci Mária, Miskolci Marcsi, életmód tanácsadó, éhezésmentes fogyás, egészség",
    path: "/rolam",
    image: "/profilkep.jpg",
  },
  products: {
    title: "Termékek — Green, Protect, Max, Peak",
    description:
      "Green, Protect, Max, Peak Boost és további termékek — egészség, fogyás és életmód támogatása. Darabár kosárba, gyártói karton a hivatalos webshopban.",
    keywords:
      "Green, Protect, Max, Peak Boost, éhezésmentes fogyás, egészség, életmód",
    path: "/termekek",
  },
  packages: {
    title: "Csomagok fogyáshoz és vitalitáshoz",
    description:
      "Turbó fogyás, Bélrendszer, Vitality Pack és ízület támogató csomagok. Egészség és életmód — Miskolci Mária ajánlásával.",
    keywords: "Turbó fogyás, Vitality Pack, fogyás, egészség, életmód, csomag",
    path: "/csomagok",
    image: "/products/vitality_pack.jpg",
  },
  stories: {
    title: "Fogyás sikertörténetek és tapasztalatok",
    description:
      "Valódi fogyástörténetek, videók és vásárlói vélemények. Egészség és életmódváltás — a marcsivital / Miskolci Mária közösségéből.",
    keywords: "fogyás, sikertörténet, életmódváltás, egészség, éhezésmentes fogyás",
    path: "/sikertortenetek",
  },
  platinum: {
    title: "Platinum Team — üzleti lehetőség",
    description:
      "Csatlakozz Miskolci Mária Platinum Teamjéhez: mentorálás, képzések, közösség. Egészség és életmód mellett üzleti növekedés.",
    keywords: "Platinum Team, Miskolci Mária, életmód, egészség, csatlakozás",
    path: "/platinum-team",
    image: "/csapatkep.jpg",
  },
  contact: {
    title: "Kapcsolat — Miskolci Mária életmód tanácsadó",
    description:
      "Írj Miskolci Máriának: éhezésmentes fogyás, egészség, életmód tanácsadás. Telefon, e-mail és Messenger — marcsivital.eu.",
    keywords: "Miskolci Mária, kapcsolat, életmód tanácsadó, egészség, Miskolc",
    path: "/kapcsolat",
  },
  cart: {
    title: "Kosár — rendelésigény",
    description: "Kosár a marcsivital oldalon. Termékek rendelésigénye e-mailben.",
    path: "/kosar",
    noIndex: true,
  },
  checkout: {
    title: "Pénztár — rendelésigény leadása",
    description: "Add meg a szállítási adatokat — Miskolci Mária egyezteti a rendelést.",
    path: "/penztar",
    noIndex: true,
  },
  orderSuccess: {
    title: "Rendelésigény elküldve",
    description: "Köszönjük — hamarosan felvesszük veled a kapcsolatot a rendelésről.",
    path: "/rendeles-sikeres",
    noIndex: true,
  },
  privacy: {
    title: "Adatvédelem — marcsivital / Miskolci Mária",
    description: "Adatvédelmi tájékoztató a marcsivital.eu oldalhoz — Miskolci Mária.",
    path: "/adatvedelem",
  },
  impressum: {
    title: "Impresszum — Miskolci Mária",
    description: "Impresszum: Miskolci Mária életmód tanácsadó — marcsivital.eu.",
    path: "/impresszum",
  },
  terms: {
    title: "ÁSZF — marcsivital rendelés",
    description:
      "Általános szerződési feltételek: tájékoztatás, kosár és rendelésigény a marcsivital oldalon.",
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
      description: "Ez a kategória nem létezik.",
      path: "/kategoria",
      noIndex: true,
    };
  }
  return {
    title: `${category.title} — termékek | Miskolci Mária`,
    description: `${category.description} Ajánlások egészséghez, fogyáshoz és életmódhoz — marcsivital, Miskolci Mária.`,
    keywords: `${category.title}, egészség, fogyás, életmód, Miskolci Mária, marcsivital`,
    path: `/kategoria/${category.id}`,
  };
}
