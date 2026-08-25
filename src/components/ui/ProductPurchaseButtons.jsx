import { ShoppingBag, UserPlus, Info } from "lucide-react";
import { siteConfig } from "../../config/config";
import { canAddToCart } from "../../config/productsData";
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";
import { shopConfig } from "../../shop/shopConfig";

/**
 * Purchase CTAs:
 * 1) Retail → add to on-site cart (or affiliate link as fallback)
 * 2) Manufacturer carton → external register link
 * 3) Optional product info button
 */
export default function ProductPurchaseButtons({
  product,
  retailUrl,
  registerUrl,
  className = "",
  size = "card",
  onClick,
  onInfoClick,
  disabled = false,
  showInfoButton = false,
}) {
  const { addItem, enabled: cartEnabled } = useCart();
  const { push } = useToast();
  const register =
    registerUrl || siteConfig.links.registerUrl || siteConfig.links.affiliateUrl;
  const retailFallback =
    retailUrl || siteConfig.links.retailUrl || siteConfig.links.affiliateUrl;

  const useCartForRetail =
    cartEnabled &&
    shopConfig.enabled &&
    product &&
    canAddToCart(product) &&
    !disabled;

  const isModal = size === "modal";
  const base =
    "inline-flex items-start justify-center gap-2 w-full font-medium text-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-xl whitespace-normal leading-snug";

  const retailClasses = isModal
    ? `${base} px-5 py-3.5 text-sm sm:text-base bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20`
    : `${base} px-3 py-2.5 text-xs sm:text-sm bg-brand-600 text-white hover:bg-brand-700`;

  const registerClasses = isModal
    ? `${base} px-5 py-3.5 text-sm sm:text-base border-2 border-brand-600 text-brand-800 bg-white hover:bg-brand-50`
    : `${base} px-3 py-2.5 text-xs sm:text-sm border-2 border-brand-600 text-brand-800 bg-white hover:bg-brand-50`;

  const infoClasses = isModal
    ? `${base} px-5 py-3.5 text-sm sm:text-base border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100`
    : `${base} px-3 py-2.5 text-xs sm:text-sm border border-gray-200 text-gray-700 bg-gray-50 hover:bg-gray-100`;

  const iconClass = isModal ? "h-5 w-5 shrink-0 mt-0.5" : "h-4 w-4 shrink-0 mt-0.5";
  const disabledClasses = disabled ? "pointer-events-none opacity-50" : "";

  const handleRetailClick = (e) => {
    onClick?.(e);
    if (!useCartForRetail) return;
    e.preventDefault();
    e.stopPropagation();
    const ok = addItem(product.id, 1);
    if (ok) {
      push({
        title: "Kosárba került",
        message: product.name,
        href: "/kosar",
        hrefLabel: "Kosár megnyitása →",
      });
    }
  };

  const handleInfoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClick?.(e);
    onInfoClick?.(e);
  };

  const cartonPrice = product?.cartonPrice ?? 54000;
  const cartonUnits = product?.cartonUnits;
  const cartonLabel = product?.cartonNote
    ? `A gyártótól kartonra vásárolok — ${product.cartonNote}, ${cartonPrice.toLocaleString("hu-HU")} Ft`
    : cartonUnits
      ? `A gyártótól kartonra vásárolok — 1 karton = ${cartonUnits} db, ${cartonPrice.toLocaleString("hu-HU")} Ft`
      : `A gyártótól kartonra vásárolok — a karton (1#) ára ${cartonPrice.toLocaleString("hu-HU")} Ft`;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {useCartForRetail ? (
        <button
          type="button"
          className={`${retailClasses} ${disabledClasses}`}
          onClick={handleRetailClick}
          disabled={disabled}
        >
          <ShoppingBag className={iconClass} aria-hidden />
          <span>Kiskereskedelmi áron darabra vásárolok és kérem</span>
        </button>
      ) : (
        <a
          href={disabled ? undefined : retailFallback}
          target="_blank"
          rel="noopener noreferrer"
          className={`${retailClasses} ${disabledClasses}`}
          onClick={onClick}
          aria-disabled={disabled}
        >
          <ShoppingBag className={iconClass} aria-hidden />
          <span>Kiskereskedelmi áron darabra vásárolok és kérem</span>
        </a>
      )}

      <a
        href={disabled ? undefined : register}
        target="_blank"
        rel="noopener noreferrer"
        className={`${registerClasses} ${disabledClasses}`}
        onClick={onClick}
        aria-disabled={disabled}
      >
        <UserPlus className={iconClass} aria-hidden />
        <span>{cartonLabel}</span>
      </a>

      {showInfoButton && onInfoClick && (
        <button type="button" className={infoClasses} onClick={handleInfoClick}>
          <Info className={iconClass} aria-hidden />
          <span>Termékinformáció</span>
        </button>
      )}
    </div>
  );
}
