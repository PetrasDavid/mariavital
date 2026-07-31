import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { canAddToCart } from "../../config/productsData";
import { shopConfig } from "../../shop/shopConfig";

export default function AddToCartButton({
  product,
  quantity = 1,
  className = "",
  onClick,
}) {
  const { addItem, enabled } = useCart();

  if (!enabled || !shopConfig.enabled) return null;
  if (!canAddToCart(product)) return null;

  const handleClick = (e) => {
    e.stopPropagation();
    onClick?.(e);
    addItem(product.id, quantity);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 w-full rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold bg-accent-500 text-white hover:bg-accent-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${className}`}
    >
      <ShoppingCart className="h-4 w-4 shrink-0" aria-hidden />
      Kosárba
    </button>
  );
}
