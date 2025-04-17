"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { recipes } from "@/data/recipes"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const router = useRouter()
  const [randomRecipe, setRandomRecipe] = useState(null)

  useEffect(() => {
    // Select random recipe on client side to avoid hydration mismatch
    setRandomRecipe(recipes[Math.floor(Math.random() * recipes.length)])
  }, [])

  if (!randomRecipe) {
    return (
      <section className="py-8 dot-pattern">
        <div className="container mx-auto px-4">
          <div className="neo-card max-w-5xl mx-auto overflow-hidden animate-pulse">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gray-200 h-[400px]"></div>
              <div className="md:w-1/2 p-8 bg-white flex flex-col justify-center">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-20 bg-gray-200 rounded w-full mb-6"></div>
                <div className="flex justify-center">
                  <div className="h-10 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const handleNavigate = () => {
    router.push(`/recipe/${randomRecipe.slug}`)
  }

  return (
    <section className="py-8 dot-pattern ">
      {/* This is the hero section */}
      <div className="container mx-auto px-4">
        <div className="neo-card h-fit max-w-4xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative md:h-[400px] h-[200px]">
              <Image
                src={randomRecipe.image}
                alt={randomRecipe.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="md:w-1/2 md:p-8 p-4 bg-white flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-4">{randomRecipe.name}</h2>
              <p className="mb-6">
                {randomRecipe.description}
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={handleNavigate} 
                  className="neo-button bg-neo-yellow rounded flex items-center justify-center gap-2 hover:-rotate-1 transform transition-all duration-200"
                >
                  See Recipe <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
