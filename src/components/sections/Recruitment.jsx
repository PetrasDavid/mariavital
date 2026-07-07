import { motion } from "framer-motion";
import { Users, GraduationCap, HeartHandshake, TrendingUp } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../ui/ContactForm";

const benefits = [
  {
    icon: Users,
    title: "Mentori támogatás",
    description:
      "Személyes útmutatás kezdőktől a haladókig — soha nem maradsz egyedül.",
  },
  {
    icon: GraduationCap,
    title: "Professzionális képzések",
    description:
      "Rendszeres online és offline tréningek az értékesítés és termékismeret terén.",
  },
  {
    icon: HeartHandshake,
    title: "Támogató közösség",
    description:
      "Egy motiváló csapat, ahol mindenki segíti egymást a siker felé.",
  },
  {
    icon: TrendingUp,
    title: "Növekedési lehetőség",
    description:
      "Építsd fel saját üzletedet rugalmas időbeosztással, otthonról is.",
  },
];

export default function Recruitment() {
  const { distributor } = siteConfig;

  return (
    <section id="csatlakozz" className="py-20 md:py-28 bg-gradient-to-br from-brand-800 to-brand-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Üzleti lehetőség"
          title="Csatlakozz a csapatomhoz"
          subtitle={`A ${distributor.teamName} nem csak egy MLM csapat — ez egy család, ahol a siker mindenki sikere.`}
          light
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-brand-100 text-lg leading-relaxed">
              Ha szeretnél egészséges életmódot élni, segíteni másoknak, és
              közben extra jövedelmet teremteni — akkor a Platinum Team neked
              való. {distributor.name} személyesen fogja vezetni az első lépéseidet.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <Icon className="h-7 w-7 text-brand-300 mb-3" />
                  <h3 className="font-bold text-white mb-1.5">{title}</h3>
                  <p className="text-sm text-brand-100 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Jelentkezés a Platinum Teambe
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Töltsd ki az űrlapot, és 24 órán belül felvesszük veled a kapcsolatot.
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
