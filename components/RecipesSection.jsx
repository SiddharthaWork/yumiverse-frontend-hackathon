"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { recipes, cuisineCategories } from "../data/recipes"
import RecipeSearch from "./Search"
import { ArrowDown, CookingPotIcon, LifeBuoy, LifeBuoyIcon } from "lucide-react"

export default function RecipesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredRecipes = recipes.filter(recipe => 
    selectedCategory === "All" ? true : recipe.cuisine === selectedCategory
  )

  return (
    <section id="recipes-section" className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black mb-8">Find Your Taste</h2>
        <RecipeSearch />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 mt-6">
          {cuisineCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 font-bold text-sm uppercase tracking-wider border-2 border-black rounded-full 
                ${selectedCategory === category 
                  ? 'bg-black text-white transform -rotate-2 scale-105 transition-transform' 
                  : 'bg-white hover:bg-gray-100 rotate-1 hover:-rotate-1 transition-transform'}
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                active:shadow-none active:translate-x-1 active:translate-y-1`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <Link
              href={`/recipe/${recipe.slug}`}
              key={recipe.id}
              className="neo-card overflow-hidden group relative transform hover:-rotate-1 transition-transform"
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
              <div className="p-3 bg-[#f5f0e6]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-white text-xs font-bold border-2 border-black rounded-full rotate-[-2deg] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {recipe.cuisine}
                  </span>
                  <h3 className="font-bold text-center">{recipe.name}</h3>
                </div>
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
        <div className="flex justify-center md:mt-10 mt-6 xl:mt-16 ">
          <button className="group relative gap-2 flex items-center border-[6px] border-black hover:bg-[#FF6B6B] text-black bg-white px-6 py-2 text-xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Load More
            {/* <ArrowDown className="h-6 w-6" /> */}
          </button>
        </div>
      </div>

      {/* Decorative dashed line */}
      <div className="absolute top-12 bottom-12 right-8 border-r-2 border-dashed border-black hidden lg:block"></div>
    </section>
  )
}
