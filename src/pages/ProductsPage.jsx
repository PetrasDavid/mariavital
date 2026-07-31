import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, HelpCircle, List } from "lucide-react";
import { products, formatProductPrice } from "../config/productsData";
import PageHero from "../components/ui/PageHero";
import ProductCard from "../components/ui/ProductCard";
import ProductPurchaseButtons from "../components/ui/ProductPurchaseButtons";
import AddToCartButton from "../components/ui/AddToCartButton";

function ProductModal({ product, onClose }) {
  if (!product) return null;

  const priceDisplay = formatProductPrice(product);
  const isRange = typeof priceDisplay === "string";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div className={`h-40 sm:h-52 bg-gradient-to-br ${product.accentColor} relative overflow-hidden`}>
            {product.image && (
              <img
                src={product.image}
                alt={product.imageAlt || product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {product.onSale && (
              <span className="absolute top-4 left-4 rounded-full bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1.5 z-10">
                Akció!
              </span>
            )}
            {product.comingSoon && (
              <span className="absolute top-4 left-4 rounded-full bg-white text-brand-800 text-xs font-bold px-3 py-1.5 z-10">
                Hamarosan
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/55 transition-colors z-10"
              aria-label="Bezárás"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <div className="mb-6">
              {isRange ? (
                <p className="text-xl font-bold text-brand-700">{priceDisplay}</p>
              ) : (
                <div className="flex flex-wrap items-baseline gap-3">
                  {priceDisplay.original && (
                    <span className="text-lg text-gray-400 line-through">
                      {priceDisplay.original}
                    </span>
                  )}
                  <p className="text-2xl font-bold text-brand-700">
                    {priceDisplay.current}
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      kiskereskedelmi ár
                    </span>
                  </p>
                </div>
              )}
              {product.comingSoon && product.comingSoonLabel && (
                <p className="text-sm text-brand-700 font-medium mt-2">
                  {product.comingSoonLabel}
                </p>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                  <List className="h-4 w-4 text-brand-600" />
                  Összetevők
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.ingredients ||
                    "Prémium növényi kivonatok, flavonoidok és természetes összetevők. A pontos összetétel a termék csomagolásán és a hivatalos webshopban található."}
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                  <HelpCircle className="h-4 w-4 text-brand-600" />
                  Fogyasztási útmutató
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.consumption ||
                    "Napi 1-2 adag, vízzel vagy gyümölcslével. Étkezés előtt vagy után, a csomagoláson feltüntetett utasítás szerint."}
                </p>
              </div>

              <div className="aspect-video rounded-2xl bg-gray-100 flex flex-col items-center justify-center text-gray-400">
                <Play className="h-12 w-12 mb-2 opacity-50" />
                <span className="text-sm">Termékvideó helye</span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">GYIK</h3>
                <p className="text-gray-600 text-sm">
                  {product.faq ||
                    "A vásárlás a Flavon hivatalos webshopján keresztül történik. A szállítást és számlázást a Flavon végzi."}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
              <AddToCartButton product={product} className="!py-3.5 !text-sm sm:!text-base" />
              <ProductPurchaseButtons
                retailUrl={product.retailUrl || product.affiliateUrl}
                registerUrl={product.registerUrl}
                size="modal"
                disabled={product.comingSoon}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Termékek"
        title="Prémium Flavon termékcsalád"
        subtitle="Kattints egy termékre a részletekért — összetevők, fogyasztási útmutató és vásárlási link."
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProduct(product)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedProduct(product)}
                className="cursor-pointer h-full"
              >
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
