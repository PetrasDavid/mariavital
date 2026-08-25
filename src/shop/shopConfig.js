/**
 * Webshop settings — cart, shipping estimate, order request flow.
 * Real card payment can be wired later (SimplePay / Stripe) behind checkoutEnabled.
 */
export const shopConfig = {
  enabled: true,
  /**
   * When true: show “Fizetés” primary path (payment provider TBD).
   * When false: checkout submits an order request to Marcsi (mailto / formEndpoint).
   */
  checkoutEnabled: true,
  /** Accept order requests without online payment (email to distributor) */
  orderRequestEnabled: true,
  currency: "Ft",
  storageKey: "marcsivital_cart_v1",
  orderStorageKey: "marcsivital_last_order_v1",
  /** Flat shipping fee in Ft (0 = free / TBD) */
  shippingFee: 1990,
  /** Free shipping from this subtotal (Ft); null = never */
  freeShippingFrom: 50000,
  shippingNote:
    "A rendelést Marcsi személyesen egyezteti veled (fizetés és szállítás). Online bankkártyás fizetés hamarosan érkezik.",
  minOrderNote: "Minimum 1 termék szükséges a rendeléshez.",
};

export function calcShipping(subtotal) {
  const { shippingFee, freeShippingFrom } = shopConfig;
  if (shippingFee == null || shippingFee <= 0) return 0;
  if (freeShippingFrom != null && subtotal >= freeShippingFrom) return 0;
  return shippingFee;
}
