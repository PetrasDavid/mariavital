import { siteConfig } from "../config/config";
import { formatPrice } from "../config/productsData";
import { submitToFormSubmit } from "../utils/formSubmit";
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

function formatCustomerConfirmation(order) {
  const shippingText =
    order.shipping === 0
      ? "Ingyenes"
      : formatPrice(order.shipping, order.currency);
  const items = formatOrderItemsForEmail(order);

  return [
    `Kedves ${order.customer.name || "Vásárló"}!`,
    "",
    "Köszönjük a vásárlást és a bizalmadat!",
    "Örömmel fogadtuk a rendelésigényedet — sikeresen megérkezett hozzánk.",
    "",
    "A rendelésed:",
    items,
    "",
    `Részösszeg: ${formatPrice(order.subtotal, order.currency)}`,
    `Szállítás: ${shippingText}`,
    `Végösszeg (minden költséggel): ${formatPrice(order.total, order.currency)}`,
    "",
    "Marcsi hamarosan felveszi veled a kapcsolatot a fizetés és a szállítás egyeztetése kapcsán.",
    "",
    `Rendelésazonosító: ${order.orderId}`,
  ].join("\n");
}

/**
 * Send order via FormSubmit (no Outlook / mail app) — same path as contact forms.
 * Buyer gets a CC with the same content (items, totals, next steps).
 */
async function submitViaFormSubmit(order) {
  const c = order.customer;
  const note = (c.note || "").trim();
  const shippingText =
    order.shipping === 0
      ? "Ingyenes"
      : formatPrice(order.shipping, order.currency);

  await submitToFormSubmit({
    subject: `Rendelés visszaigazolás — ${order.orderId} | marcsivital`,
    replyTo: c.email,
    cc: [c.email],
    fields: {
      email: c.email,
      "Visszaigazolás a vásárlónak": formatCustomerConfirmation(order),
      "Rendelés azonosító": order.orderId,
      Dátum: new Date(order.createdAt).toLocaleString("hu-HU"),
      "Vásárló neve": c.name,
      Telefon: c.phone,
      "Szállítási cím": `${c.zip} ${c.city}, ${c.address}`,
      ...(note ? { Megjegyzés: note } : {}),
      "Rendelt termékek": formatOrderItemsForEmail(order),
      Részösszeg: formatPrice(order.subtotal, order.currency),
      Szállítás: shippingText,
      "Végösszeg (összesen)": formatPrice(order.total, order.currency),
      "Következő lépés":
        "Marcsi hamarosan felveszi a kapcsolatot a fizetés és a szállítás egyeztetése kapcsán.",
    },
  });
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

  // Mindig FormSubmit — soha ne nyisson Outlookot / mailto-t.
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
