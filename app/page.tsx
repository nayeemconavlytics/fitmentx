import BrandAccessories from "@/components/BrandAccessories";
import Link from "next/link";

export default function Home() {
  const categories = [
    "Wheels & Tires",
    "Suspension & Lift Kits",
    "Widebody & Exterior",
    "Lighting & Electrical",
    "Interior Accessories",
    "Performance Parts",
    "Off-Road Accessories",
    "Maintenance & Tools",
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden bg-background">
        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute inset-0 w-full h-full object-cover
            brightness-125 contrast-125 saturate-110
          "
        >
          <source src="/wheel-fitment-showcase.mp4" type="video/mp4" />
        </video>

        {/* CINEMATIC OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-red-900/15 mix-blend-multiply" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl px-6">
          <h1 className="hero-title mb-6 leading-tight">
            The Ultimate{" "}
            <span className="text-accent drop-shadow-[0_0_25px_rgba(225,6,0,0.7)]">
              Auto Accessories
            </span>{" "}
            Marketplace
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Wheels, suspension, body kits, lighting, interiors, and performance
            parts — engineered for enthusiasts who demand more.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/shop"
              className="
                bg-accent px-12 py-4 rounded-lg font-semibold
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_45px_rgba(225,6,0,0.75)]
              "
            >
              Browse All Accessories
            </Link>

            <Link
              href="/gallery"
              className="
                border border-white/60 px-12 py-4 rounded-lg font-semibold
                transition-all duration-300
                hover:border-accent
                hover:shadow-[0_0_35px_rgba(225,6,0,0.45)]
              "
            >
              View Real Builds
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SHOP BY ACCESSORY TYPE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-14">
          Shop by <span className="text-accent">Accessory Type</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {categories.map((item) => (
            <Link
              key={item}
              href={`/shop?category=${encodeURIComponent(item)}`}
              className="
                bg-gunmetal p-8 rounded-xl cursor-pointer
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_45px_rgba(225,6,0,0.5)]
              "
            >
              <h3 className="font-bold text-lg mb-2">{item}</h3>
              <p className="text-sm opacity-80">
                Explore accessories →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= POPULAR ACCESSORIES ================= */}
      <section className="bg-gunmetal py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">
            Popular Accessories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Alloy Wheels",
              "LED Headlights",
              "Performance Exhausts",
              "Seat Covers",
              "Off-Road Tires",
              "Roof Racks",
            ].map((item) => (
              <div
                key={item}
                className="
                  bg-background p-7 rounded-xl
                  transition-all duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(225,6,0,0.4)]
                "
              >
                <h4 className="font-semibold mb-2">{item}</h4>
                <p className="text-sm opacity-70">
                  Top-rated aftermarket accessory
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND ACCESSORIES ================= */}
      <BrandAccessories />

      {/* ================= ACCESSORIES FOR EVERY NEED ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12">
          Accessories for Every Need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Daily Driving",
              desc: "Comfort, safety, and convenience accessories",
            },
            {
              title: "Performance & Racing",
              desc: "Engine, exhaust, suspension upgrades",
            },
            {
              title: "Off-Road & Adventure",
              desc: "Lift kits, tires, recovery gear",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="
                bg-gunmetal p-8 rounded-xl cursor-pointer
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(225,6,0,0.35)]
              "
            >
              <h3 className="font-bold mb-2">{b.title}</h3>
              <p className="text-sm opacity-80">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
