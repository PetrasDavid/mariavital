import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, BookOpen, Download } from "lucide-react";
import {
  siteConfig,
  productCategories,
  whyChooseMe,
  storyQuote,
  platinumPitch,
  ebookOffer,
} from "../config/config";
import { faqItems } from "../config/faqData";
import Button from "../components/ui/Button";
import FAQAccordion from "../components/ui/FAQAccordion";
import SectionHeading from "../components/ui/SectionHeading";

export default function HomePage() {
  const { brand, distributor } = siteConfig;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(105deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.82) 42%, rgba(6,95,70,0.35) 100%), url(${distributor.profileImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/90 via-white/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 mb-4">
              {brand.slogan}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.1rem] font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6">
              „{brand.heroHeadline}”
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              {brand.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button to="/termekek" variant="secondary" size="lg" icon={ArrowRight}>
                🌿 Termékek megtekintése
              </Button>
              <Button to="/rolam" variant="outline" size="lg">
                ❤️ Az én történetem
              </Button>
            </div>
            <p className="text-brand-800 font-medium italic border-l-4 border-brand-400 pl-4">
              {brand.promise}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bemutatkozás preview */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-600 font-semibold text-sm">💗 Az én történetem</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Bemutatkozás
              </h2>
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Szia, {distributor.fullName} vagyok!
              </p>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Több éve a Flavon termékek elkötelezett ajánlója vagyok. A saját
                  életemben is megtapasztaltam, milyen sokat számít a tudatos életmód
                  és a minőségi táplálkozás.
                </p>
                <p>
                  A legnagyobb büszkeségem, hogy az elért fogyásomat több mint két
                  éve sikerült megtartanom, miközben energikusabbnak és
                  kiegyensúlyozottabbnak érzem magam.
                </p>
                <p>
                  Hiszem, hogy minden ember megérdemli, hogy jól érezze magát a
                  testében, és ehhez szeretnék segítséget nyújtani.
                </p>
              </div>
              <Button to="/rolam" variant="outline" className="mt-8" icon={ArrowRight}>
                Teljes történetem
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto lg:max-w-none"
            >
              <img
                src={distributor.profileImage}
                alt={distributor.profileImageAlt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Miért engem */}
      <section className="py-20 bg-brand-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Miért engem válassz?"
            subtitle="Hiszem, hogy minden ember megérdemli, hogy jól érezze magát a testében — és ehhez szeretnék segítséget nyújtani."
          />
          <ul className="space-y-3">
            {whyChooseMe.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-white rounded-2xl px-5 py-4 border border-brand-100 shadow-sm"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-100 text-brand-700 shrink-0 mt-0.5">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="font-medium text-gray-800">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Termék kategóriák */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Termékek"
            title="Miben segíthetünk?"
            subtitle="Válassz kategóriát — mindegyik egy külön oldalra vezet."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {productCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={cat.to}
                  className="group flex flex-col items-center text-center p-6 md:p-8 rounded-3xl border border-gray-100 bg-white hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/40 transition-all h-full"
                >
                  <span className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {cat.emoji}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-700">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cat.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/termekek" variant="secondary" icon={ArrowRight}>
              Összes termék
            </Button>
          </div>
        </div>
      </section>

      {/* Saját történetem quote */}
      <section className="py-20 bg-gradient-to-br from-brand-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={distributor.beforeAfterImage}
                alt={distributor.beforeAfterImageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Saját történetem</h2>
              <blockquote className="text-lg md:text-xl leading-relaxed text-brand-50 italic mb-8">
                „{storyQuote}”
              </blockquote>
              <Button
                to="/sikertortenetek"
                variant="primary"
                className="!bg-white !text-brand-800 hover:!bg-brand-50"
              >
                Sikertörténetek
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platinum Team teaser */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={distributor.teamImage}
                alt={distributor.teamImageAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                Platinum Team
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                {platinumPitch.headline}
              </h2>
              <p className="text-gray-600 mb-6">Bemutatnád:</p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {platinumPitch.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 font-medium text-gray-800 capitalize"
                  >
                    <Check className="h-5 w-5 text-brand-600 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <Button to="/platinum-team" variant="primary" size="lg">
                {platinumPitch.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Blog"
            title="Heti cikkek"
            subtitle="Életmód, Hashimoto, autoimmun és tartós fogyás — gyakorlati tippekkel."
          />
          <Button to="/blog" variant="outline" icon={BookOpen} iconPosition="left">
            Blog megnyitása
          </Button>
        </div>
      </section>

      {/* E-book */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-emerald-900 p-8 md:p-14 text-white"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sm mb-5">
                  <BookOpen className="h-4 w-4" />
                  Ingyenes e-book
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{ebookOffer.title}</h2>
                <p className="text-brand-100 text-lg">{ebookOffer.subtitle}</p>
              </div>
              <div className="md:text-right">
                <Button
                  href={ebookOffer.downloadUrl}
                  size="lg"
                  icon={Download}
                  iconPosition="left"
                  className="!bg-white !text-brand-800 hover:!bg-brand-50"
                >
                  {ebookOffer.cta}
                </Button>
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
            subtitle="Minden, amit a rendelésről és a csatlakozásról tudnod kell."
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
