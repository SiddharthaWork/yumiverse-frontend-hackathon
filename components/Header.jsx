"use client"
import Link from "next/link"
import { Search } from "lucide-react"
import MobileMenu from "./MobileMenu"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault(); // Prevent default link behavior
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
    });
  };

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
    <header className={`sticky top-0 left-0 right-0 z-50 border-b-2 border-black bg-dot-pattern px-2 py-2 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-[#f5f0e6]'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-black">
          Yumiverse
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:underline">
            Home
          </Link>
          <button 
            onClick={scrollToSection('categories-section')}
            className="font-medium hover:underline"
          >
            Popular
          </button>
          <button 
            onClick={scrollToSection('recipes-section')}
            className="font-medium hover:underline"
          >
            Recipes
          </button>
          <button 
            onClick={scrollToSection('subscribe')}
            className="font-medium hover:underline"
          >
            Subscribe
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-1">
            <Search size={20} />
          </button>
          <Link href="/login" className="font-medium hover:underline">
            Login
          </Link>
          <Link href="/signup" className="neo-button bg-neo-purple text-black rounded">
            Sign Up
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
