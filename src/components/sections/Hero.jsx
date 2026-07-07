import { motion } from "framer-motion";
import {
  ExternalLink,
  ShieldCheck,
  Users,
  Award,
  Star,
} from "lucide-react";
import { siteConfig } from "../../config/siteConfig";
import Button from "../ui/Button";

const trustIndicators = [
  { icon: ShieldCheck, label: "Prémium minőség" },
  { icon: Users, label: "500+ elégedett ügyfél" },
  { icon: Award, label: "2+ év tapasztalat" },
  { icon: Star, label: "Platinum Team" },
];

export default function Hero() {
  const { distributor } = siteConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-emerald-50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              {distributor.tagline}
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Éld az egészséges életet{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">
                prémium táplálkozással
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
              Üdvözöllek! {distributor.name} vagyok, Flavon független distributor.
              Segítek megtalálni a számodra ideális termékeket és támogatom
              utadat az egészséges, kiegyensúlyozott életmód felé.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                href={siteConfig.affiliateUrl}
                external
                variant="primary"
                size="lg"
                icon={ExternalLink}
              >
                Vásárlás a hivatalos webshopban
              </Button>
              <Button href="#rolam" variant="outline" size="lg">
                Ismerd meg a történetemet
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustIndicators.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex flex-col items-center sm:items-start gap-1.5 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-white shadow-sm"
                >
                  <Icon className="h-5 w-5 text-brand-600" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 text-center sm:text-left">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-700 rounded-3xl rotate-3 opacity-20" />
              <div className="relative bg-gradient-to-br from-brand-500 to-emerald-700 rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-600/20 flex flex-col items-center justify-center text-white text-center min-h-[320px] md:min-h-[420px]">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-6 border-2 border-white/30">
                  <span className="text-4xl md:text-5xl font-bold">
                    {distributor.name.charAt(0)}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {distributor.fullName}
                </h2>
                <p className="text-brand-100 font-medium mb-4">
                  {distributor.title}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur text-sm font-semibold">
                  <Award className="h-4 w-4" />
                  {distributor.teamName} Vezető
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
