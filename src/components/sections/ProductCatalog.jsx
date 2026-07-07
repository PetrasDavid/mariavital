import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { products } from "../../config/productsData";
import { siteConfig } from "../../config/siteConfig";
import SectionHeading from "../ui/SectionHeading";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";

export default function ProductCatalog() {
  return (
    <section id="termekek" className="py-20 md:py-28 bg-gradient-to-b from-brand-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Termékkatalógus"
          title="Prémium Flavon termékek"
          subtitle="Fedezd fel a legnépszerűbb termékeinket. Minden vásárlás a hivatalos Flavon webshopon keresztül történik — biztonságosan és megbízhatóan."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-10 text-sm text-gray-500"
        >
          <ShoppingBag className="h-4 w-4 text-brand-600" />
          <span>{products.length} termék · Tájékoztató kiskereskedelmi árak</span>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-gray-600 mb-6">
            Nem találod, amit keresel? Böngéssz a teljes kínálatban a hivatalos
            webshopban.
          </p>
          <Button href={siteConfig.affiliateUrl} external variant="secondary" size="lg">
            Összes termék a webshopban
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
