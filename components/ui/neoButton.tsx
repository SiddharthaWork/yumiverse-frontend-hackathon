"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface NeoBrutalismButtonProps {
  text: string
  color?: "yellow" | "red" | "blue" | "green" | "brown"
  onClick?: () => void
}

export default function NeoBrutalismButton({ text = "Click Me", color = "yellow", onClick }: NeoBrutalismButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const colorMap = {
    yellow: "bg-yellow-400 hover:bg-yellow-300",
    red: "bg-red-500 hover:bg-red-400",
    blue: "bg-blue-500 hover:bg-blue-400",
    green: "bg-green-500 hover:bg-green-400",
    brown: "bg-[#e1d1bf] hover:bg-[#f5f0e6]",
  }

  return (
    <button
      className={`
        relative font-bold uppercase tracking-wider
        text-base sm:text-lg md:text-xl lg:text-2xl
        py-3 px-5 sm:py-4 sm:px-6 md:py-4 md:px-7 lg:py-5 lg:px-8
        ${colorMap[color]} 
        border-2 sm:border-3 md:border-4 border-black
        transition-all duration-150
        ${isPressed 
          ? "translate-x-[2px] translate-y-[2px] sm:translate-x-[3px] sm:translate-y-[3px] md:translate-x-[4px] md:translate-y-[4px] shadow-none" 
          : "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] lg:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        }
      `}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <div className="flex items-center justify-between gap-1 sm:gap-1.5 md:gap-2">
        {text}
        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </div>
      <div className="absolute -top-1 -left-1 sm:-top-1.5 sm:-left-1.5 md:-top-2 md:-left-2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-black rounded-full" />
      <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-1.5 md:-bottom-2 md:-right-2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-black rounded-full" />
    </button>
  )
}
