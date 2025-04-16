import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yumiverse - Food Recipe Website",
  description: "A food recipe website with cool features",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        {children}
      <Footer/>
        </body>
    </html>
  )
}


import './globals.css'
import Footer from "@/components/Footer"
