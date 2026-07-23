import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { formatProductPrice } from "../../config/productsData";
import ProductPurchaseButtons from "./ProductPurchaseButtons";

export default function ProductCard({ product, index = 0 }) {
  const {
    name,
    description,
    benefits,
    image,
    imageAlt,
    accentColor,
    affiliateUrl,
    retailUrl,
    registerUrl,
    onSale,
  } = product;

  const priceDisplay = formatProductPrice(product);
  const isRange = typeof priceDisplay === "string";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 overflow-hidden"
    >
      <div
        className={`relative h-48 bg-gradient-to-br ${accentColor} flex items-center justify-center overflow-hidden`}
      >
        {image ? (
          <img
            src={image}
            alt={imageAlt || name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-white/90 px-4 text-center">
            <Leaf className="h-12 w-12 opacity-80" strokeWidth={1.5} />
            <span className="text-xs font-medium uppercase tracking-wider opacity-70">
              Termékkép helye
            </span>
          </div>
        )}
        {onSale && (
          <span className="absolute top-3 right-3 z-10 rounded-full bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1.5 shadow">
            Akció!
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-3 min-h-[4.5rem]">
          {name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[3.75rem]">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-5 min-h-[4.5rem] content-start">
          {benefits?.map((benefit) => (
            <li
              key={benefit}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-brand-50 text-brand-700"
            >
              {benefit}
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-gray-100 mt-auto space-y-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
              Kiskereskedelmi ár
            </p>
            {isRange ? (
              <p className="text-lg font-bold text-brand-700 leading-snug">{priceDisplay}</p>
            ) : (
              <div className="flex flex-wrap items-baseline gap-2">
                {priceDisplay.original && (
                  <span className="text-sm text-gray-400 line-through">
                    {priceDisplay.original}
                  </span>
                )}
                <p className="text-2xl font-bold text-brand-700">{priceDisplay.current}</p>
              </div>
            )}
          </div>

          <ProductPurchaseButtons
            retailUrl={retailUrl || affiliateUrl}
            registerUrl={registerUrl}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    </motion.article>
  );
}
