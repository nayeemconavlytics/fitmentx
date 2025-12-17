import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "BMW E36 Widebody Kit",
    vehicle: "BMW E36",
    price: 1899,
    image: "https://via.placeholder.com/400",
  },
  {
    id: 2,
    name: "Mustang Fender Flares",
    vehicle: "Ford Mustang",
    price: 899,
    image: "https://via.placeholder.com/400",
  },
];

export default function Shop() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Shop Parts</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
