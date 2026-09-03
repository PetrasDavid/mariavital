export const testimonials = [
  {
    id: 1,
    name: "Anna T.",
    role: "Platinum Team tag",
    quote:
      "A Flavon Green után érezhetően több energiám van, és 6 hónap alatt 8 kg-ot adtam le anélkül, hogy koplaltam volna. Marcsi támogatása végig mellettem volt.",
    highlight: "−8 kg · 6 hónap",
    type: "quote",
  },
  {
    id: 2,
    name: "Péter K.",
    role: "Üzleti partner",
    quote:
      "Nem csak termékeket kaptam, hanem egy valódi közösséget és rendszert. A Platinum Team képzései profi szintűek.",
    highlight: "2 év a csapatban",
    type: "quote",
  },
  {
    id: 3,
    name: "Eszter M.",
    role: "Vásárló",
    quote:
      "A Protect termék után ritkábban betegeskedem, és az egész család használja a Flavon termékeket. Megbízható minőség.",
    highlight: "Egész család",
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
