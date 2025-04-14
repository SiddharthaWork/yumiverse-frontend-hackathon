import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neo-teal border-t-2 border-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black mb-4">Recify</h3>
            <p className="mb-4">
              Recify is more than just a recipe website. It's a vibrant community where you can share your culinary
              masterpieces and embark on a flavorful journey that will delight your senses and ignite your creativity.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
                <Youtube size={16} />
              </Link>
            </div>
          </div>
          <div className="w-full h-full md:col-span-1 flex md:flex-row flex-col justify-end gap-12">
          <div className="md:col-span-1">
            <h4 className="font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  History
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Chefs
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Legal/Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-bold mb-4">Home</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Features
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>

      {/* Decorative curved arrow */}
      <div className="flex justify-center mt-8">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10C40 10 80 10 110 40" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <path d="M100 20L110 40L90 40" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </footer>
  )
}
