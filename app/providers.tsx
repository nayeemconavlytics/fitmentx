"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { CartProvider } from "@/components/cart/CartContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <Header />
      <CartDrawer /> {/* ✅ ONLY HERE */}
      {children}
      <Footer />
    </CartProvider>
  );
}
