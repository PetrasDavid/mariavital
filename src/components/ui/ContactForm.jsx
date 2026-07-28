import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "../../config/config";
import Button from "./Button";

const initialFormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm({
  messagePlaceholder = "Miért szeretnél csatlakozni a Platinum Teamhez?",
}) {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("submitting");

    if (siteConfig.formEndpoint) {
      try {
        const response = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error("Submission failed");
        setStatus("success");
        setForm(initialFormState);
      } catch {
        setStatus("error");
        setError("Hiba történt az küldés során. Kérjük, próbáld újra vagy hívj minket.");
      }
      return;
    }

    const subject = encodeURIComponent("Platinum Team jelentkezés");
    const body = encodeURIComponent(
      `Név: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\n\nÜzenet:\n${form.message}`,
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setForm(initialFormState);
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <CheckCircle className="h-16 w-16 text-brand-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Köszönjük!</h3>
        <p className="text-gray-600 mb-6">
          Megkaptuk jelentkezésed. Marcsi hamarosan felveszi veled a kapcsolatot.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Új üzenet küldése
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Név *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Teljes neved"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="email@pelda.hu"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Telefon *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+36 30 123 4567"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Üzenet
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder={messagePlaceholder}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">{error}</p>
      )}

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        icon={Send}
        iconPosition="right"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Küldés..." : "Jelentkezés küldése"}
      </Button>
    </form>
  );
}

export function FAQAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900">{item.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-brand-600"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
