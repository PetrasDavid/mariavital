import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2, ArrowRight, Truck } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../config/productsData";
import { shopConfig } from "../shop/shopConfig";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

export default function CartPage() {
  const {
    items,
    itemCount,
    subtotal,
    shipping,
    total,
    amountToFreeShipping,
    freeShippingFrom,
    currency,
    setQuantity,
    removeItem,
    clearCart,
  } = useCart();

  return (
    <>
      <PageHero
        eyebrow="Webshop"
        title="Kosár"
        subtitle="A kosár mentve marad a böngésződben. A pénztárnál megadhatod a szállítási adatokat."
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-16 rounded-3xl border border-dashed border-gray-200 bg-gray-50">
              <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">A kosár üres</h2>
              <p className="text-gray-600 mb-6">Válassz termékeket a katalógusból.</p>
              <Button to="/termekek" variant="secondary" icon={ArrowRight}>
                Termékek megtekintése
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-4">
                {items.map((line) => (
                  <div
                    key={line.productId}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-gray-100 bg-white"
                  >
                    <div className="w-full sm:w-24 h-28 sm:h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                      {line.product.image ? (
                        <img
                          src={line.product.image}
                          alt={line.product.imageAlt || line.product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900">{line.product.name}</h3>
                      <p className="text-sm text-brand-700 font-semibold mt-1">
                        {formatPrice(line.unitPrice, currency)}
                        {line.product.unit ? ` ${line.product.unit}` : ""}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-4">
                        <div className="inline-flex items-center rounded-full border border-gray-200">
                          <button
                            type="button"
                            aria-label="Csökkentés"
                            className="p-2 text-gray-600 hover:text-brand-700"
                            onClick={() => setQuantity(line.productId, line.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Növelés"
                            className="p-2 text-gray-600 hover:text-brand-700"
                            onClick={() => setQuantity(line.productId, line.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(line.productId)}
                          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                          Törlés
                        </button>
                      </div>
                    </div>
                    <div className="sm:text-right font-bold text-gray-900 shrink-0">
                      {formatPrice(line.lineTotal, currency)}
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                >
                  Kosár ürítése
                </button>
              </div>

              <aside className="rounded-3xl border border-gray-100 bg-brand-50/60 p-6 h-fit lg:sticky lg:top-28 space-y-4">
                <h2 className="text-lg font-bold text-gray-900">Összesítő</h2>

                {amountToFreeShipping > 0 && (
                  <div className="flex gap-2 p-3 rounded-xl bg-white border border-brand-100 text-sm text-brand-800">
                    <Truck className="h-4 w-4 shrink-0 mt-0.5" />
                    <p>
                      Még{" "}
                      <strong>{formatPrice(amountToFreeShipping, currency)}</strong> a
                      ingyenes szállításhoz
                      {freeShippingFrom
                        ? ` (${formatPrice(freeShippingFrom, currency)}-tól)`
                        : ""}
                      .
                    </p>
                  </div>
                )}

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Tételek</span>
                    <span>{itemCount} db</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Részösszeg</span>
                    <span>{formatPrice(subtotal, currency)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Szállítás (becsült)</span>
                    <span>
                      {shipping === 0 ? "Ingyenes" : formatPrice(shipping, currency)}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-brand-100">
                  <span>Végösszeg</span>
                  <span>{formatPrice(total, currency)}</span>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed">{shopConfig.shippingNote}</p>

                <Button
                  to="/penztar"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  icon={ArrowRight}
                >
                  Tovább a pénztárhoz
                </Button>
                <Button to="/termekek" variant="outline" size="md" className="w-full">
                  Vásárlás folytatása
                </Button>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
