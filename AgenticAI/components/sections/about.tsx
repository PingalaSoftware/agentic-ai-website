export function AboutSection() {
  return (
    <section className="relative pt-32 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            About The <span className="text-[#30B1FC]">Show</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            From &quot;Agent Alley&quot; To Innovation Pods, Showcase Your Autonomous Tech To Investors And
            Enterprise Buyers.
          </p>
        </div>

        {/* Content Card */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-[#30B1FC] bg-black/30 backdrop-blur-2xl px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-14 shadow-[0_0_0_1px_rgba(48,177,252,0.2)]">
          {/* Our Mission */}
          <div className="text-center mb-10">
            <h3 className="text-base sm:text-lg font-semibold text-[#30B1FC] mb-3">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              The Agentic AI Show Is Dedicated To Advancing Conversations At The Intersection Of AI, Autonomy, Agility, Governance, And Human Collaboration. We Believe That Agentic AI Represents A Fundamental Shift In Computing—From Tools That Wait For Commands To Systems That Pursue Goals.
            </p>
          </div>

          <div className="border-t border-white/10 my-6 lg:my-8" />

          {/* Who We Are */}
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold text-[#30B1FC] mb-3">
              Who We Are
            </h3>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Curated By The Team Behind The Technical Agility Conference, We Bring Decades Of Experience In Organizing High-Impact Technology Events In India. Our Goal Is To Help Indian Enterprises And Startups Adopt Agentic AI Responsibly, Securely, And Effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

