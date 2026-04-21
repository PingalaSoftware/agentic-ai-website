import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CONFERENCE_CHECKLIST } from "@/data/constants"
import Image from "next/image"
import Link from "next/link"

export function ConferenceOverview() {
  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Why Agentic AI —{" "}
            <span className="text-[#30B1FC]">Why Now?</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            AI has evolved beyond simple chatbots and assistants. The next wave is
            autonomous systems that can plan, reason, and act independently. Join
            us to explore this transformative technology.
          </p>
        </div>

        {/* Conference Card */}
        <Card className="max-w-5xl mx-auto bg-[#0A0A0A] backdrop-blur-sm border-2 border-[#30B1FC] overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto min-h-[400px] flex items-center justify-center p-8 bg-[#0a0a0a]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/digital-mind-abstract-representation-human-intelligence-neural-network.png"
                    alt="Digital Mind - Neural Network"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <p className="text-[#30B1FC] mb-8 leading-relaxed">
                  This Conference Brings Together Enterprise Leaders, Builders, Policymakers, And Startups To Define The Future Where Autonomy Meets Responsibility.
                </p>

                {/* Checklist */}
                <ul className="space-y-4 mb-8">
                  {CONFERENCE_CHECKLIST.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-white"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="flex justify-start">
                  <Link href="/agenda">
                    <button className="flex items-center gap-2 px-8 py-3 text-base font-medium bg-[#30B1FC]/30 text-white border-2 border-[#30B1FC] rounded-full hover:bg-[#30B1FC]/50 transition-all duration-200">
                      {/* <Check className="w-5 h-5" /> */}
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
