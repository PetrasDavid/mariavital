import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { packages } from "../config/config";
import { formatProductPrice, getProductById } from "../config/productsData";
import PageHero from "../components/ui/PageHero";
import ProductPurchaseButtons from "../components/ui/ProductPurchaseButtons";
import SeoHead from "../components/ui/SeoHead";
import { pageSeo } from "../config/seoData";

export default function PackagesPage() {
  return (
    <>
      <SeoHead {...pageSeo.packages} />
      <PageHero
        eyebrow="Csomagok"
        title="Egyedi termékcsomagok"
        subtitle="Összeállított csomagjaink konkrét célokra — immunerősítés, energia, női vitalitás és több."
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const product = getProductById(pkg.productId);
              const priceDisplay = product ? formatProductPrice(product) : null;
              const isRange = typeof priceDisplay === "string";
              return (
                <motion.article
                  key={pkg.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${pkg.accentColor} flex items-center justify-center overflow-hidden relative`}
                  >
                    {pkg.image ? (
                      <img
                        src={pkg.image}
                        alt={pkg.imageAlt || pkg.name}
                        className="max-w-full max-h-full w-auto h-auto object-contain p-3"
                      />
                    ) : (
                      <span className="text-5xl">{pkg.emoji}</span>
                    )}
                    {product?.onSale && (
                      <span className="absolute top-3 right-3 z-10 rounded-full bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1.5 shadow">
                        Akció!
                      </span>
                    )}
                    {product?.exclusiveToDistributor && (
                      <span className="absolute top-3 left-3 z-10 rounded-full bg-white text-brand-800 text-xs font-bold px-3 py-1.5 shadow">
                        Csak Marcsitól
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                      {pkg.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.products.map((p) => (
                        <span
                          key={p}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-brand-50 text-brand-700"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    {priceDisplay && (
                      <div className="mb-5 rounded-xl bg-brand-50 border border-brand-100 px-4 py-3">
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-0.5">
                          Kiskereskedelmi ár
                        </p>
                        {isRange ? (
                          <p className="text-2xl font-bold text-brand-800 leading-snug">
                            {priceDisplay}
                          </p>
                        ) : (
                          <div className="flex flex-wrap items-baseline gap-2">
                            {priceDisplay.original && (
                              <span className="text-base text-gray-400 line-through">
                                {priceDisplay.original}
                              </span>
                            )}
                            <p className="text-2xl font-bold text-brand-800">
                              {priceDisplay.current}
                            </p>
                          </div>
                        )}
                        {product?.exclusiveToDistributor && (
                          <p className="text-xs text-brand-700 mt-1">+ futárdíj</p>
                        )}
                      </div>
                    )}

                    <ProductPurchaseButtons
                      product={product}
                      retailLabel="Csomagot a kosárba"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>

          <p className="text-center text-sm text-gray-500 mt-12 flex items-center justify-center gap-2">
            <Package className="h-4 w-4" />
            A kosárba gomb Marcsinak küldi a rendelésigényt. A gyártói karton (ahol van) a Flavon webshopra visz. Az Induló próba csomag csak Marcsitól kapható.
          </p>
        </div>
      </section>
    </>
  );
}
