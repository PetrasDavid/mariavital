import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const push = useCallback(
    (toast) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const item = {
        id,
        title: toast.title || "Értesítés",
        message: toast.message || "",
        href: toast.href,
        hrefLabel: toast.hrefLabel,
        duration: toast.duration ?? 3500,
      };
      setToasts((prev) => [...prev.slice(-2), item]);
      window.setTimeout(() => dismiss(id), item.duration);
      return id;
    },
    [dismiss],
  );

  const value = useMemo(() => ({ push, dismiss }), [push, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-[min(100%-2rem,22rem)] pointer-events-none"
        aria-live="polite"
      >
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              className="pointer-events-auto rounded-2xl bg-gray-900 text-white shadow-xl border border-white/10 p-4"
            >
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center shrink-0">
                  {t.href ? <ShoppingBag className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm">{t.title}</p>
                  {t.message && <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">{t.message}</p>}
                  {t.href && (
                    <Link
                      to={t.href}
                      className="inline-block text-xs font-semibold text-brand-300 hover:text-brand-200 mt-2"
                      onClick={() => dismiss(t.id)}
                    >
                      {t.hrefLabel || "Megnyitás"}
                    </Link>
                  )}
                </div>
                <button
                  type="button"
                  aria-label="Bezárás"
                  className="text-gray-400 hover:text-white shrink-0"
                  onClick={() => dismiss(t.id)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
