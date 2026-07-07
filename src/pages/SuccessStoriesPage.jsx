import { motion } from "framer-motion";
import { Quote, Play, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/config";
import { testimonials, beforeAfterStories } from "../config/testimonialsData";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

export default function SuccessStoriesPage() {
  const { distributor } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="Sikertörténetek"
        title="Valódi emberek, valódi eredmények"
        subtitle="Mária saját átalakulása és csapattagjaink, ügyfeleink történetei — engedéllyel megosztva."
      />

      {/* Mária's story */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl bg-gradient-to-br from-brand-50 to-rose-50 p-8 md:p-12">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl bg-gray-200 flex flex-col items-center justify-center text-gray-500 text-sm">
                Előtte
                <span className="text-xs opacity-70 mt-1">Kép helye</span>
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={distributor.profileImage}
                  alt={distributor.profileImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                {distributor.name} története
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                2+ év stabil eredmény
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Flavon termékek, tudatos táplálkozás és Ringa Dance — így változtattam
                meg az életemet. Ma már másoknak is segítek ugyanezen az úton járni.
              </p>
              <Button to="/rolam" variant="outline" icon={ArrowRight}>
                Teljes történet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client quotes */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Ügyfeleink és csapattagjaink" subtitle="Ők is megtapasztalták a változást." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.blockquote
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <Quote className="h-8 w-8 text-brand-200 mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
                <footer>
                  <cite className="not-italic font-bold text-gray-900">{item.name}</cite>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After + Videos */}
      <section className="pb-20 md:pb-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Előtte / Utána & Videók" />
          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {beforeAfterStories.map((story) => (
              <div key={story.id} className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
                <div className="grid grid-cols-2">
                  <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    {story.beforePlaceholder}
                  </div>
                  <div className="aspect-[3/4] bg-brand-200 flex items-center justify-center text-brand-800 text-sm">
                    {story.afterPlaceholder}
                  </div>
                </div>
                <p className="p-4 text-sm text-gray-600">{story.description}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="aspect-video rounded-2xl bg-gray-200 flex flex-col items-center justify-center text-gray-500"
              >
                <Play className="h-12 w-12 mb-2 opacity-50" />
                <span className="text-sm">Interjú / videó helye #{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
