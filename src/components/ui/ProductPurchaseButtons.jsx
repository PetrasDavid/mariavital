import { ShoppingBag, UserPlus } from "lucide-react";
import { siteConfig } from "../../config/config";

/**
 * Two purchase CTAs: retail piece purchase vs. manufacturer carton registration.
 * Manufacturer 1# carton price: 54 000 Ft.
 */
export default function ProductPurchaseButtons({
  retailUrl,
  registerUrl,
  className = "",
  size = "card",
  onClick,
  disabled = false,
}) {
  const retail = retailUrl || siteConfig.links.retailUrl || siteConfig.links.affiliateUrl;
  const register =
    registerUrl || siteConfig.links.registerUrl || siteConfig.links.affiliateUrl;

  const isModal = size === "modal";
  const base =
    "inline-flex items-start justify-center gap-2 w-full font-medium text-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-xl whitespace-normal leading-snug";

  const retailClasses = isModal
    ? `${base} px-5 py-3.5 text-sm sm:text-base bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/20`
    : `${base} px-3 py-2.5 text-xs sm:text-sm bg-brand-600 text-white hover:bg-brand-700`;

  const registerClasses = isModal
    ? `${base} px-5 py-3.5 text-sm sm:text-base border-2 border-brand-600 text-brand-800 bg-white hover:bg-brand-50`
    : `${base} px-3 py-2.5 text-xs sm:text-sm border-2 border-brand-600 text-brand-800 bg-white hover:bg-brand-50`;

  const iconClass = isModal ? "h-5 w-5 shrink-0 mt-0.5" : "h-4 w-4 shrink-0 mt-0.5";
  const disabledClasses = disabled ? "pointer-events-none opacity-50" : "";

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <a
        href={disabled ? undefined : retail}
        target="_blank"
        rel="noopener noreferrer"
        className={`${retailClasses} ${disabledClasses}`}
        onClick={onClick}
        aria-disabled={disabled}
      >
        <ShoppingBag className={iconClass} aria-hidden />
        <span>Kiskereskedelmi áron darabra vásárolok és kérem</span>
      </a>
      <a
        href={disabled ? undefined : register}
        target="_blank"
        rel="noopener noreferrer"
        className={`${registerClasses} ${disabledClasses}`}
        onClick={onClick}
        aria-disabled={disabled}
      >
        <UserPlus className={iconClass} aria-hidden />
        <span>A gyártótól kartonra vásárolok — a karton (1#) ára 54.000 Ft</span>
      </a>
    </div>
  );
}
