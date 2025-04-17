import Image from "next/image"
import Link from "next/link"
import { recipes } from "@/data/recipes"

export default function CategoriesSection() {
  // Get 4 random recipes from the recipes array
  const getRandomRecipes = () => {
    const shuffled = [...recipes].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 4)
  }

  const randomRecipes = getRandomRecipes()

  return (
    <section className="py-12 bg-neo-green relative overflow-hidden z-40" id="categories-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black mb-8">Fan Favorites</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {randomRecipes.map((recipe) => (
            <Link
              href={`/recipe/${recipe.slug}`}
              key={recipe.id}
              className="neo-card overflow-hidden group"
            >
              <div className="aspect-square relative">
                <Image
                  src={recipe.image || "/placeholder.svg?height=300&width=300"}
                  alt={recipe.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2 text-center font-bold">{recipe.name}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-black rounded-full opacity-20 -mb-10 -mr-10 -z-30"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-black rounded-full opacity-20 z-30"></div>
    </section>
  )
}
