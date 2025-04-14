import Link from "next/link"
import Image from "next/image"
import { recipes } from "../data/recipes"

export default function RecipesSection() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-black mb-8">Super Delicious</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link
              href={`/recipe/${recipe.slug}`}
              key={recipe.id}
              className="neo-card overflow-hidden group relative"
            >
              {/* Category indicator (veg/non-veg) */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-white px-2 py-1 rounded-full border-2 border-black">
                <div
                  className={`w-3 h-3 rounded-full ${recipe.category === "veg" ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <span className="text-xs font-bold uppercase">{recipe.category}</span>
              </div>

              {/* Difficulty indicator */}
              <div className="absolute top-3 right-3 z-10 bg-white px-2 py-1 rounded-full border-2 border-black">
                <div className="flex items-center gap-1">
                  {["easy", "medium", "hard"].map((level, index) => (
                    <div
                      key={level}
                      className={`w-2 h-4 ${
                        index < ["easy", "medium", "hard"].indexOf(recipe.difficulty) + 1 ? "bg-black" : "bg-gray-200"
                      }`}
                    ></div>
                  ))}
                  <span className="text-xs font-bold uppercase ml-1">{recipe.difficulty}</span>
                </div>
              </div>

              <div className="aspect-square relative">
                <Image
                  src={recipe.image || "/placeholder.svg?height=300&width=300"}
                  alt={recipe.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 bg-neo-pink">
                <h3 className="font-bold text-center mb-2">{recipe.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-black">
                    <Image
                      src={recipe.chefAvatar || "/placeholder.svg?height=24&width=24"}
                      alt={recipe.chef}
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm">{recipe.chef}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Decorative dashed line */}
      <div className="absolute top-12 bottom-12 right-8 border-r-2 border-dashed border-black hidden lg:block"></div>
    </section>
  )
}
