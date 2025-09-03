import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Premium T-Shirts<br />
            <span className="text-3xl md:text-4xl">for Every Style</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover our collection of comfortable, high-quality t-shirts designed
            to elevate your everyday wardrobe. From basics to bold graphics.
          </p>
          <div className="space-x-4">
            <Link
              href="/products"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/products?category=Limited"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Limited Edition
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}