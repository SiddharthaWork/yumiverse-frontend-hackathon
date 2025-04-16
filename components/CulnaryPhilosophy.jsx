import { ChefHat, Leaf, Flame, Utensils } from "lucide-react"

export default function CulinaryPhilosophy() {
  return (
    <section className="py-12 md:py-16 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header with bold typography */}
          <div className="mb-8 md:mb-12 relative">
            <h2 className="text-4xl md:text-4xl font-black tracking-tight relative z-10">
              OUR CULINARY
              <br />
              PHILOSOPHY
            </h2>
            <div className="absolute -bottom-3 left-0 h-6 w-24 bg-neo-yellow rotate-3"></div>
          </div>

          {/* Philosophy cards with neo-brutalist styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="neo-card p-5 md:p-6 bg-white border-2 md:border-4 border-black rotate-1 transform hover:-rotate-1 transition-transform">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-neo-yellow p-2 md:p-3 rounded-lg border-2 md:border-4 border-black">
                  <ChefHat size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">BOLD FLAVORS</h3>
                  <p className="text-base">
                    We believe in creating recipes that don't shy away from intensity. Our dishes celebrate the natural
                    character of ingredients with unapologetic seasoning and thoughtful combinations.
                  </p>
                </div>
              </div>
            </div>

            <div className="neo-card p-5 md:p-6 bg-white border-2 md:border-4 border-black -rotate-1 transform hover:rotate-1 transition-transform">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#FF6B6B] p-2 md:p-3 rounded-lg border-2 md:border-4 border-black">
                  <Leaf size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">FRESH & SEASONAL</h3>
                  <p className="text-base">
                    We embrace the rhythm of seasons, creating recipes that highlight ingredients at their peak. This
                    approach ensures maximum flavor and nutritional value in every dish.
                  </p>
                </div>
              </div>
            </div>

            <div className="neo-card p-5 md:p-6 bg-white border-2 md:border-4 border-black rotate-1 transform hover:-rotate-1 transition-transform">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#4ECDC4] p-2 md:p-3 rounded-lg border-2 md:border-4 border-black">
                  <Flame size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">TECHNIQUE MATTERS</h3>
                  <p className="text-base">
                    We don't just tell you what to cook, but how to cook it with precision. Our recipes emphasize
                    techniques that transform ordinary ingredients into extraordinary meals.
                  </p>
                </div>
              </div>
            </div>

            <div className="neo-card p-5 md:p-6 bg-white border-2 md:border-4 border-black -rotate-1 transform hover:rotate-1 transition-transform">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#F4A261] p-2 md:p-3 rounded-lg border-2 md:border-4 border-black">
                  <Utensils size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">ACCESSIBLE CREATIVITY</h3>
                  <p className="text-base">
                    We believe great food should be for everyone. Our recipes balance creative expression with practical
                    execution, making culinary adventure accessible to cooks of all skill levels.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bold statement with neo-brutalist styling */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-black text-white border-2 md:border-4 border-neo-yellow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 md:w-20 h-12 md:h-20 bg-neo-yellow rotate-45 translate-x-6 -translate-y-6"></div>
            <h3 className="text-2xl md:text-3xl font-black mb-3 max-w-4xl">
              "WE DON'T JUST MAKE RECIPES. WE CRAFT EXPERIENCES THAT CELEBRATE THE JOY OF COOKING."
            </h3>
            <p className="text-lg md:text-xl max-w-2xl">
              Every dish we create is designed to inspire confidence in the kitchen and delight at the table.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
