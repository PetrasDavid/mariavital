import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { shopConfig } from "../../shop/shopConfig";

export default function CartBadge({ className = "" }) {
  const { itemCount, enabled } = useCart();

  if (!enabled || !shopConfig.enabled) return null;

  return (
    <Link
      to="/kosar"
      aria-label={`Kosár${itemCount ? `, ${itemCount} tétel` : ""}`}
      className={`relative inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors ${className}`}
    >
      <ShoppingBag className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-[1.15rem] h-[1.15rem] px-1 rounded-full bg-accent-500 text-white text-[10px] font-bold flex items-center justify-center">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </Link>
  );
}
