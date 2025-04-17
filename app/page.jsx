import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import CategoriesSection from "@/components/CategoriesSection"
import RecipesSection from "@/components/RecipesSection"
import Footer from "@/components/Footer"
import HeadHero from "@/components/HeadHero"
import HeaderHero from "@/components/HeaderHero"
import CulinaryPhilosophy from "@/components/CulnaryPhilosophy"
import RecipeSearch from "@/components/Search"
import ReadyToCook from "@/components/Rtc"
import SubscribeSection from "@/components/ui/Subscribe"

export default function Home() {
  return (
    <div className="overflow-hidden">
        <HeaderHero />
        <ReadyToCook />
        <CategoriesSection />
        <RecipesSection />
        <CulinaryPhilosophy/>
        <HeroSection />
        <SubscribeSection/>
    </div>
  )
}
