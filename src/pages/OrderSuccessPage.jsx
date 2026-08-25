import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle, Package } from "lucide-react";
import { loadLastOrder } from "../shop/orderService";
import { formatPrice } from "../config/productsData";
import { siteConfig } from "../config/config";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

export default function OrderSuccessPage() {
  const location = useLocation();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const saved = loadLastOrder();
    if (saved) setOrder(saved);
  }, []);

  const orderId = location.state?.orderId || order?.orderId;

  return (
    <>
      <PageHero
        eyebrow="Webshop"
        title="Köszönjük a rendelést!"
        subtitle="A rendeléskérésed megérkezett — Marcsi hamarosan felveszi veled a kapcsolatot a fizetés és szállítás egyeztetéséhez."
        compact
      />

      <section className="pb-20 md:pb-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-100 bg-white p-8 md:p-10 shadow-sm text-center">
            <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="h-8 w-8" />
            </div>
            {orderId && (
              <p className="text-sm text-gray-500 mb-2">
                Rendelésazonosító:{" "}
                <span className="font-mono font-semibold text-gray-800">{orderId}</span>
              </p>
            )}
            <p className="text-gray-600 leading-relaxed mb-8">
              Ellenőrizd az e-mail fiókodat, és ha a böngésző megnyitotta a leveleződet,
              küldd el az előkészített üzenetet. Kérdés esetén írj ide:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-brand-700 font-medium hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>

            {order?.lines?.length > 0 && (
              <div className="text-left rounded-2xl bg-gray-50 border border-gray-100 p-5 mb-8">
                <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Package className="h-4 w-4 text-brand-600" />
                  Rendelés összefoglaló
                </h2>
                <ul className="space-y-2 text-sm text-gray-700 mb-3">
                  {order.lines.map((l) => (
                    <li key={l.productId} className="flex justify-between gap-3">
                      <span>
                        {l.name} × {l.quantity}
                      </span>
                      <span className="font-medium shrink-0">
                        {formatPrice(l.lineTotal, order.currency)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between font-bold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Végösszeg</span>
                  <span>{formatPrice(order.total, order.currency)}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/termekek" variant="secondary">
                Vissza a termékekhez
              </Button>
              <Button to="/" variant="outline">
                Kezdőlap
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
