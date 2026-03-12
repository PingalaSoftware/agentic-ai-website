import { Card, CardContent } from "@/components/ui/card"
import { EXPLORE_CATEGORIES } from "@/data/constants"
import Image from "next/image"

const iconImageMap: Record<string, string> = {
  "Foundations": "/images/bricks-icon (1).png",
  "Healthcare": "/images/medical-briefcase-icon.png",
  "Fintech": "/images/debit-card-icon.png",
  "Legal": "/images/gavel-icon.png",
  "Security": "/images/shield-icon.png",
  "Human-In-Loop": "/images/business-team-icon.png",
  "Retail": "/images/cart-black-icon.png",
}

export function WhatYoullExplore() {
  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            What You&apos;ll{" "}
            <span className="text-[#30B1FC]">Explore</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Deep Dives Into Industry-Specific Applications And Horizontal Foundations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {EXPLORE_CATEGORIES.map((category, index) => (
            <Card
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-black hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <CardContent className="p-8" >
                {/* Icon */}
                {/* <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-110"> */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-110">

                  <Image
                    src={iconImageMap[category.title]}
                    alt={category.title}
                    width={48}
                    height={48}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
