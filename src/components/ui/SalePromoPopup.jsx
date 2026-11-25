import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight } from "lucide-react";

/** Change this when the sale offer changes — popup shows again. */
const STORAGE_KEY = "marcsivital_sale_promo_v1";

const deals = [
  {
    name: "Green",
    unit: "/üveg",
    original: "16 200 Ft",
    sale: "13 500 Ft",
  },
  {
    name: "Protect",
    unit: "/üveg",
    original: "16 200 Ft",
    sale: "13 500 Ft",
  },
  {
    name: "Peak Boost",
    unit: "/doboz",
    original: "32 400 Ft",
    sale: "27 000 Ft",
  },
];

export default function SalePromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = Boolean(sessionStorage.getItem(STORAGE_KEY));
    } catch {
      dismissed = false;
    }
    if (dismissed) return;

    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Bezárás"
            className="absolute inset-0 bg-brand-950/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sale-promo-title"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl border border-brand-100"
          >
            <div className="relative bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-700 px-6 pt-6 pb-8 text-white">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
              <div className="absolute -left-6 bottom-0 h-24 w-24 rounded-full bg-amber-300/20" />

              <button
                type="button"
                onClick={close}
                className="absolute top-3 right-3 z-10 rounded-full bg-white/15 hover:bg-white/25 p-2 transition-colors"
                aria-label="Bezárás"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1.5 uppercase tracking-wide">
                <Sparkles className="h-3.5 w-3.5" />
                Akció
              </span>
              <h2
                id="sale-promo-title"
                className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight"
              >
                Most kedvezőbb áron
              </h2>
              <p className="mt-2 text-brand-50/95 text-sm sm:text-base leading-relaxed">
                Válogatott termékek akciós áron — amíg a készlet / időszak tart.
              </p>
            </div>

            <div className="px-6 py-5 space-y-3">
              {deals.map((deal) => (
                <div
                  key={deal.name}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-brand-100 bg-brand-50/70 px-4 py-3"
                >
                  <div>
                    <p className="font-bold text-gray-900">{deal.name}</p>
                    <p className="text-xs text-gray-500">{deal.unit}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 line-through">{deal.original}</p>
                    <p className="text-lg font-extrabold text-brand-700">{deal.sale}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 pb-6 flex flex-col gap-2">
              <Link
                to="/termekek"
                onClick={close}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold px-5 py-3.5 transition-colors"
              >
                Megnézem az akciós termékeket
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={close}
                className="w-full rounded-xl px-5 py-2.5 text-sm font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors"
              >
                Most nem
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
