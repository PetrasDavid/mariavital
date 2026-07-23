import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { packages } from "../config/config";
import PageHero from "../components/ui/PageHero";
import ProductPurchaseButtons from "../components/ui/ProductPurchaseButtons";

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Csomagok"
        title="Egyedi termékcsomagok"
        subtitle="Összeállított csomagjaink konkrét célokra — immunerősítés, energia, női vitalitás és több."
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.article
                key={pkg.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`h-32 bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center text-5xl`}
                >
                  {pkg.emoji}
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {pkg.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.products.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-brand-50 text-brand-700"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <ProductPurchaseButtons />
                </div>
              </motion.article>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-12 flex items-center justify-center gap-2">
            <Package className="h-4 w-4" />
            A csomagok virtuális összeállítások — a rendelés a Flavon hivatalos oldalán történik.
          </p>
        </div>
      </section>
    </>
  );
}
