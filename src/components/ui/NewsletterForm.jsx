import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { siteConfig } from "../../config/config";

/**
 * MailerLite-ready newsletter signup.
 * Set siteConfig.newsletter.formActionUrl to the form action from MailerLite HTML embed.
 */
export default function NewsletterForm({
  variant = "light",
  className = "",
  showTitle = true,
}) {
  const { newsletter, contact } = siteConfig;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error | pending
  const [error, setError] = useState("");

  if (!newsletter?.enabled) return null;

  const isDark = variant === "dark";
  const connected = Boolean(newsletter.formActionUrl?.trim());

  const submitToMailerLite = async (actionUrl, subscriberEmail) => {
    const body = new URLSearchParams();
    body.set("fields[email]", subscriberEmail);
    body.set("ml-submit", "1");
    body.set("anticsrf", "true");

    // Prefer no-cors form POST via hidden iframe for broad MailerLite compatibility
    return new Promise((resolve, reject) => {
      const iframeName = `ml-frame-${Date.now()}`;
      let iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.title = "MailerLite";
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const form = document.createElement("form");
      form.method = "POST";
      form.action = actionUrl;
      form.target = iframeName;
      form.style.display = "none";

      for (const [key, value] of body.entries()) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }

      document.body.appendChild(form);

      const cleanup = () => {
        form.remove();
        iframe.remove();
        iframe = null;
      };

      iframe.onload = () => {
        cleanup();
        resolve(true);
      };

      try {
        form.submit();
        // Some browsers never fire onload for opaque responses — treat as success after short wait
        window.setTimeout(() => {
          if (iframe) {
            cleanup();
            resolve(true);
          }
        }, 1500);
      } catch (err) {
        cleanup();
        reject(err);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Add meg az e-mail címed.");
      return;
    }

    if (!connected) {
      setStatus("pending");
      return;
    }

    setStatus("submitting");
    try {
      await submitToMailerLite(newsletter.formActionUrl.trim(), email.trim());
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Nem sikerült a feliratkozás. Próbáld újra, vagy írj nekünk e-mailben.");
    }
  };

  if (status === "success") {
    return (
      <div className={`rounded-2xl p-5 ${isDark ? "bg-white/10" : "bg-brand-50 border border-brand-100"} ${className}`}>
        <div className="flex items-start gap-3">
          <CheckCircle className={`h-6 w-6 shrink-0 ${isDark ? "text-brand-200" : "text-brand-600"}`} />
          <p className={`text-sm leading-relaxed ${isDark ? "text-brand-50" : "text-brand-900"}`}>
            {newsletter.successMessage}
          </p>
        </div>
      </div>
    );
  }

  if (status === "pending") {
    return (
      <div className={`rounded-2xl p-5 ${isDark ? "bg-white/10" : "bg-amber-50 border border-amber-100"} ${className}`}>
        <p className={`text-sm leading-relaxed mb-3 ${isDark ? "text-brand-50" : "text-amber-950"}`}>
          {newsletter.pendingMessage}
        </p>
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent("Hírlevél feliratkozás")}&body=${encodeURIComponent(`Szeretnék feliratkozni a hírlevélre.\nE-mail: ${email}`)}`}
          className={`text-sm font-semibold underline ${isDark ? "text-white" : "text-brand-700"}`}
        >
          E-mail küldése: {contact.email}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      {showTitle && (
        <div className="mb-4">
          <h3
            className={`text-lg font-bold mb-1 flex items-center gap-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            <Mail className={`h-5 w-5 ${isDark ? "text-brand-200" : "text-brand-600"}`} />
            {newsletter.title}
          </h3>
          <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {newsletter.subtitle}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          E-mail cím
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@pelda.hu"
          className={`flex-1 min-w-0 px-4 py-3 rounded-xl outline-none transition-all ${
            isDark
              ? "bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:border-brand-500"
              : "bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
          }`}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold transition-colors shrink-0 disabled:opacity-60 ${
            isDark
              ? "bg-brand-500 text-white hover:bg-brand-400"
              : "bg-brand-600 text-white hover:bg-brand-700"
          }`}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Küldés...
            </>
          ) : (
            newsletter.buttonLabel
          )}
        </button>
      </form>

      {error && (
        <p className={`text-sm mt-2 ${isDark ? "text-rose-300" : "text-red-600"}`}>{error}</p>
      )}

      <p className={`text-xs mt-3 leading-relaxed ${isDark ? "text-gray-500" : "text-gray-500"}`}>
        {newsletter.privacyNote}
        {!connected && (
          <span className="block mt-1 opacity-80">
            (MailerLite kapcsolat beállítása folyamatban.)
          </span>
        )}
      </p>
    </div>
  );
}
