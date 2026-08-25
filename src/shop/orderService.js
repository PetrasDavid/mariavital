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

/**
 * Submit order: prefer formEndpoint if set, otherwise open mailto to distributor.
 * Returns { ok, method }.
 */
export async function submitOrder(order) {
  const endpoint = siteConfig.formEndpoint || siteConfig.orderEndpoint || null;

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ type: "shop_order", ...order }),
    });
    if (!response.ok) throw new Error("Order submit failed");
    return { ok: true, method: "endpoint" };
  }

  const subject = encodeURIComponent(`Rendeléskérés — ${order.orderId}`);
  const body = encodeURIComponent(formatOrderEmailBody(order));
  window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  return { ok: true, method: "mailto" };
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
