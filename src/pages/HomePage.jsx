import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Sparkles,
  Users,
  Heart,
  ArrowRight,
  BookOpen,
  Download,
  ShieldCheck,
  Star,
} from "lucide-react";
import { siteConfig, homeNavCards, ebookOffer } from "../config/config";
import { faqItems } from "../config/faqData";
import Button from "../components/ui/Button";
import FAQAccordion from "../components/ui/FAQAccordion";
import SectionHeading from "../components/ui/SectionHeading";
import ProfileAvatar from "../components/ui/ProfileAvatar";

const iconMap = {
  leaf: Leaf,
  sparkles: Sparkles,
  users: Users,
  heart: Heart,
};

export default function HomePage() {
  const { brand, distributor } = siteConfig;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-rose-50/50" />
        <div className="absolute top-32 right-0 w-[500px] h-[500px] bg-brand-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-rose-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-100 text-brand-700 text-sm font-semibold mb-6 shadow-sm">
                <Heart className="h-4 w-4 text-rose-400" fill="currentColor" />
                {brand.slogan}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-gray-900 leading-[1.12] tracking-tight mb-6">
                {brand.heroTagline}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                Üdvözöl a <strong className="text-gray-900">{brand.name}</strong> — ahol
                prémium Flavon táplálkozás, Ringa Dance mozgás és a {distributor.teamName}{" "}
                közössége találkozik. {distributor.name} személyesen kísér végig az úton.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button to="/termekek" variant="secondary" size="lg" icon={ArrowRight}>
                  Termékek felfedezése
                </Button>
                <Button to="/rolam" variant="outline" size="lg">
                  Ismerd meg Máriát
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand-600" />
                  Prémium minőség
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-brand-600" />
                  2+ év tapasztalat
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-brand-600" />
                  {distributor.teamName}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-300 to-rose-200 rounded-[2rem] rotate-6 opacity-40" />
                <div className="relative bg-gradient-to-br from-brand-500 via-emerald-600 to-teal-700 rounded-[2rem] p-10 shadow-2xl shadow-brand-600/25 flex flex-col items-center justify-center text-white text-center min-h-[380px]">
                  <ProfileAvatar size="lg" className="mb-6 w-28 h-28" ring />
                  <h2 className="text-2xl font-bold mb-1">{distributor.fullName}</h2>
                  <p className="text-brand-100 text-sm mb-6">{distributor.title}</p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-semibold">
                      Flavon
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-semibold">
                      Ringa Dance
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Fedezd fel"
            title="Merre induljunk?"
            subtitle="Válaszd ki, mi érdekel most — minden út Máriához és a közösséghez vezet."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeNavCards.map((card, index) => {
              const Icon = iconMap[card.icon];
              return (
                <motion.div
                  key={card.to}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={card.to}
                    className="group block h-full p-6 rounded-2xl border border-gray-100 bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/40 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                      Tovább
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* E-book CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-rose-50 via-white to-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-emerald-900 p-8 md:p-14 text-white shadow-2xl shadow-brand-900/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-400/10 rounded-full blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-100 text-sm font-medium mb-5">
                  <BookOpen className="h-4 w-4" />
                  Ingyenes e-book
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {ebookOffer.title}
                </h2>
                <p className="text-brand-100 text-lg leading-relaxed">{ebookOffer.subtitle}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-4">
                <Button
                  href={ebookOffer.downloadUrl}
                  variant="primary"
                  size="lg"
                  icon={Download}
                  iconPosition="left"
                  className="!bg-white !text-brand-800 hover:!bg-brand-50 !shadow-white/20"
                >
                  {ebookOffer.cta}
                </Button>
                <p className="text-sm text-brand-200">Nincs kötelezettség · Azonnali letöltés</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="GYIK"
            title="Gyakran ismételt kérdések"
            subtitle="Minden, amit a rendelésről, a termékekről és a csatlakozásról tudnod kell."
          />
          <FAQAccordion items={faqItems} />
          <p className="text-center mt-8 text-gray-600">
            További kérdésed van?{" "}
            <Link to="/kapcsolat" className="text-brand-600 font-semibold hover:underline">
              Írj nekünk!
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
