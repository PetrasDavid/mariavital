import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Clock, ArrowRight } from "lucide-react";
import { siteConfig, blogPosts } from "../config/config";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

const categoryColors = {
  Egészség: "bg-brand-100 text-brand-700",
  Autoimmun: "bg-teal-100 text-teal-700",
  Receptek: "bg-rose-100 text-rose-700",
  Életmód: "bg-amber-100 text-amber-700",
};

export default function BlogPage() {
  const { social } = siteConfig;
  const recipePages = [social.facebookRecipe1, social.facebookRecipe2];

  return (
    <>
      <PageHero
        eyebrow="Blog & Receptek"
        title="Tudás, receptek, életmód"
        subtitle="Heti cikkek, például: életmódváltás, zöldség–gyümölcs, Hashimoto, autoimmun és tartós fogyás — Marcsi tollából."
      />

      {/* Marcselladiéta highlight */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-white p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 text-rose-600 font-semibold text-sm mb-3">
                  <BookOpen className="h-4 w-4" />
                  Fő receptforrás
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Marcselladiéta Facebook oldalak
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A legfrissebb magyaros fogyókúrás receptek, étkezési tippek és
                  közösségi inspiráció itt jelenik meg először. Kövess minket, és
                  soha ne maradj le egy új ötletről sem!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {recipePages.map((page) => (
                    <Button
                      key={page.href}
                      href={page.href}
                      external
                      variant="soft"
                      size="md"
                      icon={ExternalLink}
                    >
                      {page.label}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {recipePages.map((page, i) => (
                  <a
                    key={page.href}
                    href={page.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center transition-transform hover:scale-[1.02] ${
                      i === 0
                        ? "bg-gradient-to-br from-rose-400 to-pink-500 text-white"
                        : "bg-gradient-to-br from-brand-400 to-emerald-500 text-white"
                    }`}
                  >
                    <BookOpen className="h-8 w-8 mb-2 opacity-80" />
                    <span className="font-bold text-sm">{page.label}</span>
                    <span className="text-xs opacity-80 mt-1">Facebook</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legutóbbi cikkek"
            title="Blog bejegyzések"
            subtitle="Helyőrző cikkek — hamarosan teljes tartalommal. Addig is kövess a Facebook oldalakon!"
            align="left"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:border-brand-100 transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-brand-100 to-rose-100 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-brand-300" />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[post.category] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-60">
                      Hamarosan
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
