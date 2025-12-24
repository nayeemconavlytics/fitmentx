"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Product } from "@/lib/products";
import { useCart } from "@/components/cart/CartContext";

export default function ShopClient({
  products,
}: {
  products: Product[];
}) {
  const params = useSearchParams();
  const { addItem } = useCart();

  const diameter = params.get("diameter") || "";
  const width = params.get("width") || "";
  const boltPattern = params.get("boltPattern") || "";
  const profile = params.get("profile") || "";
  const finish = params.get("finish") || "";

  const [sort, setSort] = useState("");

  const hasFilters =
    diameter || width || boltPattern || profile || finish;

  /* =======================
     FILTER PRODUCTS
  ======================= */
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (diameter && p.specs.diameter !== diameter) return false;
      if (width && p.specs.width !== width) return false;
      if (boltPattern && p.specs.boltPattern !== boltPattern) return false;
      if (profile && p.specs.profile !== profile) return false;
      if (finish && p.specs.finish !== finish) return false;
      return true;
    });
  }, [products, diameter, width, boltPattern, profile, finish]);

  /* =======================
     SORT PRODUCTS
  ======================= */
  const sortedProducts = useMemo(() => {
    const list = hasFilters ? filteredProducts : products;

    if (sort === "price-asc") {
      return [...list].sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
      return [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, filteredProducts, hasFilters, sort]);

  return (
    <>
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <p className="text-gray-400 text-sm">
          {hasFilters
            ? `Showing ${sortedProducts.length} filtered results`
            : `Showing ${sortedProducts.length} wheels`}
        </p>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full md:w-64 bg-background border border-gray-700 rounded-lg px-4 py-2"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      {sortedProducts.length === 0 ? (
        <p className="text-gray-400 text-lg">
          No wheels match the selected specifications.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <div
              key={product.sku}
              className="
                bg-gunmetal
                p-6
                rounded-xl
                flex
                flex-col
                justify-between
                transition-all
                hover:scale-[1.03]
                hover:shadow-[0_0_35px_rgba(225,6,0,0.35)]
              "
            >
              {/* PRODUCT INFO */}
              <div>
                <h3 className="font-semibold mb-1 leading-snug">
                  {product.name}
                </h3>

                <p className="text-sm opacity-70 mb-3">
                  {product.brand}
                </p>

                {/* SPECS */}
                <div className="flex flex-wrap gap-2 text-xs mb-4">
                  {product.specs.diameter && (
                    <span className="px-2 py-1 bg-background rounded">
                      {product.specs.diameter}"
                    </span>
                  )}
                  {product.specs.width && (
                    <span className="px-2 py-1 bg-background rounded">
                      {product.specs.width}
                    </span>
                  )}
                  {product.specs.boltPattern && (
                    <span className="px-2 py-1 bg-background rounded">
                      {product.specs.boltPattern}
                    </span>
                  )}
                  {product.specs.profile && (
                    <span className="px-2 py-1 bg-background rounded">
                      {product.specs.profile}
                    </span>
                  )}
                  {product.specs.finish && (
                    <span className="px-2 py-1 bg-background rounded">
                      {product.specs.finish}
                    </span>
                  )}
                </div>

                <p className="text-xl font-extrabold text-accent">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>

              {/* ADD TO CART */}
              <button
                disabled={product.price <= 0}
                onClick={() =>
                  addItem({
                    name: product.name,
                    price: product.price,
                    // id is omitted as it is not part of the expected type
                  })
                }
                className="
                  mt-6
                  bg-accent
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  tracking-wide
                  transition-all
                  hover:opacity-90
                  hover:shadow-[0_0_25px_rgba(225,6,0,0.6)]
                  active:scale-95
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                "
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
