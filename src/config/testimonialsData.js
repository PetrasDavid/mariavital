export const testimonials = [
  {
    id: "regina",
    name: "Regina",
    role: "",
    quote:
      "A termékek szuperek tényleg 😊 A Green nagyon jót tesz az emésztésemnek úgy érzem, kevésbé puffadok. A Komplexre nagyon kíváncsi voltam, nehezen hittem el, hogy tényleg ki lehet vele váltani egy egész étkezést, de basszus tényleg így van 😊 Még ebédnél is működött, kipróbáltam. A Boost után valóban éreztem, hogy jobban felpörögtem, de én csak 1-2 óráig éreztem a hatását, de ez is jól jött akkor — szóval szuper minden 😊",
    highlight: "Green · Komplex · Boost",
    type: "quote",
  },
  {
    id: "klari",
    name: "Klári",
    role: "",
    quote:
      "Az én tapasztalatom az, hogy a Green–Protect–Veggie együttes fogyasztásával tünetmentes lett a laktózérzékenységem. Most már ehetek bárhol, bármikor, bármit. 😀 Kitartást mindenkinek, hisz mindenhez idő kell.",
    highlight: "Green · Protect · Veggie",
    type: "quote",
  },
  {
    id: "helena",
    name: "Heléna",
    role: "",
    quote:
      "Én a Boostot és a Greent eszem. Neki amiben jó: a Greentől nem puffadok, laposabb a hasam, fogytam ismét 2 kg tőle — szuper, nagyon szeretem. Nem kell a sok zöldséget vennem és ennem, mert ebben minden is van, ami hasznos. A Boostot Ringa előtt eszem 10 perccel: növeli a sportteljesítményt, segít a kalóriaégetésben, és amióta eszem, a térdfájdalmam elmúlt. Szuper, nagyon szeretem — az édesség utáni sóvárgásban és a kalóriadeficit betartásában is segít. ❤️🙏❤️",
    highlight: "Green · Boost · −2 kg",
    type: "quote",
  },
  {
    id: "andrea",
    name: "Andrea",
    role: "",
    quote:
      "🌸 Tapasztalataim: Komolyan mondom, a Flavon Green és a Protect már majdnem családtag lett nálam 😄 Reggel nem kávéval indulok, hanem velük — és láss csodát: se puffadás, se reflux, mintha szabadságra mentek volna! A „banyakor” meg próbálkozik ugyan, de ezek ketten úgy leszerelik a kellemetlen tüneteket, mint egy profi kommandós csapat.",
    highlight: "Green · Protect",
    type: "quote",
  },
];

/** Fogyástörténetek — képes beszámolók, engedéllyel megosztva */
export const weightLossStories = [
  {
    id: "fogyas-1",
    highlight: "−23 kg",
    image: "/stories/fogyastortenet_1.jpg",
    imageAlt: "Fogyástörténet – 23 kg átalakulás",
    paragraphs: [
      "Sokan kérdeztétek, hogyan sikerült lefogynom. A változás nem egyik napról a másikra történt, de kitartással, a Flavon termékek és a Ringadance rendszeres mozgásának segítségével összesen 23 kg-tól szabadultam meg.",
      "Sokkal energikusabbnak érzem magam, könnyebben mozgok, és végre jól érzem magam a bőrömben.",
      "Ha én meg tudtam csinálni, akkor te is képes vagy rá! A legfontosabb a döntés, hogy elkezded, és kitartasz a célod mellett. Büszke vagyok az eddig megtett útra, és folytatom tovább!",
    ],
  },
  {
    id: "fogyas-2",
    highlight: "−35,5 kg",
    image: "/stories/fogyastortenet_2.jpg",
    imageAlt: "Fogyástörténet – 35,5 kg átalakulás",
    paragraphs: [
      "Sziasztok, drága Hölgyek! Szeretnék egy kicsit mesélni nektek az én utamról.",
      "Azért döntöttem úgy, hogy belevágok, mert szerettem volna változtatni az életemen. Nemcsak fogyni akartam, hanem egészségesebb, energikusabb és magabiztosabb is szerettem volna lenni.",
      "A program során eddig 35,5 kg ment le és megtanultam tudatosabban étkezni, figyelni az adagokra, számolni a kalóriákat, és a rendszeres mozgás is a mindennapjaim része lett. Mindez együtt hozza meg az eredményt.",
      "A Green Boost is része lett a napi rutinomnak, és nagyon szeretem, hogy könnyen be tudom illeszteni a mindennapokba. Számomra ez is hozzájárul ahhoz, hogy még jobban odafigyeljek magamra és az egészségemre.",
      "A legnagyobb ajándék azonban nemcsak a fogyás, hanem az, hogy újra hiszek magamban. Minden egyes leadott kilogramm, minden apró siker még több motivációt ad, hogy folytassam.",
      "Nagyon hálás vagyok ezért a közösségért is, mert jó érzés olyan emberek között lenni, akik támogatják és bátorítják egymást.",
      "Ha te is gondolkodsz a változáson, azt üzenem: soha nem késő elkezdeni. Az első lépés a legnehezebb, de minden egyes nap közelebb visz a célodhoz.",
    ],
  },
];

/** Videós sikertörténetek (YouTube) */
export const successVideos = [
  {
    id: "helena",
    title: "Heléna története",
    youtubeId: "xlACGyTi7OI",
  },
];

/** @deprecated use weightLossStories */
export const beforeAfterStories = weightLossStories.map((s) => ({
  id: s.id,
  label: s.highlight,
  description: s.paragraphs[0],
  image: s.image,
  beforePlaceholder: "Előtte",
  afterPlaceholder: "Utána",
}));
