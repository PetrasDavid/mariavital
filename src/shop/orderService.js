import { siteConfig } from "../config/config";
import { formatPrice } from "../config/productsData";
import { shopConfig } from "./shopConfig";

export function createOrderId() {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `MV-${stamp}-${rand}`;
}

export function buildOrderPayload({ customer, cart, orderId }) {
  const { items, subtotal, shipping, total, currency, itemCount } = cart;
  return {
    orderId,
    createdAt: new Date().toISOString(),
    customer,
    itemCount,
    subtotal,
    shipping,
    total,
    currency,
    lines: items.map((line) => ({
      productId: line.productId,
      name: line.product.name,
      quantity: line.quantity,
      unitPrice: line.unitPrice,
      lineTotal: line.lineTotal,
    })),
  };
}

export function formatOrderEmailBody(order) {
  const lines = order.lines
    .map(
      (l) =>
        `- ${l.name} × ${l.quantity} = ${formatPrice(l.lineTotal, order.currency)}`,
    )
    .join("\n");

  const c = order.customer;
  return [
    `Rendelésazonosító: ${order.orderId}`,
    `Dátum: ${new Date(order.createdAt).toLocaleString("hu-HU")}`,
    "",
    "Vásárló adatai:",
    `Név: ${c.name}`,
    `Email: ${c.email}`,
    `Telefon: ${c.phone}`,
    "",
    "Szállítási cím:",
    `${c.zip} ${c.city}`,
    c.address,
    c.note ? `Megjegyzés: ${c.note}` : "",
    "",
    "Tételek:",
    lines,
    "",
    `Részösszeg: ${formatPrice(order.subtotal, order.currency)}`,
    `Szállítás: ${order.shipping === 0 ? "Ingyenes" : formatPrice(order.shipping, order.currency)}`,
    `Végösszeg: ${formatPrice(order.total, order.currency)}`,
    "",
    "Ez egy weboldali rendeléskérés — a fizetés és szállítás egyeztetése következik.",
  ]
    .filter((row) => row !== "")
    .join("\n");
}

function getOrderRecipient() {
  return siteConfig.contact.orderEmail || siteConfig.contact.email;
}

function formatOrderItemsForEmail(order) {
  return order.lines
    .map(
      (l, i) =>
        `${i + 1}. ${l.name}  × ${l.quantity}  —  ${formatPrice(l.lineTotal, order.currency)}`,
    )
    .join("\n");
}

/**
 * Send order via FormSubmit (no Outlook / mail app).
 * Uses formSubmitHash after activation (from the FormSubmit email).
 * Field keys become the email labels — keep them short and Hungarian.
 */
async function submitViaFormSubmit(order) {
  const hash = siteConfig.contact.formSubmitHash;
  const to = getOrderRecipient();
  const target = hash || to;
  if (!target) throw new Error("Nincs beállítva rendelési e-mail cím.");

  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(target)}`;
  const pageUrl =
    typeof window !== "undefined" ? window.location.href : "https://www.marcsivital.eu/penztar";
  const c = order.customer;
  const note = (c.note || "").trim();

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `Új rendelés — ${order.orderId} | marcsivital`,
      _template: "box",
      _captcha: false,
      _replyto: c.email,
      // FormSubmit AJAX + kikapcsolt captcha mellett az _autoresponse NEM működik.
      // A vevő a rendelés másolatát kapja (_cc).
      _cc: c.email,
      _url: pageUrl,
      // `email` mező kell a FormSubmit reply / CC működéséhez
      email: c.email,
      "Rendelés azonosító": order.orderId,
      Dátum: new Date(order.createdAt).toLocaleString("hu-HU"),
      "Vásárló neve": c.name,
      Telefon: c.phone,
      "Szállítási cím": `${c.zip} ${c.city}, ${c.address}`,
      ...(note ? { Megjegyzés: note } : {}),
      Tételek: formatOrderItemsForEmail(order),
      Részösszeg: formatPrice(order.subtotal, order.currency),
      Szállítás:
        order.shipping === 0
          ? "Ingyenes"
          : formatPrice(order.shipping, order.currency),
      Végösszeg: formatPrice(order.total, order.currency),
      Infó: "Weboldali rendelésigény — a fizetés és szállítás egyeztetése következik.",
    }),
  });

  const data = await response.json().catch(() => ({}));
  const failed = !response.ok || data.success === "false" || data.success === false;
  if (failed) {
    const raw = String(data.message || "");
    if (/activat/i.test(raw)) {
      throw new Error(
        "A FormSubmit űrlap még nincs aktiválva. Nyisd meg a FormSubmit e-mailt a Gmailben, és kattints az „ACTIVATE FORM” gombra, majd próbáld újra.",
      );
    }
    throw new Error(raw || "Order submit failed");
  }
  return { ok: true, method: "formsubmit" };
}

async function submitViaEndpoint(endpoint, order) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ type: "shop_order", ...order }),
  });
  if (!response.ok) throw new Error("Order submit failed");
  return { ok: true, method: "endpoint" };
}

/**
 * Submit order:
 * 1) custom formEndpoint / orderEndpoint if set
 * 2) FormSubmit → orderEmail (Gmail, no mail app)
 * 3) mailto fallback only if orderSubmitMode === "mailto"
 */
export async function submitOrder(order) {
  const endpoint = siteConfig.formEndpoint || siteConfig.orderEndpoint || null;
  if (endpoint) return submitViaEndpoint(endpoint, order);

  const mode = siteConfig.orderSubmitMode || "formsubmit";
  if (mode === "mailto") {
    const orderTo = getOrderRecipient();
    const subject = encodeURIComponent(`Rendeléskérés — ${order.orderId}`);
    const body = encodeURIComponent(formatOrderEmailBody(order));
    window.location.href = `mailto:${orderTo}?subject=${subject}&body=${body}`;
    return { ok: true, method: "mailto" };
  }

  return submitViaFormSubmit(order);
}

export function saveLastOrder(order) {
  try {
    localStorage.setItem(shopConfig.orderStorageKey, JSON.stringify(order));
  } catch {
    /* ignore */
  }
}

export function loadLastOrder() {
  try {
    const raw = localStorage.getItem(shopConfig.orderStorageKey);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
