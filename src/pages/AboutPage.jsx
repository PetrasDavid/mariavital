import { motion } from "framer-motion";
import { Heart, TrendingDown, Music, Sparkles } from "lucide-react";
import { siteConfig } from "../config/config";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

const milestones = [
  { icon: Heart, value: "2+ év", label: "Egészséges életmód fenntartva" },
  { icon: TrendingDown, value: "−15 kg", label: "Súlycsökkenés természetes módon" },
  { icon: Music, value: "Ringa Dance", label: "Mozgás a mindennapokban" },
  { icon: Sparkles, value: "Platinum", label: "Team vezető" },
];

export default function AboutPage() {
  const { distributor } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Rólam"
        title={`Szia, ${distributor.name} vagyok!`}
        subtitle="Flavon distributor, Ringa Dance oktató és a Platinum Team alapítója — egészség, mozgás és közösség a mindennapjaimban."
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
              <div className="aspect-[4/5] max-w-xs sm:max-w-sm mx-auto lg:max-w-none w-full rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-brand-100 to-rose-100">
                <img
                  src={siteConfig.distributor.profileImage}
                  alt={siteConfig.distributor.profileImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              <h2 className="text-2xl font-bold text-gray-900">Hogyan találtam rá a Flavonra?</h2>
              <p>
                Éveken át küzdöttem a súlyommal, a fáradtsággal és a motiváció hiányával.
                Amikor először kipróbáltam a Flavon termékeket, lassan, de tartósan
                megváltozott az életem — nem egy gyors diéta volt, hanem valódi életmódváltás.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Az én történetem</h2>
              <p>
                Több mint <strong className="text-gray-900">2 éve</strong> fenntartom az
                egészséges testsúlyomat. A prémium táplálkozás mellett felfedeztem a{" "}
                <strong className="text-brand-700">Ringa Dance</strong>-t is — egy vidám,
                közösségi mozgásformát, amely segített abban, hogy ne csak lefogyjak, hanem
                örömöt is találjak a mozgásban.
              </p>
              <p>
                Ma már nem csak termékeket ajánlok, hanem mentorálást, képzéseket és egy
                támogató közösséget kínálok a {distributor.teamName} keretében.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Ringa Dance az életemben</h2>
              <p>
                A Ringa Dance nem csupán torna — ez egy életérzés. A zene, a ritmus és a
                közösség ereje segít abban, hogy kitartsunk, és ne egyedül kelljen küzdenünk
                az egészségünkért. Oktatóként és gyakorlóként is hiszek benne.
              </p>

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
                <Button to="/ringa-dance" variant="secondary">
                  Ringa Dance
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
