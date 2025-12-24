"use client";

import { useCart } from "@/components/cart/CartContext";

export default function CartPage() {
  const { items } = useCart();

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">
        Your Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gunmetal p-6 rounded-xl flex justify-between"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-400">
                  ₹{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
