import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function HeadHero() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#f5eee3] p-4 flex items-center justify-between">
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold text-lg">MY RECIPES</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="hover:underline">
            HOME
          </Link>
          <Link href="#" className="hover:underline">
            RECIPES
          </Link>
          <Link href="#" className="hover:underline">
            FEATURES
          </Link>
          <Link href="#" className="hover:underline">
            CONTACT
          </Link>
        </nav>

        <button className="bg-black text-white px-6 py-2">SIGNUP</button>
      </header>

      {/* Main Hero Section */}
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-[#f5eee3] p-6 md:p-12 relative">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-black" style={{ fontFamily: "var(--font-display)" }}>
              FOOD
              <br />
              RECIPES
            </h1>

            {/* PRO Badge */}
            <div className="absolute top-20 right-20 md:right-40 w-20 h-20 md:w-24 md:h-24">
              <div className="absolute inset-0 bg-[#c5e45b] rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-lg">PRO</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Circular Image */}
            <div className="relative w-64 h-64 border-2 border-black rounded-full overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-black">
                  <Image
                    src="/images/steak.jpg"
                    alt="Meat Steak"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Recipe Details */}
            <div className="bg-white p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold mb-2">Recipe of day</h3>
              <h2 className="font-bold text-lg mb-2">Meat Steak:</h2>
              <ul className="space-y-1 mb-4">
                <li className="flex items-center gap-2">
                  <span className="text-xs">•</span>
                  <span>Sweet Potato Fries</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">•</span>
                  <span>Baked French Fries</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">•</span>
                  <span>Wedge Salad</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">•</span>
                  <span>Mac and Cheese</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">•</span>
                  <span>Onion Rings</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">•</span>
                  <span>Oven Roasted</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">•</span>
                  <span>Vegetables</span>
                </li>
              </ul>
              <Link href="#" className="text-orange-500 font-medium">
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-[#c7b8e0] p-6 md:p-12 flex flex-col">
          <div className="flex-1">
            {/* Food Categories with Images */}
            <div className="space-y-6 mb-8">
              {/* Salads */}
              <div className="flex items-center justify-between">
                <div className="bg-[#f5eee3] rounded-full px-6 py-2 transform -rotate-2">
                  <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    Salads
                  </span>
                </div>
                <div className="w-32 h-20 overflow-hidden rounded-lg border-2 border-black">
                  <Image
                    src="/images/salad.jpg"
                    alt="Salad"
                    width={150}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Drinks */}
              <div className="flex items-center justify-between">
                <div className="bg-[#c5e45b] rounded-sm px-6 py-2 transform rotate-2">
                  <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    Drinks
                  </span>
                </div>
                <div className="w-32 h-20 overflow-hidden rounded-lg border-2 border-black">
                  <Image
                    src="/images/drinks.jpg"
                    alt="Drinks"
                    width={150}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Foods */}
              <div className="flex items-center justify-between">
                <div className="bg-[#ff6b35] rounded-sm px-6 py-2 transform -rotate-1">
                  <span className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    Foods
                  </span>
                </div>
                <div className="w-32 h-20 overflow-hidden rounded-lg border-2 border-black relative">
                  <Image
                    src="/images/food.jpg"
                    alt="Food"
                    width={150}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-1 right-1 bg-white rounded-full p-1">
                    <Check size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Categories */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="bg-white border-2 border-black rounded-full py-2 px-4 font-medium">Steaks</button>
            <button className="bg-white border-2 border-black rounded-full py-2 px-4 font-medium">Soups</button>
            <button className="bg-[#ff6b35] border-2 border-black rounded-full py-2 px-4 font-medium text-white">
              Fish
            </button>
            <button className="bg-white border-2 border-black rounded-full py-2 px-4 font-medium">Healthy</button>
          </div>

          {/* Recipe Count */}
          <div className="flex items-center justify-end">
            <div className="text-right">
              <div className="flex items-center justify-end mb-2">
                <span className="text-4xl font-bold">*</span>
              </div>
              <h3 className="text-3xl font-bold">+500</h3>
              <p className="font-medium">Food Recipes</p>
              <p className="text-sm">All around the world</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-black text-white py-3 relative overflow-hidden transform -rotate-3 -mt-4 z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-4 font-medium">Help Your Life Healthier Every Day</span>
          <span className="mx-4 font-medium">🌱</span>
          <span className="mx-4 font-medium">We Help Your Life Healthier Every Day</span>
          <span className="mx-4 font-medium">🌱</span>
          <span className="mx-4 font-medium">Help Your Life Healthier Every Day</span>
          <span className="mx-4 font-medium">🌱</span>
          <span className="mx-4 font-medium">We Help Your Life Healthier Every Day</span>
        </div>
      </div>
    </div>
  )
}
