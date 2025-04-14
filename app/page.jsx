import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import CategoriesSection from "@/components/CategoriesSection"
import RecipesSection from "@/components/RecipesSection"
import Footer from "@/components/Footer"
import HeadHero from "@/components/HeadHero"
import HeaderHero from "@/components/HeaderHero"
import CulinaryPhilosophy from "@/components/CulnaryPhilosophy"
import RecipeSearch from "@/components/Search"

export default function Home() {
  return (
    <>
      <Header />
        <HeaderHero />
        <CulinaryPhilosophy/>
        {/* <HeroSection /> */}
        <CategoriesSection />
        <RecipeSearch />
        <RecipesSection />
        <Footer />
    </>
  )
}
