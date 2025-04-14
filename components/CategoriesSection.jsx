import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Smoothies", image: "/images/smoothies.jpg" },
  { name: "Pizza", image: "/images/pizza.jpg" },
  { name: "Desserts", image: "/images/desserts.jpg" },
  { name: "Breakfast", image: "/images/breakfast.jpg" },
]

export default function CategoriesSection() {
  return (
    <section className="py-12 bg-neo-green relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-8">Fan Favorites</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              href={`/category/${category.name.toLowerCase()}`}
              key={category.name}
              className="neo-card overflow-hidden group"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image || "/placeholder.svg?height=300&width=300"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2 text-center font-bold">{category.name}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-black rounded-full opacity-20 -mb-10 -mr-10"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-black rounded-full opacity-20"></div>
    </section>
  )
}
