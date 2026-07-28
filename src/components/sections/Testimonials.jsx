import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials, weightLossStories } from "../../config/testimonialsData";
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
          {weightLossStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white"
            >
              <div className="relative aspect-[4/5]">
                <img
                  src={story.image}
                  alt={story.imageAlt}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute top-3 left-3 rounded-full bg-brand-600 text-white text-xs font-bold px-3 py-1.5">
                  {story.highlight}
                </span>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                  {story.paragraphs[0]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
