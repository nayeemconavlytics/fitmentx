type Build = {
  id: number;
  title: string;
  vehicle: string;
  category: string;
  image: string;
};

const builds: Build[] = [
  {
    id: 1,
    title: "BMW M4 Aggressive Fitment",
    vehicle: "BMW M4",
    category: "BMW Performance",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Monster Truck Extreme Lift",
    vehicle: "Ford F-250",
    category: "Monster Build",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Widebody Street Build",
    vehicle: "Nissan 370Z",
    category: "Widebody",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    title: "Off-Road Mud Setup",
    vehicle: "Jeep Wrangler",
    category: "Off-Road",
    image: "https://via.placeholder.com/600x400",
  },
];

export default function BuildsPage() {
  return (
    <main className="bg-background min-h-screen">

      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Community <span className="text-accent">Builds</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Real builds from real enthusiasts. Browse aggressive fitments,
          monster trucks, and precision BMW performance setups.
        </p>
      </section>

      {/* FILTER BAR */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap gap-4 justify-center">
          {["All", "BMW Performance", "Monster Build", "Widebody", "Off-Road"].map(
            (filter) => (
              <button
                key={filter}
                className="px-6 py-2 rounded-full border border-gray-700 text-sm hover:border-accent transition"
              >
                {filter}
              </button>
            )
          )}
        </div>
      </section>

      {/* BUILDS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {builds.map((build) => (
            <div
              key={build.id}
              className="group bg-gunmetal rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={build.image}
                  alt={build.title}
                  className="w-full h-60 object-cover"
                />

                {/* CATEGORY TAG */}
                <span
                  className={`absolute top-4 left-4 px-4 py-1 text-xs font-semibold rounded-full ${
                    build.category === "Monster Build"
                      ? "bg-monster text-black"
                      : build.category === "BMW Performance"
                      ? "bg-bmw text-white"
                      : "bg-accent text-white"
                  }`}
                >
                  {build.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{build.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {build.vehicle}
                </p>

                <a
                  href="#"
                  className="inline-block text-sm font-semibold text-accent hover:underline"
                >
                  View Build →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
