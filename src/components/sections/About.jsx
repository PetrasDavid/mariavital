import { motion } from "framer-motion";
import { Heart, TrendingDown, Sparkles } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import SectionHeading from "../ui/SectionHeading";

const milestones = [
  {
    icon: Heart,
    value: "2+ év",
    label: "Egészséges életmód fenntartva",
  },
  {
    icon: TrendingDown,
    value: "−15 kg",
    label: "Súlycsökkenés természetes módon",
  },
  {
    icon: Sparkles,
    value: "100%",
    label: "Elhivatottság a segítség iránt",
  },
];

export default function About() {
  const { distributor } = siteConfig;

  return (
    <section id="rolam" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Rólam"
          title={`Szia, ${distributor.name} vagyok!`}
          subtitle="Szenvedélyem az egészség és a segítőkész közösség — ez vezetett a Flavon világába."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-md mx-auto rounded-3xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center overflow-hidden shadow-xl">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-brand-600 text-white flex items-center justify-center text-5xl font-bold mx-auto mb-4 shadow-lg">
                  {distributor.name.charAt(0)}
                </div>
                <p className="text-brand-700 font-medium text-sm uppercase tracking-wider">
                  Profilkép helye
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:right-8 bg-accent-500 text-white px-6 py-4 rounded-2xl shadow-lg shadow-accent-500/30">
              <p className="text-2xl font-bold">2+ év</p>
              <p className="text-sm text-orange-100">Stabil eredmény</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Éveken át küzdöttem a súlyommal és a fáradtsággal. Amikor
              megismerkedtem a Flavon termékekkel, lassan, de tartósan
              megváltozott az életem — nem egy gyors diéta, hanem valódi
              életmódváltás volt.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Több mint <strong className="text-gray-900">2 éve</strong>{" "}
              fenntartom az egészséges testsúlyomat, és nap mint nap tapasztalom
              a prémium táplálkozás előnyeit. Ez az élmény motivált arra, hogy
              segítsek másoknak is — és megalapítsam a{" "}
              <strong className="text-brand-700">{distributor.teamName}</strong>
              -et.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ma már nem csak termékeket ajánlok, hanem mentorálást, képzéseket
              és egy támogató közösséget is kínálok mindenkinek, aki hasonló
              utat szeretne bejárni.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {milestones.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-brand-50 border border-brand-100"
                >
                  <Icon className="h-6 w-6 text-brand-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-gray-900">{value}</p>
                  <p className="text-xs text-gray-600 mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
