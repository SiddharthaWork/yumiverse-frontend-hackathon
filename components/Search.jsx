"use client"
import { useState } from "react"
import { Search, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { recipes } from "@/data/recipes"
import Link from "next/link"
import Image from "next/image"

const categories = ["All", "Veg", "Non-Veg"]
const difficulties = ["All", "Easy", "Medium", "Hard"]

export default function RecipeSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false)

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory.toLowerCase()
    const matchesDifficulty = selectedDifficulty === "All" || recipe.difficulty === selectedDifficulty.toLowerCase()
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <div className="w-full max-w-4xl xl:my-8 my-4 z-50">
      <div className="relative">
        {/* Main search bar with neo-brutalism style */}
        <div
          className={cn(
            "relative flex items-center bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all",
            isSearchFocused ? "translate-x-1 translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "",
          )}
        >
          <Search className="absolute left-3 h-6 w-6 text-black" />
          <Input
            type="text"
            placeholder="Search for recipes, cuisines, or ingredients..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="flex-1 border-0 bg-transparent pl-12 py-6 text-lg font-bold focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchQuery("")}
              className="mr-2 hover:bg-transparent"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>

        {/* Filter buttons with neo-brutalism style */}
        <div className="flex gap-4 mt-4">
          {/* Category filter */}
          <div className="relative">
            <Button
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown)
                setShowDifficultyDropdown(false)
              }}
              className="bg-[#FF5252] hover:bg-[#FF3838] text-white border-4 border-black font-bold py-2 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {selectedCategory} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            {showCategoryDropdown && (
              <div className="absolute z-10 mt-2 w-full bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="px-4 py-2 hover:bg-[#FF5252] hover:text-white cursor-pointer font-medium"
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowCategoryDropdown(false)
                    }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Difficulty filter */}
          <div className="relative">
            <Button
              onClick={() => {
                setShowDifficultyDropdown(!showDifficultyDropdown)
                setShowCategoryDropdown(false)
              }}
              className="bg-[#4CAF50] hover:bg-[#45a049] text-white border-4 border-black font-bold py-2 px-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {selectedDifficulty} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            {showDifficultyDropdown && (
              <div className="absolute z-10 mt-2 w-full bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {difficulties.map((difficulty) => (
                  <div
                    key={difficulty}
                    className="px-4 py-2 hover:bg-[#4CAF50] hover:text-white cursor-pointer font-medium"
                    onClick={() => {
                      setSelectedDifficulty(difficulty)
                      setShowDifficultyDropdown(false)
                    }}
                  >
                    {difficulty}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search results with neo-brutalism style */}
        {searchQuery && (
          <div className="mt-4 bg-[#f5f0e6] border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-4 uppercase">Search Results</h3>
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredRecipes.map((recipe) => (
                  <Link
                    href={`/recipe/${recipe.slug}`}
                    key={recipe.id}
                    className="flex bg-white border-4 border-black p-3 hover:bg-gray-50 cursor-pointer transform hover:translate-x-1 hover:translate-y-1 transition-transform"
                  >
                    <div className="w-20 h-20 relative border-2 border-black mr-3">
                      <Image
                        src={recipe.image || "/placeholder.svg"}
                        alt={recipe.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{recipe.name}</h4>
                      <p className="text-sm text-gray-600 line-clamp-1">{recipe.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-block bg-[#FF5252] text-white text-xs font-bold px-2 py-1 border-2 border-black">
                          {recipe.category}
                        </span>
                        <span className="inline-block bg-[#4CAF50] text-white text-xs font-bold px-2 py-1 border-2 border-black">
                          {recipe.difficulty}
                        </span>
                        <span className="inline-block bg-[#2196F3] text-white text-xs font-bold px-2 py-1 border-2 border-black">
                          {recipe.cookingTime}
                        </span>
                        <span className="inline-block bg-[#9C27B0] text-white text-xs font-bold px-2 py-1 border-2 border-black">
                          {recipe.cuisine}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-white border-4 border-black">
                <p className="font-bold text-lg">No recipes found</p>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
