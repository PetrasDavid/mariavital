import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  compact = false,
}) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-rose-50/40 ${
        compact ? "pt-28 pb-12 md:pt-32 md:pb-16" : "pt-28 pb-16 md:pt-36 md:pb-24"
      }`}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-brand-600 mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{subtitle}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
