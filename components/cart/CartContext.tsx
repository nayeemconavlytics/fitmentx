"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type CartItem = {
  id: string;        // ✅ ADD THIS
  name: string;
  price: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id">) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  /* LOAD CART */
  useEffect(() => {
    const saved = localStorage.getItem("fitmentx-cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  /* SAVE CART */
  useEffect(() => {
    localStorage.setItem("fitmentx-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CartItem, "id">) => {
    setItems((prev) => [
      ...prev,
      {
        ...item,
        id: crypto.randomUUID(), // ✅ UNIQUE ID
      },
    ]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
