import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* ✅ LOGO → HOME */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide cursor-pointer"
        >
          Fitment<span className="text-accent">X</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="space-x-8 text-sm uppercase">
          <Link href="/" className="hover:text-accent transition">
            Home
          </Link>

          <Link href="/shop" className="hover:text-accent transition">
            Shop
          </Link>

          <Link href="/gallery" className="hover:text-accent transition">
            Gallery
          </Link>

          <Link href="/support" className="hover:text-accent transition">
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
