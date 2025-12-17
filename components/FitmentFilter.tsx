export default function FitmentFilter() {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">
        Find Parts That Fit Your Vehicle
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <select className="bg-black border border-gray-700 p-2 rounded">
          <option>Year</option>
        </select>
        <select className="bg-black border border-gray-700 p-2 rounded">
          <option>Make</option>
        </select>
        <select className="bg-black border border-gray-700 p-2 rounded">
          <option>Model</option>
        </select>
        <select className="bg-black border border-gray-700 p-2 rounded">
          <option>Trim</option>
        </select>
        <button className="bg-red-600 rounded font-semibold hover:bg-red-700">
          Search
        </button>
      </div>
    </div>
  );
}
