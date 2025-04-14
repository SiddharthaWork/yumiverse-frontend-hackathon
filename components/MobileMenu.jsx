"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="p-2" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-6 p-8">
            <Link href="/recipes" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
              Recipes
            </Link>
            <Link href="/popular" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
              Popular
            </Link>
            <Link href="/healthy" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
              Healthy
            </Link>
            <Link href="/login" className="text-xl font-bold mt-4" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link
              href="/signup"
              className="neo-button bg-neo-purple text-black rounded mt-2"
              onClick={() => setIsOpen(false)}
            >
              Sign up
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
