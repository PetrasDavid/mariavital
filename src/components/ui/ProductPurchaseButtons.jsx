import { ShoppingBag, UserPlus } from "lucide-react";
import { siteConfig } from "../../config/config";

/**
 * Two purchase CTAs: retail piece purchase vs. manufacturer registration.
 */
export default function ProductPurchaseButtons({
  retailUrl,
  registerUrl,
  className = "",
  size = "card",
  onClick,
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

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <a
        href={retail}
        target="_blank"
        rel="noopener noreferrer"
        className={retailClasses}
        onClick={onClick}
      >
        <ShoppingBag className={iconClass} aria-hidden />
        <span>Kiskereskedelmi áron darabra vásárolok és kérem</span>
      </a>
      <a
        href={register}
        target="_blank"
        rel="noopener noreferrer"
        className={registerClasses}
        onClick={onClick}
      >
        <UserPlus className={iconClass} aria-hidden />
        <span>Közvetlen a gyártó cégtől vásárolok és regisztrálok</span>
      </a>
    </div>
  );
}
