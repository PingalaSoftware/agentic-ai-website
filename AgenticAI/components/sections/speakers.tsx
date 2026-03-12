export default function SpeakersSection() {
  return (
    <section className="relative pt-32 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Meet The <span className="text-[#00D1FF]">Minds</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Global Leaders Shaping The Future Of Autonomous Agents, AI Governance, And Enterprise Scale
          </p>
        </div>

        {/* Placeholder: speakers coming soon */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-[#30B1FC] bg-black/30 backdrop-blur-sm px-8 py-16 sm:py-20">
          <p className="text-center text-lg sm:text-xl text-white font-medium mb-2">
            Speakers Onboarding Soon
          </p>
          <p className="text-center text-sm sm:text-base text-gray-400">
            We&apos;re curating an exceptional lineup. Check back for updates.
          </p>
        </div>
      </div>
    </section>
  )
}
