"use client"

import type React from "react"
import { useState } from "react"
import { ChefHat, Sparkles, Mail, ArrowRight, Shield, Check, Utensils, Clock, ChevronRight, ShieldAlertIcon } from "lucide-react"
import Image from "next/image"

export default function SubscribeSection() {
  const [email, setEmail] = useState("")
  const [frequency, setFrequency] = useState("weekly")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // In a real app, you would send this to your API
      console.log("Subscribing:", email, frequency)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail("")
    }
  }

  return (
    <section className="w-full py-4 sm:py-6 md:py-8 lg:py-12 dot-pattern bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-start gap-6 lg:gap-8 xl:gap-12">
          {/* Main subscription box */}
          <div className="relative w-full lg:w-3/4">
            {/* Main container with zigzag border */}
            <div className="relative border-[3px] sm:border-[4px] md:border-[6px] lg:border-[8px] border-black bg-white">
              {/* Zigzag pattern on top */}
              <div
                className="absolute left-0 right-0 top-0 h-3 sm:h-4 md:h-5 lg:h-6 bg-[#FF6B6B]"
                style={{
                  clipPath:
                    "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%, 100% 0, 0 0)",
                }}
              ></div>

              <div className="grid gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10 md:grid-cols-5">
                {/* Left Column (3/5) */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 md:col-span-3">
                  <div className="rotate-[-1deg]">
                    <div className="mb-3 sm:mb-4 inline-block bg-[#FFDE59] px-2 sm:px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center border-2 sm:border-3 border-black bg-white px-2 py-1">
                        <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <p className="text-xs sm:text-sm font-black uppercase">Join Our Culinary Community</p>
                      </div>
                    </div>

                    <h2 className="mb-3 sm:mb-4 lg:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tight">
                      LEVEL UP YOUR <span className="text-[#FF6B6B]">COOKING GAME</span>
                    </h2>

                    <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg font-bold">
                      Get weekly inspiration, exclusive recipes, and pro techniques to transform your cooking into art.
                    </p>

                    <form onSubmit={handleSubmit} className="mb-4 sm:mb-6 lg:mb-8 space-y-3 sm:space-y-4 lg:space-y-6">
                      <div className="relative">
                        <div className="overflow-hidden border-2 sm:border-3 lg:border-4 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                          <div className="flex">
                            <div className="flex items-center border-r-2 sm:border-r-3 lg:border-r-4 border-black bg-[#4ECDC4] p-2 sm:p-3">
                              <Mail className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                            </div>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              required
                              className="w-full border-none bg-white p-2 sm:p-3 text-sm sm:text-base lg:text-lg font-bold placeholder-gray-400 outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {["weekly", "monthly"].map((option) => (
                          <label
                            key={option}
                            className={`cursor-pointer border-2 sm:border-3 lg:border-4 border-black p-1.5 sm:p-2 text-xs sm:text-sm lg:text-base font-bold transition-all ${
                              frequency === option
                                ? "bg-[#FF6B6B] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] lg:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[1px] -translate-y-[1px]"
                                : "bg-white"
                            }`}
                          >
                            <input
                              type="radio"
                              name="frequency"
                              value={option}
                              checked={frequency === option}
                              onChange={() => setFrequency(option)}
                              className="sr-only"
                            />
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </label>
                        ))}
                      </div>

                      <button
                        type="submit"
                        className={`group flex items-center border-2 sm:border-3 lg:border-4 border-black bg-[#FFDE59] p-2 sm:p-3 text-xs sm:text-sm lg:text-base font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:-rotate-1 transform hover:translate-x-[-1px] hover:translate-y-[-1px] ${
                          submitted ? "bg-green-400 text-white" : ""
                        }`}
                      >
                        {submitted ? (
                          <>
                            <Check className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                            SUBSCRIBED!
                          </>
                        ) : (
                          <>
                            SUBSCRIBE NOW
                            <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      <div className="flex items-center text-xs sm:text-sm font-bold">
                        <ShieldAlertIcon className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        We respect your privacy. Unsubscribe at any time.
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right Column (2/5) */}
                <div className="relative z-0 md:col-span-2">
                  <div className="relative h-full pb-16 sm:pb-20 lg:pb-24">
                    {/* Image container */}
                    <div className="relative h-[120px] sm:h-[160px] md:h-[200px] lg:h-[250px] overflow-hidden border-2 sm:border-3 lg:border-4 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                      <Image
                        src="https://www.webstaurantstore.com/uploads/guide/2022/9/two-cooks-preparing-food-in-a-restaurant-kitchen.jpg"
                        alt="Chef preparing food"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Quote box */}
                    <div className="absolute left-0 bottom-4 sm:bottom-6 lg:bottom-8 w-[calc(100%-16px)] sm:w-[calc(100%-24px)] lg:w-[calc(100%-32px)] -rotate-3 border-2 sm:border-3 lg:border-4 border-black bg-[#4ECDC4] p-2 sm:p-3 lg:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform translate-y-1/4">
                      <h3 className="mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg font-black uppercase">
                        Foodie Approved
                      </h3>
                      <p className="mb-2 sm:mb-3 text-xs sm:text-sm lg:text-base font-bold italic">
                        "These recipes completely changed my dinner game! My friends can't stop talking about!"
                      </p>
                      <div className="flex items-center">
                        <ChefHat className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                        <p className="text-xs sm:text-sm lg:text-base font-bold">— Alex K., Kitchen Enthusiast</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom zigzag pattern */}
              <div
                className="mt-6 sm:mt-8 lg:mt-10 h-3 sm:h-4 md:h-5 lg:h-6 bg-[#FF6B6B]"
                style={{
                  clipPath:
                    "polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%, 100% 100%, 0 100%)",
                }}
              ></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-2 -top-2 sm:-right-3 sm:-top-3 lg:-right-4 lg:-top-4 h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 rotate-12 border-2 sm:border-3 lg:border-4 border-black bg-[#FFDE59]"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 lg:-bottom-4 lg:-right-4 h-6 w-6 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rotate-45 border-2 sm:border-3 lg:border-4 border-black bg-[#FF9F1C]"></div>
          </div>

          {/* Feature boxes */}
          <div className="w-full lg:w-1/4 flex flex-col gap-4 sm:gap-6 mt-4 lg:mt-12">
            {/* Feature box 1 */}
            <div className="rotate-3 border-2 sm:border-3 lg:border-4 border-black bg-[#FFDE59] p-2 sm:p-3 lg:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center mb-2">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center border-2 sm:border-3 border-black bg-white">
                  <Utensils className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="ml-2 sm:ml-3 text-sm sm:text-base lg:text-lg font-black uppercase">Weekly Recipes</h3>
              </div>
              <p className="text-xs sm:text-sm font-bold">Get exclusive recipes from top chefs delivered to your inbox</p>
            </div>

            {/* Feature box 2 */}
            <div className="-rotate-2 border-2 sm:border-3 lg:border-4 border-black bg-[#4ECDC4] p-2 sm:p-3 lg:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center mb-2">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center border-2 sm:border-3 border-black bg-white">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="ml-2 sm:ml-3 text-sm sm:text-base lg:text-lg font-black uppercase">Quick Tips</h3>
              </div>
              <p className="text-xs sm:text-sm font-bold">Time-saving cooking hacks that will transform your kitchen routine</p>
            </div>

            {/* Stacked elements */}
            <div className="relative mt-4 sm:mt-6">
              <div className="absolute -right-2 -top-2 sm:-right-3 sm:-top-3 h-full w-full rotate-3 border-2 sm:border-3 border-black bg-[#FF9F1C]"></div>
              <div className="relative border-2 sm:border-3 border-black bg-white p-2 sm:p-3 lg:p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-sm sm:text-base lg:text-lg font-black uppercase mb-2 sm:mb-3">Join 10,000+ Foodies</h3>
                <ul className="space-y-2">
                  {["Premium Recipes", "Community Content", "Chef Community"].map((item, i) => (
                    <li key={i} className="flex items-center text-xs sm:text-sm font-bold">
                      <div className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center border-2 border-black bg-[#FF6B6B]">
                        <Check className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 -rotate-1">
                  <button className="group flex w-full items-center justify-center border-2 sm:border-3 border-black bg-[#FF6B6B] p-2 text-xs sm:text-sm font-black uppercase text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-rotate-1 transform hover:translate-x-[-1px] hover:translate-y-[-1px]">
                    Learn More
                    <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
