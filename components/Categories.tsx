import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      name: "Basic Essentials",
      description: "Timeless classics for everyday wear",
      link: "/products?category=Basic",
      color: "bg-blue-500",
    },
    {
      name: "Graphic Designs",
      description: "Express yourself with unique prints",
      link: "/products?category=Graphic",
      color: "bg-purple-500",
    },
    {
      name: "Athletic Performance",
      description: "Built for movement and comfort",
      link: "/products?category=Athletic",
      color: "bg-green-500",
    },
    {
      name: "Premium Collection",
      description: "Luxury materials and refined style",
      link: "/products?category=Premium",
      color: "bg-amber-500",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="group relative overflow-hidden rounded-lg hover:shadow-xl transition"
            >
              <div className={`${category.color} h-48 p-6 text-white`}>
                <div className="h-full flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}