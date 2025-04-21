import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

// adding image in the head


export const metadata = {
  title: "Yumiverse - Food Recipe Website",
  description: "A food recipe website with cool features",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/chef.png" />
      </Head>
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
