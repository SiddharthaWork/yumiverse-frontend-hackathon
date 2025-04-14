import React from 'react'
import Link from 'next/link'
import { CircleCheck } from 'lucide-react'
import NeoBrutalismButton from './ui/neoButton'

const HeaderHero = () => {
    return (
        <div className='w-full min-h-screen xl:min-h-[94vh] xl:h-[94vh] bg-gradient-to-r from-[#f5f0e6] via-[#f5f0e6] via-45% to-[#f5f0e6] to-55% flex flex-col lg:flex-row relative overflow-hidden'>
            {/* Left Section */}
            <div className='w-full lg:w-[60%] xl:w-[65%] h-full flex justify-center items-center lg:border-r-2 border-black'>
                <div className='uppercase w-full h-full flex flex-col gap-8 lg:gap-10 xl:gap-14 px-6 lg:pl-12 xl:pl-20 py-8 lg:py-12 xl:py-16'>
                    <div>
                        <h1 className='text-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold'>
                            Food
                            <br />
                            Recipes
                        </h1>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20'>
                        <div className='relative hidden lg:block'>
                            <img src="/circlev.svg" alt="" className='w-full h-full scale-75 xl:scale-100' />
                            <div className='absolute top-[10rem] left-[32.1rem] w-[12rem] h-0.5 -rotate-[30deg] bg-black hidden xl:block'></div>
                            <div className='absolute top-6 left-[9.5rem] w-[12rem] h-[12rem] xl:w-[15rem] xl:h-[15rem] rounded-full bg-black'>
                                <img src="/giphy1.gif" alt="" className='rounded-full object-cover w-full h-full bg-blend-lighten' />
                            </div>
                        </div>
                        {/* Mobile Circle Image */}
                        <div className='relative lg:hidden w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
                            <div className='w-full h-full rounded-full bg-black'>
                                <img src="/giphy1.gif" alt="" className='rounded-full object-cover w-full h-full bg-blend-lighten' />
                            </div>
                        </div>
                        <div className='pl-0 lg:pl-10 xl:pl-14 z-30 relative'>
                            <h1 className='font-bold mb-2 text-center lg:text-left'>Recipe of Day</h1>
                            <RecipeDetails />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-full lg:w-[40%] xl:w-[35%] h-full flex flex-col'>
                <div className='w-full h-auto lg:h-[55%] bg-[#9d8cff] py-8 lg:py-0'>
                    <div className='w-full h-full flex flex-col gap-y-[2rem] lg:gap-y-[2.5rem] xl:gap-y-[3rem] px-6 lg:pr-8 xl:pr-12 lg:px-0 justify-center items-center lg:items-end relative'>
                        {/* Food Category Cards */}
                        <div className="aspect-video w-[12rem] h-[6rem] rounded-lg border-2 border-black relative z-10">
                            <img src="/salad.png" alt="Tropical Tuna Delight Salad" className="w-full h-full object-cover" />
                            <div className="absolute top-[45%] -left-[12rem] lg:-left-[14rem] xl:-left-[18rem] w-[12rem] lg:w-[14rem] xl:w-[18rem] h-[3px] bg-black transform rotate-[0deg] origin-right z-20 hidden lg:block"></div>
                        </div>

                        <div className="aspect-video w-[12rem] h-[6rem] rounded-lg border-2 border-black relative z-20">
                            <img src="/drinks.png" alt="Tropical Tuna Delight Salad" className="w-full h-full object-cover" />
                            <div className="absolute top-[45%] -left-[12rem] lg:-left-[14rem] xl:-left-[18rem] w-[12rem] lg:w-[14rem] xl:w-[18rem] h-[3px] bg-black transform rotate-[0deg] origin-right z-20 hidden lg:block"></div>
                        </div>

                        <div className="aspect-video w-[12rem] h-[6rem] rounded-lg border-2 border-black relative z-30">
                            <img src="/food.png" alt="Tropical Tuna Delight Salad" className="w-full h-full object-cover z-50" />
                            <div className="absolute top-[65%] -left-[12rem] lg:-left-[14rem] xl:-left-[18rem] w-[12rem] lg:w-[14rem] xl:w-[18rem] h-[3px] bg-white transform rotate-[0deg] origin-right z-10 hidden lg:block"></div>
                        </div>

                        {/* Category Buttons */}
                        <div className='absolute lg:top-[4rem] lg:-left-8 xl:-left-10 gap-y-[2rem] lg:gap-y-[3rem] xl:gap-y-[4rem] flex flex-col z-40 -left-4 top-[2rem]'>
                            <div className='rotate-6 relative'>
                                <NeoBrutalismButton text="Salad" color="brown" />
                            </div>
                            <div className='-rotate-12 relative'>
                                <NeoBrutalismButton text="Drinks" color="green" />
                            </div>
                            <div className='rotate-12 relative z-50'>
                                <NeoBrutalismButton text="Food" color="yellow" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Grid Section */}
                <div className='w-full h-auto lg:h-[45%] flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-1/2 h-full lg:border-r-2 lg:border-t-2 border-black py-6 lg:py-0'>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-y-6 xl:gap-y-8 px-6 pt-4 lg:pt-16 xl:pt-20">
                            <button className="bg-white border-2 border-black rounded-full py-2 lg:py-2.5 xl:py-3 px-4 font-medium text-sm lg:text-base">Steaks</button>
                            <button className="bg-white border-2 border-black rounded-full py-2 lg:py-2.5 xl:py-3 px-4 font-medium text-sm lg:text-base">Soups</button>
                            <button className="border-orange-500 border-2 rounded-full py-2 lg:py-2.5 xl:py-3 px-4 font-medium text-sm lg:text-base text-orange-500">
                                Fish
                            </button>
                            <button className="bg-white border-2 border-black rounded-full py-2 lg:py-2.5 xl:py-3 px-4 font-medium text-sm lg:text-base">Healthy</button>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 h-full flex flex-col items-center px-6 pt-8 lg:pt-16 xl:pt-20 lg:border-r-2 lg:border-t-2 border-black'>
                        <div className='flex flex-col items-center gap-4 lg:gap-5 xl:gap-6 text-center'>
                            <img src="/asterick.png" alt="" className='w-12 h-12 lg:w-14 xl:w-16 lg:h-14 xl:h-16' />
                            <div className='mt-4 lg:mt-5 xl:mt-6 space-y-4 lg:space-y-5 xl:space-y-6'>
                                <h1 className='text-3xl lg:text-3xl xl:text-4xl font-bold'>+500</h1>
                                <h1 className='text-lg lg:text-lg xl:text-xl font-bold'>Food Recipes</h1>
                                <h1 className='text-lg lg:text-lg xl:text-xl font-bold'>All around the World</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-3 -left-4 rotate-[10deg] w-full '>
                <AnimatedHero />
            </div>
        </div>
    )
}

export default HeaderHero

export const RecipeDetails = () => {
    return (
        <div className="bg-white p-4 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-[280px] lg:max-w-[260px] xl:max-w-[300px] mx-auto lg:mx-0">
            <h2 className="font-bold text-lg mb-2">Meat Steak:</h2>
            <ul className="space-y-2 lg:space-y-2.5 xl:space-y-3 mb-4">
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
            <Link href="#" className="text-orange-500 font-medium underline pl-4">
                Read More
            </Link>
        </div>
    )
}

export const AnimatedHero = () => {
    return (
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
    )
}
