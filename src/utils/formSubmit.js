import { siteConfig } from "../config/config";

const FORM_SUBMIT_TIMEOUT_MS = 20000;

export function getFormSubmitRecipient() {
  return (
    siteConfig.contact.formSubmitHash ||
    siteConfig.contact.orderEmail ||
    siteConfig.contact.email
  );
}

export function getFormSubmitActionUrl() {
  const target = getFormSubmitRecipient();
  if (!target) throw new Error("Nincs beállítva fogadó e-mail cím.");
  return `https://formsubmit.co/ajax/${encodeURIComponent(target)}`;
}

/**
 * Shared FormSubmit AJAX helper (no Outlook / mailto).
 * Includes timeout so the UI never hangs forever.
 */
export async function submitToFormSubmit({
  subject,
  fields,
  replyTo,
  cc = [],
}) {
  const endpoint = getFormSubmitActionUrl();
  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://${siteConfig.brand.domain}`;

  const ccList = [...new Set(cc.filter(Boolean))].join(",");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FORM_SUBMIT_TIMEOUT_MS);

  let response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        _subject: subject,
        _template: "box",
        _captcha: false,
        _replyto: replyTo,
        ...(ccList ? { _cc: ccList } : {}),
        _url: pageUrl,
        ...fields,
      }),
    });
  } catch (err) {
    if (err?.name === "AbortError") {
      throw new Error(
        "A küldés túl sokáig tartott. Kapcsold ki a hirdetésblokkolót (AdBlock), majd próbáld újra.",
      );
    }
    throw new Error(
      "Nem sikerült kapcsolódni a levelező szolgáltatáshoz. Próbáld újra, vagy írj közvetlenül e-mailben.",
    );
  } finally {
    clearTimeout(timer);
  }

  const data = await response.json().catch(() => ({}));
  const failed =
    !response.ok || data.success === "false" || data.success === false;
  if (failed) {
    const raw = String(data.message || "");
    if (/activat/i.test(raw)) {
      throw new Error(
        "A FormSubmit űrlap még nincs aktiválva. Nyisd meg a FormSubmit e-mailt a Gmailben, és kattints az „ACTIVATE FORM” gombra, majd próbáld újra.",
      );
    }
    throw new Error(raw || "Az űrlap küldése nem sikerült.");
  }
  return { ok: true };
}

export async function submitContactMessage({
  type = "contact",
  name,
  email,
  phone,
  message,
}) {
  const isPlatinum = type === "platinum";
  const subject = isPlatinum
    ? `Platinum Team jelentkezés | marcsivital`
    : `Kapcsolatfelvétel | marcsivital`;

  const secondary = siteConfig.contact.emailSecondary;
  // Küldő másolatot kap (_cc) — FormSubmit AJAX-nál nincs külön _autoresponse
  const cc = [email, secondary].filter(Boolean);

  return submitToFormSubmit({
    subject,
    replyTo: email,
    cc,
    fields: {
      email,
      Típus: isPlatinum ? "Platinum Team jelentkezés" : "Kapcsolatfelvétel",
      Név: name,
      Telefon: phone || "-",
      Üzenet: (message || "").trim() || "-",
      Dátum: new Date().toLocaleString("hu-HU"),
      Infó: isPlatinum
        ? "Weboldali Platinum Team jelentkezés. A küldő másolatot kapott erről az e-mailről."
        : "Weboldali kapcsolatfelvétel. A küldő másolatot kapott erről az e-mailről.",
    },
  });
}
