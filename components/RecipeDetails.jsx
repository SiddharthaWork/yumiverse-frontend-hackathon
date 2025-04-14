"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  Clock,
  Users,
  ChefHat,
  Share2,
  Heart,
  MessageCircle,
  Camera,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { recipes } from "../data/recipes"

export default function RecipeDetailPage() {
  const [activeTab, setActiveTab] = useState("ingredients")
  const [currentSlide, setCurrentSlide] = useState(0)
  const params = useParams()
  const slug = params.slug
  
  // Find the current recipe based on the slug
  const recipe = recipes.find(r => r.slug === slug)
  
  // If recipe is not found, show loading or not found state
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Recipe Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  // Get related recipes (excluding current recipe)
  const relatedRecipes = recipes
    .filter(r => r.id !== recipe.id)
    .slice(0, 6) // Get only 6 related recipes

  // Number of items to show per slide based on screen size
  const itemsPerSlide = 3
  const totalSlides = Math.ceil(relatedRecipes.length / itemsPerSlide)

  // Navigate carousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  // Get current items to display
  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide
    return relatedRecipes.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "#f5f0e6" }}>
      {/* Neobrutalism background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-300 border-4 border-black"></div>
      <div className="absolute top-60 right-10 w-60 h-60 rounded-full bg-blue-400 border-4 border-black"></div>
      <div className="absolute bottom-40 left-20 w-80 h-20 bg-green-300 border-4 border-black transform rotate-12"></div>
      <div className="absolute -bottom-10 right-20 w-40 h-40 rounded-full bg-purple-400 border-4 border-black"></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-white border-4 border-black transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>

      {/* Content container with z-index to appear above background elements */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="p-4">
          <Link href="/" className="flex items-center text-black font-bold hover:underline">
            <ArrowLeft className="mr-2" size={20} />
            Back to recipes
          </Link>
        </div>

        {/* Recipe Hero Section */}
        <div className="relative px-4 py-8 text-center">
          {/* Tags */}
          <div className="flex justify-center gap-2 mb-6">
            <span className="px-4 py-1 bg-yellow-200 rounded-full text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {recipe.category}
            </span>
            <span className="px-4 py-1 bg-green-300 rounded-full text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {recipe.difficulty}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold md:text-black text-white mb-4 font-cursive">{recipe.name}</h1>

          {/* Description */}
          <p className="text-black text-lg max-w-2xl mx-auto mb-8">
            {recipe.description}
          </p>
        </div>

        {/* Two Column Layout for Recipe and Community Content */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - Recipe Content */}
            <div className="lg:w-2/3">
              {/* Recipe Card */}
              <div className="bg-white border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
                {/* Recipe Image */}
                <div className="relative h-[300px] md:h-[400px] border-b-4 border-black">
                  <Image
                    src={recipe.image}
                    alt={recipe.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Recipe Info */}
                <div className="p-6 bg-cream-100">
                  {/* Recipe Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="flex flex-col items-center p-4 bg-yellow-100 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Clock className="mb-2" size={24} />
                      <span className="text-sm font-medium">Total Time</span>
                      <span className="text-xl font-bold">{recipe.cookingTime}</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-pink-100 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <Users className="mb-2" size={24} />
                      <span className="text-sm font-medium">Servings</span>
                      <span className="text-xl font-bold">{recipe.servings}</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-green-100 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <ChefHat className="mb-2" size={24} />
                      <span className="text-sm font-medium">Difficulty</span>
                      <span className="text-xl font-bold capitalize">{recipe.difficulty}</span>
                    </div>
                  </div>

                  {/* Share Button */}
                  <div className="flex justify-end mb-6">
                    <button className="flex items-center px-6 py-2 bg-orange-300 text-black font-bold rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
                      <Share2 className="mr-2" size={18} />
                      Share
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                      className={`py-3 text-center font-bold text-lg border-2 border-black rounded-lg ${
                        activeTab === "ingredients"
                          ? "bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("ingredients")}
                    >
                      Ingredients
                    </button>
                    <button
                      className={`py-3 text-center font-bold text-lg border-2 border-black rounded-lg ${
                        activeTab === "instructions"
                          ? "bg-yellow-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                          : "bg-gray-100"
                      }`}
                      onClick={() => setActiveTab("instructions")}
                    >
                      Instructions
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-cream-50 border-2 border-black rounded-lg min-h-[400px]">
                    {activeTab === "ingredients" ? (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-center font-cursive">Ingredients</h2>
                        <ul className="space-y-6">
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-300 rounded-full border-2 border-black font-bold mr-4">
                              1
                            </span>
                            <div>
                              <h3 className="font-bold text-lg">Pasta</h3>
                              <p>8 oz (about 225g) fettuccine or linguine</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-300 rounded-full border-2 border-black font-bold mr-4">
                              2
                            </span>
                            <div>
                              <h3 className="font-bold text-lg">Butter</h3>
                              <p>4 tablespoons (56g)</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-300 rounded-full border-2 border-black font-bold mr-4">
                              3
                            </span>
                            <div>
                              <h3 className="font-bold text-lg">Garlic</h3>
                              <p>4 cloves, minced</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-300 rounded-full border-2 border-black font-bold mr-4">
                              4
                            </span>
                            <div>
                              <h3 className="font-bold text-lg">Heavy Cream</h3>
                              <p>1 cup (240ml)</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-300 rounded-full border-2 border-black font-bold mr-4">
                              5
                            </span>
                            <div>
                              <h3 className="font-bold text-lg">Parmesan Cheese</h3>
                              <p>1 cup (100g), freshly grated</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-300 rounded-full border-2 border-black font-bold mr-4">
                              6
                            </span>
                            <div>
                              <h3 className="font-bold text-lg">Salt & Black Pepper</h3>
                              <p>To taste</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center w-8 h-8 bg-yellow-300 rounded-full border-2 border-black font-bold mr-4">
                              7
                            </span>
                            <div>
                              <h3 className="font-bold text-lg">Fresh Parsley</h3>
                              <p>2 tablespoons, chopped (for garnish)</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-center font-cursive">Instructions</h2>
                        <ol className="space-y-6">
                          <li className="flex items-start">
                            <span className="flex items-center justify-center min-w-8 h-8 bg-pink-300 rounded-full border-2 border-black font-bold mr-4">
                              1
                            </span>
                            <p>
                              Bring a large pot of salted water to a boil. Add pasta and cook according to package
                              instructions until al dente. Reserve 1/2 cup of pasta water before draining.
                            </p>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center min-w-8 h-8 bg-pink-300 rounded-full border-2 border-black font-bold mr-4">
                              2
                            </span>
                            <p>
                              While pasta is cooking, melt butter in a large skillet over medium heat. Add minced garlic
                              and sauté for 1-2 minutes until fragrant but not browned.
                            </p>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center min-w-8 h-8 bg-pink-300 rounded-full border-2 border-black font-bold mr-4">
                              3
                            </span>
                            <p>
                              Reduce heat to medium-low and add heavy cream. Simmer for 3-4 minutes until it starts to
                              thicken slightly.
                            </p>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center min-w-8 h-8 bg-pink-300 rounded-full border-2 border-black font-bold mr-4">
                              4
                            </span>
                            <p>
                              Gradually whisk in the grated Parmesan cheese until melted and smooth. If sauce is too
                              thick, add some of the reserved pasta water to reach desired consistency.
                            </p>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center min-w-8 h-8 bg-pink-300 rounded-full border-2 border-black font-bold mr-4">
                              5
                            </span>
                            <p>Season with salt and freshly ground black pepper to taste.</p>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center min-w-8 h-8 bg-pink-300 rounded-full border-2 border-black font-bold mr-4">
                              6
                            </span>
                            <p>
                              Add the drained pasta to the sauce and toss until well coated. If needed, add more pasta
                              water to loosen the sauce.
                            </p>
                          </li>
                          <li className="flex items-start">
                            <span className="flex items-center justify-center min-w-8 h-8 bg-pink-300 rounded-full border-2 border-black font-bold mr-4">
                              7
                            </span>
                            <p>
                              Serve immediately, garnished with chopped fresh parsley and additional grated Parmesan if
                              desired.
                            </p>
                          </li>
                        </ol>
                      </div>
                    )}
                  </div>
                </div>

                {/* Chef Info */}
                <div className="p-6 bg-pink-200 border-t-4 border-black">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden mr-4">
                      <Image
                        src={recipe.chefAvatar}
                        alt={recipe.chef}
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{recipe.chef}</h3>
                      <p className="text-sm">Professional Chef</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Recipes Carousel */}
              <div className="bg-purple-200 border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6">
                <div className="p-6 border-b-4 border-black bg-yellow-300">
                  <h2 className="text-3xl font-bold text-black font-cursive">You Might Also Like</h2>
                  <p className="text-black">Discover more delicious recipes from our collection</p>
                </div>

                {/* Carousel Container */}
                <div className="p-6 relative">
                  {/* Carousel Navigation */}
                  <div className="flex justify-between mb-6">
                    <button
                      onClick={prevSlide}
                      className="p-3 bg-pink-400 text-black font-bold rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    {/* Carousel Indicators */}
                    <div className="flex gap-2 items-center">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-4 h-4 rounded-full border-2 border-black ${
                            currentSlide === index ? "bg-pink-400" : "bg-white"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="p-3 bg-pink-400 text-black font-bold rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Carousel Items */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {getCurrentItems().map((item) => (
                      <Link
                        href={`/recipe/${item.slug}`}
                        key={item.id}
                        className="bg-white border-4 border-black rounded-xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                      >
                        <div className="relative h-40 border-b-4 border-black">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4 bg-pink-100">
                          <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden mr-2">
                              <Image
                                src={item.chefAvatar}
                                alt={item.chef}
                                width={30}
                                height={30}
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm">{item.chef}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Carousel Counter */}
                  <div className="mt-6 text-center">
                    <span className="px-4 py-2 bg-blue-300 text-black font-bold rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      {currentSlide + 1} / {totalSlides}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Community Creations */}
            <div className="lg:w-1/3 lg:sticky lg:top-4 self-start">
              {/* Community Creations Section */}
              <div className="bg-blue-300 border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="p-4 border-b-4 border-black bg-yellow-200">
                  <h2 className="text-2xl font-bold text-black font-cursive">Community Creations</h2>
                  <p className="text-black text-sm">See how others made this recipe!</p>
                </div>

                {/* Photo Upload Section */}
                <div className="p-4 border-b-4 border-black bg-green-200">
                  <div className="flex flex-col gap-2 items-start">
                    <h3 className="text-lg font-bold">Made this recipe?</h3>
                    <button className="flex items-center px-4 py-2 bg-pink-400 text-black font-bold rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all text-sm">
                      <Camera className="mr-2" size={16} />
                      Share Your Photo
                    </button>
                  </div>
                </div>

                {/* Community Photos */}
                <div className="p-4 bg-white">
                  {/* User Submission 1 */}
                  <div className="mb-4 border-3 border-black rounded-lg overflow-hidden">
                    <div className="p-3 bg-pink-100 border-b-3 border-black flex items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden mr-2">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="User Avatar"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Jessica Parker</h4>
                        <p className="text-xs">2 days ago</p>
                      </div>
                    </div>
                    <div className="relative h-[180px]">
                      <Image
                        src="/placeholder.svg?height=180&width=300"
                        alt="User creation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 bg-yellow-100 border-t-3 border-black">
                      <p className="mb-2 text-sm">
                        Made this for dinner last night and it was amazing! I added some extra garlic. 😋
                      </p>
                      <div className="flex gap-3 mb-3">
                        <button className="flex items-center gap-1 px-2 py-1 bg-pink-300 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all text-xs">
                          <Heart size={12} className="fill-black" />
                          <span className="font-bold">24</span>
                        </button>
                        <button className="flex items-center gap-1 px-2 py-1 bg-blue-300 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all text-xs">
                          <MessageCircle size={12} />
                          <span className="font-bold">8</span>
                        </button>
                      </div>

                      {/* Comments - Simplified for sidebar */}
                      <div className="pl-3 border-l-3 border-black mb-3">
                        <div className="mb-1">
                          <div className="flex items-center">
                            <span className="font-bold text-xs mr-2">Mike Johnson</span>
                          </div>
                          <p className="text-xs">Looks delicious! Did you use fresh parmesan?</p>
                        </div>
                      </div>

                      {/* Add Comment - Simplified */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Comment..."
                          className="flex-1 px-2 py-1 border-2 border-black rounded-lg text-xs"
                        />
                        <button className="p-1 bg-green-300 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all">
                          <Send size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* User Submission 2 */}
                  <div className="mb-4 border-3 border-black rounded-lg overflow-hidden">
                    <div className="p-3 bg-green-100 border-b-3 border-black flex items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden mr-2">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          alt="User Avatar"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Marcus Chen</h4>
                        <p className="text-xs">5 days ago</p>
                      </div>
                    </div>
                    <div className="relative h-[180px]">
                      <Image
                        src="/placeholder.svg?height=180&width=300"
                        alt="User creation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3 bg-blue-100 border-t-3 border-black">
                      <p className="mb-2 text-sm">I added grilled chicken on top. Highly recommend!</p>
                      <div className="flex gap-3 mb-3">
                        <button className="flex items-center gap-1 px-2 py-1 bg-pink-300 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all text-xs">
                          <Heart size={12} className="fill-black" />
                          <span className="font-bold">42</span>
                        </button>
                        <button className="flex items-center gap-1 px-2 py-1 bg-blue-300 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all text-xs">
                          <MessageCircle size={12} />
                          <span className="font-bold">12</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* View More Button */}
                  <div className="flex justify-center">
                    <button className="px-4 py-2 bg-purple-300 text-black font-bold rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all text-sm">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
