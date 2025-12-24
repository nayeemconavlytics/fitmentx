"use client";

import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { items, removeItem, clearCart } = useCart();

  return (
    <div className="fixed top-20 right-6 w-80 bg-gunmetal p-6 rounded-xl shadow-2xl z-50">
      <h3 className="font-bold mb-4">
        Cart ({items.length})
      </h3>

      {items.length === 0 ? (
        <p className="text-gray-400 text-sm">No items added</p>
      ) : (
        <>
          <ul className="space-y-3 mb-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center text-sm border-b border-gray-700 pb-2"
              >
                <div>
                  <p>{item.name}</p>
                  <p className="text-xs opacity-60">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-xs hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={clearCart}
            className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
