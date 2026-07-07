import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { testimonials, beforeAfterStories } from "../../config/testimonialsData";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  return (
    <section id="velemenyek" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Vélemények"
          title="Valódi emberek, valódi eredmények"
          subtitle="Csapattagjaink és vásárlóink tapasztalatai — engedéllyel megosztva."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-brand-200 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
              <footer className="flex items-center justify-between gap-4">
                <div>
                  <cite className="not-italic font-bold text-gray-900">{item.name}</cite>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
                <span className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-100 text-brand-700">
                  {item.highlight}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {beforeAfterStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <div className="grid grid-cols-2">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 flex flex-col items-center justify-center text-gray-500">
                  <span className="text-sm font-semibold uppercase tracking-wider mb-1">
                    {story.beforePlaceholder}
                  </span>
                  <span className="text-xs opacity-70">Kép helye</span>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-brand-200 to-brand-400 flex flex-col items-center justify-center text-brand-800">
                  <span className="text-sm font-semibold uppercase tracking-wider mb-1">
                    {story.afterPlaceholder}
                  </span>
                  <span className="text-xs opacity-70">Kép helye</span>
                </div>
              </div>
              <div className="p-5 bg-white flex items-center justify-between gap-3">
                <div>
                  <p className="font-semibold text-gray-900">{story.label}</p>
                  <p className="text-sm text-gray-500">{story.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-brand-600 shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
