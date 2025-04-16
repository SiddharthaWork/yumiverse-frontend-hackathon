"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { CircleCheck } from 'lucide-react'
import { Soup } from 'lucide-react'
import { Minus } from 'lucide-react'
import NeoBrutalismButton from './ui/neoButton'

const HeaderHero = () => {
    const [selectedCategory, setSelectedCategory] = useState('fish');

    const categoryData = {
        all: {
            count: "500",
            title: "Food Recipes",
            subtitle: "All around the World"
        },
        steaks: {
            count: "150",
            title: "Steak Recipes",
            subtitle: "From rare to well done"
        },
        soups: {
            count: "120",
            title: "Soup Recipes",
            subtitle: "Warm & comforting"
        },
        fish: {
            count: "180",
            title: "Fish Recipes",
            subtitle: "Fresh from the sea"
        },
        healthy: {
            count: "200",
            title: "Healthy Recipes",
            subtitle: "Nutritious & delicious"
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='w-full md:pb-0 pb-10  min-h-[100dvh] xl:min-h-[94dvh] xl:h-[94dvh] bg-gradient-to-r from-[#f5f0e6] via-[#f5f0e6] via-45% to-[#f5f0e6] to-55% flex flex-col lg:flex-row relative overflow-hidden'>
            {/* Left Section */}
            <div className='w-full lg:w-[60%] xl:w-[65%] h-full flex justify-center items-center lg:border-r-2 border-black'>
                <div className='uppercase w-full h-full flex flex-col gap-6 sm:gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-6 lg:pl-12 xl:pl-16 py-6 sm:py-8 lg:py-10 xl:py-12'>
                    <div className=''>
                        <h1 className='relative text-black text-center lg:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-bold'>
                            Food
                            <br />
                            Recipes
                        <img src="/chef.png" alt="" className='absolute top-2 w-[3rem] h-[3rem] xl:w-[8rem] xl:h-[8rem]  md:rotate-[43deg] rotate-[60deg] right-16 md:left-[32rem] lg:left-[25rem] w-[6rem] h-[6rem] sm:w-[7rem] sm:h-[7rem] md:w-[8rem] md:h-[8rem] lg:w-[10rem] lg:h-[10rem] xl:w-[11rem] xl:h-[11rem]' />
                        </h1>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 z-40'>
                        <div className='relative hidden lg:block'>
                            <img src="/circlev.svg" alt="" className='w-full h-full scale-[0.65] xl:scale-90 relative z-20' />
                            <div className='absolute top-[50%] right-[-60%] w-[80.8%] h-0.5 -rotate-[30deg] bg-black transform-origin-center hidden xl:block z-10'></div>
                            <div className='absolute top-12 left-[8rem] xl:left-[10rem] w-[10rem] h-[10rem] xl:w-[13rem] xl:h-[13rem] bg-black rounded-full z-30'>
                                <img src="/giphy1.gif" alt="" className='rounded-full object-cover w-full h-full ' />
                            </div>
                        </div>
                        {/* Mobile Circle Image */}
                        <div className='relative lg:hidden w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px]'>
                            <div className='w-full h-full rounded-full bg-black'>
                                <img src="/giphy1.gif" alt="" className='rounded-full object-cover w-full h-full bg-blend-lighten' />
                            </div>
                        </div>
                        <div className='pl-0 lg:pl-8 xl:pl-10 z-30 relative'>
                            <h1 className='font-bold mb-2 text-center lg:text-left'>Recipe of Day</h1>
                            <RecipeDetails />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-full lg:w-[40%] xl:w-[35%] h-full flex flex-col'>
                <div className='w-full h-auto lg:h-[55%] bg-[#9d8cff] py-6 sm:py-8 lg:py-0'>
                    <div className='w-full h-full flex flex-col gap-y-6 sm:gap-y-8 lg:gap-y-[2.5rem] xl:gap-y-[3rem] px-4 sm:px-6 lg:pr-6 xl:pr-8 lg:px-0 justify-center items-center lg:items-end relative'>
                        {/* Food Category Cards */}
                        <div className="aspect-video w-[10rem] sm:w-[14rem] h-[5rem] sm:h-[7rem] rounded-lg border-2 border-black relative z-10">
                            <img src="/salad.png" alt="Tropical Tuna Delight Salad" className="w-full h-full object-cover" />
                            {/* <div className="absolute top-[45%] -left-[10rem] lg:-left-[12rem] xl:-left-[16rem] w-[10rem] lg:w-[12rem] xl:w-[16rem] h-[3px] bg-black transform rotate-[0deg] origin-right z-20 hidden lg:block"></div> */}
                        </div>

                        <div className="aspect-video w-[10rem] sm:w-[14rem] h-[5rem] sm:h-[7rem] rounded-lg border-2 border-black relative z-20">
                            <img src="/drinks.png" alt="Tropical Tuna Delight Salad" className="w-full h-full object-cover" />
                            {/* <div className="absolute top-[45%] -left-[10rem] lg:-left-[12rem] xl:-left-[16rem] w-[10rem] lg:w-[12rem] xl:w-[16rem] h-[3px] bg-black transform rotate-[0deg] origin-right z-20 hidden lg:block"></div> */}
                        </div>
                        
                        <div className="aspect-video w-[10rem] sm:w-[14rem] h-[5rem] sm:h-[7rem] rounded-lg border-2 border-black relative z-20">
                            <img src="/food.png" alt="Tropical Tuna Delight Salad" className="w-full h-full object-cover z-50" />
                            {/* <div className="absolute top-1/2 -left-[10rem] lg:-left-[12rem] xl:-left-1/2 transform translate-y-[-50%] translate-x-[-50%] -z-50 w-[10rem] lg:w-[12rem] xl:w-[16rem] h-[3px] bg-white rotate-[0deg] origin-right hidden lg:block"></div> */}
                            {/* <Soup className='w-14 h-14 text-white rounded-xl -z-50 bg-black p-2 absolute top-1/2 left-1/2 translate-x-[-280%] translate-y-[-50%]' /> */}
                        </div>

                        {/* Category Buttons */}
                        <div className='absolute lg:top-[3rem] xl:top-[4rem] lg:-left-6 xl:-left-8 gap-y-6 sm:gap-y-8 lg:gap-y-[3rem] xl:gap-y-[4rem] flex flex-col z-40 -left-4 top-[2rem]'>
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
                    <div className='w-full lg:w-1/2 h-full lg:border-r-2 lg:border-t-2 border-black py-4 sm:py-6 lg:py-0'>
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-y-4 xl:gap-y-6 px-4 sm:px-6 pt-4 lg:pt-12 xl:pt-16">
                            <button 
                                onClick={() => handleCategoryClick('steaks')}
                                className={`${
                                    selectedCategory === 'steaks' 
                                    ? 'border-orange-500 text-orange-500' 
                                    : 'bg-white border-black'
                                } border-2 rounded-full py-2 lg:py-2.5 xl:py-3 px-4 font-medium text-sm lg:text-base transition-transform duration-200 hover:-rotate-1 transform`}
                            >
                                Steaks
                            </button>
                            <button 
                                onClick={() => handleCategoryClick('soups')}
                                className={`${
                                    selectedCategory === 'soups' 
                                    ? 'border-orange-500 text-orange-500' 
                                    : 'bg-white border-black'
                                } border-2 rounded-full py-2 lg:py-2.5 xl:py-3 px-4 font-medium text-sm lg:text-base transition-transform duration-200 hover:-rotate-1 transform`}
                            >
                                Soups
                            </button>
                            <button 
                                onClick={() => handleCategoryClick('fish')}
                                className={`${
                                    selectedCategory === 'fish' 
                                    ? 'border-orange-500 text-orange-500' 
                                    : 'bg-white border-black'
                                } border-2 rounded-full py-2 lg:py-2.5 xl:py-3 px-4 font-medium text-sm lg:text-base transition-transform duration-200 hover:-rotate-1 transform`}
                            >
                                Fish
                            </button>
                            <button 
                                onClick={() => handleCategoryClick('healthy')}
                                className={`${
                                    selectedCategory === 'healthy' 
                                    ? 'border-orange-500 text-orange-500' 
                                    : 'bg-white border-black'
                                } border-2 rounded-full py-2 lg:py-2.5 xl:py-3 px-4 font-medium text-sm lg:text-base transition-transform duration-200 hover:-rotate-1 transform`}
                            >
                                Healthy
                            </button>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 h-full flex flex-col items-center px-4 sm:px-6 pt-6 sm:pt-8 lg:pt-12 xl:pt-16 lg:border-r-2 lg:border-t-2 border-black'>
                        <div className='flex flex-col items-center gap-3 sm:gap-4 lg:gap-4 xl:gap-5 text-center'>
                            <img src="/asterick.png" alt="" className='w-10 h-10 sm:w-12 sm:h-12 lg:w-12 xl:w-14 lg:h-12 xl:h-14' />
                            <div className='mt-3 sm:mt-4 lg:mt-4 xl:mt-5 space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5'>
                                <h1 className='text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold'>
                                    +{categoryData[selectedCategory].count}
                                </h1>
                                <h1 className='text-base sm:text-lg lg:text-lg xl:text-xl font-bold'>
                                    {categoryData[selectedCategory].title}
                                </h1>
                                <h1 className='text-base sm:text-lg lg:text-lg xl:text-xl font-bold'>
                                    {categoryData[selectedCategory].subtitle}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-3 -left-4 rotate-[10deg] w-full'>
                <AnimatedHero />
            </div>
        </div>
    )
}

export default HeaderHero

export const RecipeDetails = () => {
    const scrollToRecipes = () => {
        const recipesSection = document.getElementById('recipes-section');
        recipesSection?.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
        });
    };

    return (
        <div 
            onClick={scrollToRecipes}
            className="md:mb-0 mb-16 bg-white p-4 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-[280px] lg:max-w-[260px] xl:max-w-[300px] mx-auto lg:mx-0 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
        >
            <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
                <span className="flex items-center bg-orange-400 justify-center w-6 h-6 text-sm rounded-full border-2 border-black font-bold">
                    1
                </span>
                <span className="hover:text-orange-500  transition-colors duration-200">Meat Steak</span>
            </h2>
            <ul className="space-y-2 lg:space-y-2.5 xl:space-y-3 mb-4">
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-200">
                    <span className="text-xs">•</span>
                    <span>Sweet Potato Fries</span>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-200">
                    <span className="text-xs">•</span>
                    <span>Baked French Fries</span>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-200">
                    <span className="text-xs">•</span>
                    <span>Wedge Salad</span>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-200">
                    <span className="text-xs">•</span>
                    <span>Mac and Cheese</span>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-200">
                    <span className="text-xs">•</span>
                    <span>Onion Rings</span>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-200">
                    <span className="text-xs">•</span>
                    <span>Oven Roasted</span>
                </li>
                <li className="flex items-center gap-2 hover:text-orange-500 transition-colors duration-200">
                    <span className="text-xs">•</span>
                    <span>Vegetables</span>
                </li>
            </ul>
            <Link 
                href="#" 
                className="text-orange-500 font-medium underline pl-4 hover:text-orange-600 transition-colors duration-200"
            >
                Read More
            </Link>
        </div>
    )
}

export const AnimatedHero = () => {
    return (
        <div className="bg-black text-white py-3 relative md:right-0 right-[6.8rem] -mt-[45rem] z-50 overflow-hidden transform -rotate-[9deg] md:-rotate-3 md:-mt-4  md:z-10">
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
