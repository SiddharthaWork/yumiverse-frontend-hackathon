"use client"
import React from 'react';
import { ArrowDown, ArrowLeft, ChevronRight, CookingPot } from 'lucide-react';

export default function ReadyToCook() {
  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault(); // Prevent default link behavior
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
    });
  };

  return (
    <div className='w-full h-fit dot-pattern'>
      <div className="flex min-h-[60vh] items-center justify-center bg-white p-4 md:p-8 dot-pattern">
        <div className="mx-auto max-w-8xl space-y-14 xl:my-10 ">
          {/* Header */}
          <div className="2xl:-ml-16 md:mb-2 mb-4 flex items-center">
            <div className="mr-4 rotate-[-5deg] border-[6px] border-black bg-white p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {/* <ArrowDown className="h-6 w-6" /> */}
              <CookingPot className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight md:text-4xl">READY TO COOK</h1>
          </div>

          {/* Yellow banner */}
          <div className="mb-10 border-[6px] border-black bg-[#FFDE59] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl font-bold md:text-2xl">
              Before diving into your culinary adventure, let's make sure you're fully prepared!
            </p>
          </div>

          {/* Cards container */}
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            <StepCard
              number={1}
              title="GATHER"
              description="Collect all ingredients"
              color="#FF6B6B"
              image="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg"
              rotation="-3deg"
            />
            <StepCard
              number={2}
              title="WORKSPACE"
              description="Clear your counters"
              color="#4ECDC4"
              image="https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg"
              rotation="2deg"
            />
            <StepCard
              number={3}
              title="READ"
              description="Understand the process"
              color="#F9C80E"
              image="https://images.pexels.com/photos/4049786/pexels-photo-4049786.jpeg"
              rotation="-2deg"
            />
            <StepCard
              number={4}
              title="MEASURE"
              description="Pre-measure everything"
              color="#7BDFF2"
              image="https://www.pamperedchef.ca/iceberg/com/product/100193-lg.jpg"
              rotation="3deg"
            />
            <StepCard
              number={5}
              title="PREP"
              description="Wash, chop, dice"
              color="#FF9F1C"
              image="https://images.pexels.com/photos/4259707/pexels-photo-4259707.jpeg"
              rotation="-2deg"
            />
            <StepCard
              number={6}
              title="PREHEAT"
              description="Get oven/pan ready"
              color="#B388EB"
              image="https://images.pexels.com/photos/6605302/pexels-photo-6605302.jpeg"
              rotation="2deg"
            />
          </div>

          {/* Start cooking button */}
          <div className="flex justify-center">
            <button onClick={scrollToSection('recipes-section')} className="group relative gap-2 flex items-center border-[6px] border-black hover:bg-red-400 bg-white hover-bg-[#FF6B6B] px-8 py-4 text-2xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              START COOKING
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ number, title, description, color, image, rotation }) {
  return (
    <div className="relative" style={{ transform: `rotate(${rotation})` }}>
      {/* Card with border */}
      <div
        className="relative border-[6px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        style={{ backgroundColor: color }}
      >
        {/* Image container */}
        <div className="relative border-b-[6px] border-black bg-white">
          <div className="relative h-[100px] overflow-hidden">
            <img
              src={image}
              alt={title}
              width={200}
              height={100}
              className="h-full w-full object-cover"
            />
            {/* Diagonal black stripe overlay */}
          </div>
        </div>

        {/* Text content */}
        <div className="p-3 pt-2">
          <h2 className="text-xl font-black uppercase leading-tight">{title}</h2>
          <p className="text-sm font-bold">{description}</p>
        </div>
      </div>

      {/* Number badge */}
      <div className="absolute -right-3 -top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-black bg-white font-black text-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,0.7)]">
        {number}
      </div>
    </div>
  );
}
