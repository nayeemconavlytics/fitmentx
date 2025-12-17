type Product = {
  id: number;
  name: string;
  vehicle: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition">
      <img src={product.image} alt={product.name} />

      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-400 text-sm">{product.vehicle}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-semibold">${product.price}</span>
          <a
            href={`/product/${product.id}`}
            className="bg-red-600 px-4 py-2 rounded text-sm hover:bg-red-700"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
}
