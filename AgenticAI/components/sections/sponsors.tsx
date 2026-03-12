import Image from "next/image"

const SPONSOR_LOGOS = [
  { src: "/images/ledgermail.png", alt: "Ledgermail" },
  { src: "/images/pingala.png", alt: "Pingala" },
  { src: "/images/ledgerfi.png", alt: "Ledgerfi" },
]

export default function SponsorsPage() {
  return (
    <section className="relative pt-32 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero / Intro */}
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Partner With <span className="text-[#00D1FF]">Us</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Showcase Your AI Solutions To 800+ Enterprise Decision-Makers. Position Your Brand At
            The Forefront Of The Autonomous Revolution.
          </p>
        </div>

        {/* Sponsor logos container */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-[#30B1FC] bg-black/30 backdrop-blur-sm px-8 py-12 sm:px-12 sm:py-14">
          <div className="flex flex-nowrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {SPONSOR_LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="group flex flex-1 min-w-0 items-center justify-center transition-transform duration-300 ease-out hover:scale-110"
              >
                <div className="relative rounded-xl p-4 transition-all duration-300 ease-out hover:shadow-[0_0_24px_rgba(48,177,252,0.25)] hover:bg-white/5">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={48}
                    className="h-12 w-full max-w-[160px] object-contain object-center transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
