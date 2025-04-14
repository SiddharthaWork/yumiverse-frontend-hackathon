"use client"
import Link from "next/link"
import { Search } from "lucide-react"
import MobileMenu from "./MobileMenu"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 border-b-2 border-black bg-dot-pattern py-2 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-[#f5f0e6]'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black">
          Yumiverse
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/recipes" className="font-medium hover:underline">
            Recipes
          </Link>
          <Link href="/popular" className="font-medium hover:underline">
            Popular
          </Link>
          <Link href="/healthy" className="font-medium hover:underline">
            Healthy
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-1">
            <Search size={20} />
          </button>
          <Link href="/login" className="font-medium hover:underline">
            Login
          </Link>
          <Link href="/signup" className="neo-button bg-neo-purple text-black rounded">
            Sign up
          </Link>
        </div>

        <div className="flex md:hidden items-center space-x-2">
          <button className="p-1">
            <Search size={20} />
          </button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
