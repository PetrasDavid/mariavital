import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2, ArrowRight, Truck, Package } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../config/productsData";
import { shopConfig } from "../shop/shopConfig";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import SeoHead from "../components/ui/SeoHead";
import { pageSeo } from "../config/seoData";

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

  const freeProgress =
    freeShippingFrom != null && freeShippingFrom > 0
      ? Math.min(100, Math.round((subtotal / freeShippingFrom) * 100))
      : 100;

  return (
    <>
      <SeoHead {...pageSeo.cart} />
      <PageHero
        eyebrow="Webshop"
        title="Kosár"
        subtitle="A tételek mentve maradnak a böngésződben. A következő lépés egy rendelésigény — a fizetést Marcsi egyezteti."
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-16 rounded-3xl border border-dashed border-gray-200 bg-gray-50">
              <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2">A kosár üres</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Válassz Flavon termékeket vagy összeállított csomagokat, majd térj vissza ide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button to="/termekek" variant="secondary" icon={ArrowRight}>
                  Termékek
                </Button>
                <Button to="/csomagok" variant="outline" icon={Package} iconPosition="left">
                  Csomagok
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
              <div className="lg:col-span-2 space-y-4">
                <p className="text-sm text-gray-500">
                  {itemCount} tétel a kosárban
                </p>
                {items.map((line) => (
                  <div
                    key={line.productId}
                    className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 rounded-2xl border border-gray-100 bg-white shadow-sm"
                  >
                    <div className="w-full sm:w-28 h-36 sm:h-28 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0 flex items-center justify-center p-1.5">
                      {line.product.image ? (
                        <img
                          src={line.product.image}
                          alt={line.product.imageAlt || line.product.name}
                          className="max-w-full max-h-full w-auto h-auto object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                          <Package className="h-8 w-8" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <h3 className="font-bold text-gray-900 leading-snug">
                        {line.product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Egységár:{" "}
                        <span className="text-brand-700 font-semibold">
                          {formatPrice(line.unitPrice, currency)}
                          {line.product.unit ? ` ${line.product.unit}` : ""}
                        </span>
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-4">
                        <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50">
                          <button
                            type="button"
                            aria-label="Csökkentés"
                            className="p-2.5 text-gray-600 hover:text-brand-700"
                            onClick={() => setQuantity(line.productId, line.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-9 text-center text-sm font-bold">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Növelés"
                            className="p-2.5 text-gray-600 hover:text-brand-700"
                            onClick={() => setQuantity(line.productId, line.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="font-bold text-gray-900">
                            {formatPrice(line.lineTotal, currency)}
                          </p>
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

              <aside className="rounded-3xl border border-brand-100 bg-brand-50/70 p-6 h-fit lg:sticky lg:top-28 space-y-5">
                <h2 className="text-lg font-bold text-gray-900">Összesítő</h2>

                {freeShippingFrom != null && (
                  <div className="space-y-2">
                    <div className="flex gap-2 text-sm text-brand-800">
                      <Truck className="h-4 w-4 shrink-0 mt-0.5" />
                      {amountToFreeShipping > 0 ? (
                        <p>
                          Még{" "}
                          <strong>{formatPrice(amountToFreeShipping, currency)}</strong> az
                          ingyenes szállításhoz.
                        </p>
                      ) : (
                        <p>
                          <strong>Ingyenes szállítás</strong> — elérted a{" "}
                          {formatPrice(freeShippingFrom, currency)} határt.
                        </p>
                      )}
                    </div>
                    <div className="h-2 rounded-full bg-white overflow-hidden border border-brand-100">
                      <div
                        className="h-full rounded-full bg-brand-600 transition-all duration-300"
                        style={{ width: `${freeProgress}%` }}
                      />
                    </div>
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
                <p className="text-center text-xs text-gray-400">
                  Vagy nézd a{" "}
                  <Link to="/csomagok" className="text-brand-700 font-medium hover:underline">
                    csomagokat
                  </Link>
                </p>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
