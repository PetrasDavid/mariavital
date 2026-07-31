import { CreditCard, Construction, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../config/productsData";
import { shopConfig } from "../shop/shopConfig";
import { siteConfig } from "../config/config";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

/**
 * Checkout foundation — payment integration comes later.
 * When shopConfig.checkoutEnabled is true, wire a real provider here.
 */
export default function CheckoutPage() {
  const { items, subtotal, currency, itemCount, checkoutEnabled } = useCart();
  const affiliate = siteConfig.links.affiliateUrl;

  return (
    <>
      <PageHero
        eyebrow="Webshop"
        title="Pénztár"
        subtitle="A fizetési folyamat alapja készen áll — a valódi online fizetés hamarosan jön."
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
            {!checkoutEnabled && (
              <div className="flex gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100 mb-8">
                <Construction className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-950">Fejlesztés alatt</p>
                  <p className="text-sm text-amber-900/80 mt-1 leading-relaxed">
                    {shopConfig.shippingNote}
                  </p>
                </div>
              </div>
            )}

            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-6">Nincs tétel a kosárban.</p>
                <Button to="/termekek" variant="secondary">
                  Termékekhez
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Rendelés összegzése</h2>
                <ul className="space-y-3 mb-6">
                  {items.map((line) => (
                    <li
                      key={line.productId}
                      className="flex justify-between gap-4 text-sm border-b border-gray-50 pb-3"
                    >
                      <span className="text-gray-700">
                        {line.product.name}{" "}
                        <span className="text-gray-400">× {line.quantity}</span>
                      </span>
                      <span className="font-semibold text-gray-900 shrink-0">
                        {formatPrice(line.lineTotal, currency)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between text-lg font-bold text-gray-900 mb-2">
                  <span>Részösszeg ({itemCount} db)</span>
                  <span>{formatPrice(subtotal, currency)}</span>
                </div>
                <p className="text-xs text-gray-500 mb-8">
                  Szállítás és ÁFA számítás a későbbi fizetési integráció része lesz.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button to="/kosar" variant="outline" icon={ArrowLeft} iconPosition="left">
                    Vissza a kosárhoz
                  </Button>
                  {checkoutEnabled ? (
                    <Button variant="secondary" icon={CreditCard} disabled>
                      Fizetés (hamarosan)
                    </Button>
                  ) : (
                    <Button href={affiliate} external variant="secondary" icon={CreditCard}>
                      Vásárlás a Flavon webshopban
                    </Button>
                  )}
                </div>
              </>
            )}

            <p className="text-xs text-gray-400 mt-8 leading-relaxed">
              A saját online fizetés bekapcsolása után ezen az oldalon történik majd a rendelés leadása.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
