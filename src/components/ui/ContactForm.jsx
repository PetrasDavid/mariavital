import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, CheckCircle, Loader2 } from "lucide-react";
import { siteConfig } from "../../config/config";
import { getFormSubmitRecipient } from "../../utils/formSubmit";
import Button from "./Button";

const initialFormState = { name: "", email: "", phone: "", message: "" };

/**
 * Kapcsolat / Platinum űrlap — natív FormSubmit POST (nincs mailto, nincs Outlook).
 * @param {"contact" | "platinum"} type
 */
export default function ContactForm({
  type = "platinum",
  messagePlaceholder = "Miért szeretnél csatlakozni a Platinum Teamhez?",
  submitLabel,
  successTitle = "Köszönjük!",
  successMessage,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const isPlatinum = type === "platinum";
  const sentFlag = isPlatinum ? "platinum" : "kapcsolat";
  const buttonText =
    submitLabel || (isPlatinum ? "Jelentkezés küldése" : "Üzenet küldése");
  const successBody =
    successMessage ||
    (isPlatinum
      ? "Megkaptuk a jelentkezésed. A megadott e-mailcímedre elküldtük a másolatot is. Marcsi hamarosan felveszi veled a kapcsolatot."
      : "Megkaptuk az üzeneted. A megadott e-mailcímedre elküldtük a másolatot is. Marcsi hamarosan válaszol.");

  const actionUrl = useMemo(() => {
    try {
      return `https://formsubmit.co/${encodeURIComponent(getFormSubmitRecipient())}`;
    } catch {
      return null;
    }
  }, []);

  const nextUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const url = new URL(window.location.href);
    url.searchParams.set("elkuldve", sentFlag);
    url.hash = "";
    return url.toString();
  }, [sentFlag]);

  const ccValue = useMemo(() => {
    return [form.email, siteConfig.contact.emailSecondary]
      .filter(Boolean)
      .join(",");
  }, [form.email]);

  useEffect(() => {
    if (searchParams.get("elkuldve") === sentFlag) {
      setStatus("success");
      setForm(initialFormState);
      const next = new URLSearchParams(searchParams);
      next.delete("elkuldve");
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, sentFlag, setSearchParams]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    setError("");
    if (!actionUrl) {
      e.preventDefault();
      setError("Nincs beállítva fogadó e-mail cím.");
      return;
    }
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      e.preventDefault();
      setError("Kérjük, töltsd ki a kötelező mezőket.");
      return;
    }
    // Natív POST megy a FormSubmitre — ne akadályozzuk (különben újra JS fetch / mailto lehetne).
    setStatus("submitting");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <CheckCircle className="h-16 w-16 text-brand-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">{successTitle}</h3>
        <p className="text-gray-600 mb-6">{successBody}</p>
        <p className="text-sm text-gray-500 mb-6">
          Nézd a Beérkezett és Spam mappát is a visszaigazoló e-mail miatt.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Új üzenet küldése
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      action={actionUrl || undefined}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="_subject" value={isPlatinum ? "Platinum Team jelentkezés | marcsivital" : "Kapcsolatfelvétel | marcsivital"} />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_replyto" value={form.email} />
      {ccValue ? <input type="hidden" name="_cc" value={ccValue} /> : null}
      <input type="hidden" name="_url" value={typeof window !== "undefined" ? window.location.href : ""} />
      <input type="hidden" name="Típus" value={isPlatinum ? "Platinum Team jelentkezés" : "Kapcsolatfelvétel"} />
      <input type="text" name="_honey" value="" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`cf-name-${type}`} className="block text-sm font-medium text-gray-700 mb-1.5">
            Név *
          </label>
          <input
            id={`cf-name-${type}`}
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Teljes neved"
            autoComplete="name"
            disabled={status === "submitting"}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all disabled:opacity-60"
          />
        </div>
        <div>
          <label htmlFor={`cf-email-${type}`} className="block text-sm font-medium text-gray-700 mb-1.5">
            Email *
          </label>
          <input
            id={`cf-email-${type}`}
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="email@pelda.hu"
            autoComplete="email"
            disabled={status === "submitting"}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all disabled:opacity-60"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`cf-phone-${type}`} className="block text-sm font-medium text-gray-700 mb-1.5">
          Telefon *
        </label>
        <input
          id={`cf-phone-${type}`}
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+36 30 123 4567"
          autoComplete="tel"
          disabled={status === "submitting"}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all disabled:opacity-60"
        />
      </div>

      <div>
        <label htmlFor={`cf-message-${type}`} className="block text-sm font-medium text-gray-700 mb-1.5">
          Üzenet
        </label>
        <textarea
          id={`cf-message-${type}`}
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder={messagePlaceholder}
          disabled={status === "submitting"}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none disabled:opacity-60"
        />
      </div>

      {/* FormSubmit mezőnevek magyarul is */}
      <input type="hidden" name="Név" value={form.name} />
      <input type="hidden" name="Telefon" value={form.phone} />
      <input type="hidden" name="Üzenet" value={form.message || "-"} />

      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg leading-relaxed">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        icon={status === "submitting" ? Loader2 : Send}
        iconPosition="right"
        className={`w-full sm:w-auto ${status === "submitting" ? "[&_svg]:animate-spin" : ""}`}
        disabled={status === "submitting" || !actionUrl}
      >
        {status === "submitting" ? "Küldés folyamatban..." : buttonText}
      </Button>
      {status === "submitting" && (
        <p className="text-sm text-gray-500">
          Átirányítunk a biztonságos küldő oldalra — nem a leveleződ nyílik meg.
        </p>
      )}
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
