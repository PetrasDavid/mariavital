import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { shopConfig } from "../shop/shopConfig";
import { getProductById, canAddToCart } from "../config/productsData";

const CartContext = createContext(null);

function loadCart() {
  try {
    const raw = localStorage.getItem(shopConfig.storageKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((item) => item?.productId && Number(item.quantity) > 0)
      .map((item) => ({
        productId: String(item.productId),
        quantity: Math.min(99, Math.max(1, Number(item.quantity) || 1)),
      }));
  } catch {
    return [];
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { productId, quantity = 1 } = action;
      const existing = state.find((i) => i.productId === productId);
      if (existing) {
        return state.map((i) =>
          i.productId === productId
            ? { ...i, quantity: Math.min(99, i.quantity + quantity) }
            : i,
        );
      }
      return [...state, { productId, quantity: Math.min(99, quantity) }];
    }
    case "SET_QTY": {
      const qty = Math.max(0, Math.min(99, action.quantity));
      if (qty === 0) return state.filter((i) => i.productId !== action.productId);
      return state.map((i) =>
        i.productId === action.productId ? { ...i, quantity: qty } : i,
      );
    }
    case "REMOVE":
      return state.filter((i) => i.productId !== action.productId);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(shopConfig.storageKey, JSON.stringify(items));
    } catch {
      /* ignore quota / private mode */
    }
  }, [items]);

  const value = useMemo(() => {
    const lines = items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) return null;
        const unitPrice = product.retailPrice ?? 0;
        return {
          ...item,
          product,
          unitPrice,
          lineTotal: unitPrice * item.quantity,
        };
      })
      .filter(Boolean);

    const itemCount = lines.reduce((sum, l) => sum + l.quantity, 0);
    const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);

    return {
      items: lines,
      itemCount,
      subtotal,
      currency: shopConfig.currency,
      enabled: shopConfig.enabled,
      checkoutEnabled: shopConfig.checkoutEnabled,
      addItem: (productId, quantity = 1) => {
        const product = getProductById(productId);
        if (!product || !canAddToCart(product)) return false;
        dispatch({ type: "ADD", productId, quantity });
        return true;
      },
      setQuantity: (productId, quantity) =>
        dispatch({ type: "SET_QTY", productId, quantity }),
      removeItem: (productId) => dispatch({ type: "REMOVE", productId }),
      clearCart: () => dispatch({ type: "CLEAR" }),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
