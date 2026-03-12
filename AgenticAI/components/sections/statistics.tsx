import Image from "next/image"

const statistics = [
  {
    type: "image",
    imageSrc: "/images/check_circle_outline-24px (1).png",
    value: "1000+",
    label: "Attendees",
    customStyle: true,
  },
  {
    type: "image",
    imageSrc: "/images/assignment_turned_in-24px.png",
    value: "100+",
    label: "Speakers",
    customStyle: false,
  },
  {
    type: "image",
    imageSrc: "/images/supervised_user_circle-24px (2).png",
    value: "90+",
    label: "Exhibitors & Sponsors",
    customStyle: false,
  },
  {
    type: "image",
    imageSrc: "/images/supervised_user_circle-24px (2).png",
    value: "56+",
    label: "Media",
    customStyle: false,
  },
]

export function Statistics() {
  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12 lg:mb-16 px-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white leading-relaxed max-w-3xl mx-auto text-pretty">
            A platform created to meet, greet, share and learn with the global AI experts from multiple domains under one roof.
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-row items-center justify-center gap-3 p-4 transition-all duration-300 ${
                stat.customStyle
                  ? "bg-[#000000] border-2 border-[#0099FF] rounded-tl-[48px] rounded-br-[48px] rounded-tr-none rounded-bl-none"
                  : "group"
              }`}
            >
              {/* Icon (image-based) */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-full flex items-center justify-center">
                <Image
                  src={stat.imageSrc}
                  alt={stat.label}
                  width={48}
                  height={48}
                  className="w-12 h-12 lg:w-14 lg:h-14"
                />
              </div>

              {/* Value and Label Container */}
              <div className="flex flex-col items-start">
                {/* Value */}
                <div className="text-2xl lg:text-3xl font-bold text-[#30B1FC]">
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  className={`text-sm lg:text-base font-medium whitespace-nowrap ${
                    stat.customStyle ? "text-[#30B1FC]" : "text-[#748A97]"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
