import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-8 dot-pattern">
      <div className="container mx-auto px-4">
        <div className="neo-card max-w-5xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <Image
                src="/images/tuna-salad.jpg"
                alt="Tropical Tuna Delight Salad"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 bg-white flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-4">Tropical Tuna Delight Salad</h2>
              <p className="mb-6">
                Bursting with nutritious ingredients like tender tuna, boiled eggs, peppery arugula, juicy cherry
                tomatoes, and sweet corn, this refreshing salad is a feast for the senses.
              </p>
              <div className="flex justify-center">
                <button className="neo-button bg-neo-yellow rounded flex items-center justify-center gap-2">
                  See Recipe <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
