import { Suspense } from "react";
import { getAllProducts } from "@/lib/products";
import ShopClient from "@/components/ShopClient";
import FitmentFilter from "@/components/FitmentFilter";

export default async function ShopPage() {
  const products = getAllProducts();

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-extrabold mb-10">
        Discover <span className="text-accent">Accessories</span>
      </h1>

      {/* FILTER + PRODUCTS */}
      <Suspense
        fallback={
          <div className="space-y-6">
            <div className="h-24 bg-gunmetal animate-pulse rounded-xl" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 bg-gunmetal animate-pulse rounded-xl"
                />
              ))}
            </div>
          </div>
        }
      >
        <div className="mb-16">
          <FitmentFilter />
        </div>

        <ShopClient products={products} />
      </Suspense>
    </main>
  );
}
