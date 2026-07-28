import { motion } from "framer-motion";
import { Quote, Play, MessageSquare } from "lucide-react";
import { siteConfig, storyQuote } from "../config/config";
import { testimonials, weightLossStories } from "../config/testimonialsData";
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
        subtitle="Marcsi saját átalakulása, képes ajánlások, videók és vásárlói vélemények."
      />

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl bg-gradient-to-br from-brand-50 to-rose-50 p-8 md:p-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={distributor.beforeAfterImage}
                alt={distributor.beforeAfterImageAlt}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                Saját történetem
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                2+ év stabil eredmény
              </h2>
              <blockquote className="text-gray-700 leading-relaxed italic mb-6">
                „{storyQuote}”
              </blockquote>
              <Button to="/rolam" variant="outline">
                Teljes történet
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Fogyástörténetek"
            subtitle="Valódi átalakulások — engedéllyel megosztva."
          />
          <div className="space-y-10 mb-16">
            {weightLossStories.map((story, i) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid lg:grid-cols-2 gap-0 items-stretch rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm"
              >
                <div className="relative bg-gray-100">
                  <img
                    src={story.image}
                    alt={story.imageAlt}
                    className="w-full h-full max-h-[520px] object-cover object-top"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-brand-600 text-white text-sm font-bold px-4 py-1.5 shadow">
                    {story.highlight}
                  </span>
                </div>
                <div className="p-6 md:p-8 lg:p-10 space-y-4 self-center">
                  {story.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)} className="text-gray-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <SectionHeading title="Videók" subtitle="Interjúk és személyes beszámolók." />
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="aspect-video rounded-2xl bg-gray-200 flex flex-col items-center justify-center text-gray-500"
              >
                <Play className="h-12 w-12 mb-2 opacity-50" />
                <span className="text-sm">Videó helye #{n}</span>
              </div>
            ))}
          </div>

          <SectionHeading
            title="Vásárlói vélemények"
            subtitle="Csapattagjaink és ügyfeleink szavai."
          />
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
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-brand-600" />
                  <div>
                    <cite className="not-italic font-bold text-gray-900">{item.name}</cite>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
