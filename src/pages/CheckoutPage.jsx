import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Loader2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../config/productsData";
import { shopConfig } from "../shop/shopConfig";
import {
  buildOrderPayload,
  createOrderId,
  saveLastOrder,
  submitOrder,
} from "../shop/orderService";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  city: "",
  address: "",
  note: "",
};

export default function CheckoutPage() {
  const navigate = useNavigate();
  const cart = useCart();
  const {
    items,
    subtotal,
    shipping,
    total,
    currency,
    itemCount,
    clearCart,
    orderRequestEnabled,
  } = cart;

  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!items.length) {
      setError("A kosár üres.");
      return;
    }
    if (!orderRequestEnabled) {
      setError("A rendelés leadása jelenleg nem elérhető.");
      return;
    }

    setStatus("submitting");
    try {
      const orderId = createOrderId();
      const order = buildOrderPayload({ customer: form, cart, orderId });
      await submitOrder(order);
      saveLastOrder(order);
      clearCart();
      navigate("/rendeles-sikeres", { state: { orderId } });
    } catch {
      setStatus("idle");
      setError(
        "Nem sikerült elküldeni a rendelést. Próbáld újra, vagy írj e-mailt közvetlenül.",
      );
    }
  };

  const fieldClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all";

  return (
    <>
      <PageHero
        eyebrow="Webshop"
        title="Pénztár"
        subtitle="Add meg az adataidat — Marcsi egyezteti veled a fizetést és a szállítást."
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="max-w-xl mx-auto text-center py-12 rounded-3xl border border-dashed border-gray-200 bg-gray-50">
              <p className="text-gray-600 mb-6">Nincs tétel a kosárban.</p>
              <Button to="/termekek" variant="secondary">
                Termékekhez
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-5 gap-10">
              <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
                <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm space-y-5">
                  <h2 className="text-lg font-bold text-gray-900">Kapcsolattartás</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Teljes név *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={onChange}
                        className={fieldClass}
                        placeholder="Példa Anna"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        E-mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={onChange}
                        className={fieldClass}
                        placeholder="email@pelda.hu"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Telefon *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={onChange}
                        className={fieldClass}
                        placeholder="+36 30 123 4567"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm space-y-5">
                  <h2 className="text-lg font-bold text-gray-900">Szállítási cím</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Irányítószám *
                      </label>
                      <input
                        id="zip"
                        name="zip"
                        required
                        value={form.zip}
                        onChange={onChange}
                        className={fieldClass}
                        placeholder="1234"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Település *
                      </label>
                      <input
                        id="city"
                        name="city"
                        required
                        value={form.city}
                        onChange={onChange}
                        className={fieldClass}
                        placeholder="Budapest"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Utca, házszám *
                      </label>
                      <input
                        id="address"
                        name="address"
                        required
                        value={form.address}
                        onChange={onChange}
                        className={fieldClass}
                        placeholder="Példa utca 12. 3/1"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Megjegyzés
                      </label>
                      <textarea
                        id="note"
                        name="note"
                        rows={3}
                        value={form.note}
                        onChange={onChange}
                        className={`${fieldClass} resize-none`}
                        placeholder="Pl. kapucsengő, preferált átvételi idő…"
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">{error}</p>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button to="/kosar" variant="outline" icon={ArrowLeft} iconPosition="left">
                    Vissza a kosárhoz
                  </Button>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 rounded-full font-semibold px-8 py-4 bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25 disabled:opacity-60 transition-all"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Küldés...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Rendelés leadása
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{shopConfig.shippingNote}</p>
              </form>

              <aside className="lg:col-span-2">
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 sticky top-28">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Rendelés összefoglaló</h2>
                  <ul className="space-y-3 mb-5">
                    {items.map((line) => (
                      <li
                        key={line.productId}
                        className="flex justify-between gap-3 text-sm border-b border-gray-200/70 pb-3"
                      >
                        <span className="text-gray-700 min-w-0">
                          <span className="font-medium text-gray-900 line-clamp-2">
                            {line.product.name}
                          </span>
                          <span className="text-gray-400 block">× {line.quantity}</span>
                        </span>
                        <span className="font-semibold text-gray-900 shrink-0">
                          {formatPrice(line.lineTotal, currency)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>Tételek</span>
                      <span>{itemCount} db</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Részösszeg</span>
                      <span>{formatPrice(subtotal, currency)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Szállítás</span>
                      <span>
                        {shipping === 0 ? "Ingyenes" : formatPrice(shipping, currency)}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-200">
                    <span>Végösszeg</span>
                    <span>{formatPrice(total, currency)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Vagy{" "}
                    <Link to="/termekek" className="text-brand-700 font-medium hover:underline">
                      folytasd a vásárlást
                    </Link>
                    .
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
