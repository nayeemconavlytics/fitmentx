import FitmentFilter from "@/components/FitmentFilter";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION WITH VIDEO ================= */}
      <section className="relative h-[85vh] flex items-center justify-center text-center bg-background overflow-hidden">

        {/* 🔥 Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/wheel-fitment-showcase.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🌑 Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>

        {/* 🧱 Hero Content */}
        <div className="relative z-10 max-w-5xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
            Built for{" "}
            <span className="text-accent">Perfect Fitment</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Wheels • Widebody Kits • Suspension •{" "}
            <span className="text-monster font-semibold">
              Performance Parts
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="bg-accent text-white px-10 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Shop by Vehicle
            </a>

            <a
              href="/gallery"
              className="border border-gray-400 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:border-accent transition"
            >
              View Builds
            </a>
          </div>
        </div>
      </section>

      {/* ================= FLOATING FITMENT FILTER ================= */}
      <section className="-mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gunmetal rounded-xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-bmw">
              Find Parts That Fit Your Vehicle
            </h3>

            <FitmentFilter />
          </div>
        </div>
      </section>

      {/* ================= CATEGORY STRIP ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="bg-gunmetal rounded-xl p-8 hover:border hover:border-accent transition">
            <h4 className="text-lg font-bold mb-2">Wheels</h4>
            <p className="text-gray-400 text-sm">
              Street • Track • Off-Road
            </p>
          </div>

          <div className="bg-gunmetal rounded-xl p-8 hover:border hover:border-accent transition">
            <h4 className="text-lg font-bold mb-2">Widebody Kits</h4>
            <p className="text-gray-400 text-sm">
              Aggressive stance
            </p>
          </div>

          <div className="bg-gunmetal rounded-xl p-8 hover:border hover:border-accent transition">
            <h4 className="text-lg font-bold mb-2">Suspension</h4>
            <p className="text-gray-400 text-sm">
              Lift • Lower • Performance
            </p>
          </div>

          <div className="bg-gunmetal rounded-xl p-8 hover:border hover:border-accent transition">
            <h4 className="text-lg font-bold mb-2">Monster Builds</h4>
            <p className="text-monster text-sm font-semibold">
              Extreme setups
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
