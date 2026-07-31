import { motion } from "framer-motion";
import { Heart, TrendingDown, Users, Sparkles, Check } from "lucide-react";
import { siteConfig, whyChooseMe, storyQuote } from "../config/config";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

const milestones = [
  { icon: Heart, value: "2+ év", label: "Egészséges életmód fenntartva" },
  { icon: TrendingDown, value: "−11 kg", label: "Súlycsökkenés természetes módon" },
  { icon: Users, value: "Közösség", label: "Támogató csapat minden nap" },
  { icon: Sparkles, value: "Elit Team", label: "Vezető" },
];

export default function AboutPage() {
  const { distributor, brand } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="💗 Az én történetem"
        title="Bemutatkozás"
        subtitle={`${distributor.fullName} — Flavon distributor és Elit Team vezető.`}
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <div className="space-y-4">
                <div className="aspect-[4/5] max-w-xs sm:max-w-sm mx-auto lg:max-w-none w-full rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={distributor.profileImage}
                    alt={distributor.profileImageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
                  <img
                    src={distributor.beforeAfterImage}
                    alt={distributor.beforeAfterImageAlt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              <p className="text-2xl font-bold text-gray-900">
                Szia, {distributor.fullName} vagyok!
              </p>
              <p>
                Több éve a Flavon termékek elkötelezett ajánlója vagyok. A saját
                életemben is megtapasztaltam, milyen sokat számít a tudatos életmód
                és a minőségi táplálkozás.
              </p>
              <p>
                A legnagyobb büszkeségem, hogy az elért fogyásomat több mint két
                éve sikerült megtartanom (
                <strong className="text-brand-700">−11 kg</strong>), miközben
                energikusabbnak és kiegyensúlyozottabbnak érzem magam —{" "}
                <strong className="text-gray-900">Hashimoto</strong> és a{" "}
                <strong className="text-gray-900">változókor</strong> kihívásai
                mellett is.
              </p>
              <p>
                Hiszem, hogy minden ember megérdemli, hogy jól érezze magát a
                testében, és ehhez szeretnék segítséget nyújtani.
              </p>

              <blockquote className="border-l-4 border-brand-500 pl-5 py-2 italic text-gray-800 bg-brand-50/50 rounded-r-2xl">
                „{storyQuote}”
              </blockquote>

              <p className="font-medium text-brand-800">{brand.promise}</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Miért engem válassz?</h2>
              <ul className="space-y-2">
                {whyChooseMe.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {milestones.map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="p-4 rounded-2xl bg-brand-50 border border-brand-100 text-center"
                  >
                    <Icon className="h-6 w-6 text-brand-600 mx-auto mb-2" />
                    <p className="text-xl font-bold text-gray-900">{value}</p>
                    <p className="text-xs text-gray-600 mt-1">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button to="/termekek" variant="secondary">
                  Termékek
                </Button>
                <Button to="/platinum-team" variant="outline">
                  Csatlakozz a csapathoz
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
