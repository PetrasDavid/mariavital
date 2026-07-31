/**
 * Webshop foundation settings.
 * Expand later: payment provider, shipping, VAT, inventory API.
 */
export const shopConfig = {
  /** Show cart UI, add-to-cart, /kosar */
  enabled: true,
  /** When false, /penztar is a placeholder (no payment yet) */
  checkoutEnabled: false,
  currency: "Ft",
  storageKey: "marcsivital_cart_v1",
  /** Free shipping threshold (placeholder for later) */
  freeShippingFrom: null,
  shippingNote:
    "A saját webshop fizetése és szállítása hamarosan elérhető. Addig a Flavon hivatalos webshopján keresztül is vásárolhatsz.",
};
