"use client"

import { useState } from "react"

const DAYS = [
  { id: "day1", label: "Day 1: Foundation" },
  { id: "day2", label: "Day 2: Scale & Trust" },
]

export default function AgendaSection() {
  const [activeDay, setActiveDay] = useState("day1")

  return (
    <section className="relative pt-24 pb-12">
      {/* Hero with full background image visible */}
      <div
        className="relative min-h-[55vh] w-full bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(/images/Mask%20Group%208.png)",
          backgroundSize: "contain",
          backgroundColor: "#0F172A",
        }}
      >
      </div>

      {/* Title, subtitle, tabs and content - below hero, no overlap */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 relative z-10">
        <div className="text-center mb-8 lg:mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Conference Agenda
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed">
            Two Days Of Deep Dives, Keynotes, And Workshops.
          </p>
        </div>

        {/* Day tabs - border only on non-active tab; active tab has rounded outer edge only */}
        <div className="flex justify-center mb-12 lg:mb-14">
          <div className="inline-flex overflow-hidden">
            {DAYS.map((day, index) => {
              const isActive = activeDay === day.id
              const isFirst = index === 0
              const isLast = index === DAYS.length - 1
              return (
                <button
                  key={day.id}
                  onClick={() => setActiveDay(day.id)}
                  className={`px-8 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out ${
                    isActive ? "bg-[#30B1FC] text-black" : "bg-black/30 text-white"
                  } ${!isActive ? "border border-[#30B1FC]" : ""} ${
                    !isActive && isFirst ? "border-r-0" : ""
                  } ${!isActive && isLast ? "border-l-0" : ""} ${
                    isFirst ? (isActive ? "rounded-l-full" : "rounded-l-none") : "rounded-l-none"
                  } ${
                    isLast ? (isActive ? "rounded-r-full" : "rounded-r-none") : "rounded-r-none"
                  }`}
                >
                  {day.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Placeholder: no calendar yet */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-[#30B1FC] bg-black/30 backdrop-blur-sm px-8 py-16 sm:py-20">
          <p className="text-center text-lg sm:text-xl text-white font-medium mb-2">
            Agenda Coming Soon
          </p>
          <p className="text-center text-sm sm:text-base text-gray-400">
            Sessions and schedule will be published here soon. Check back for updates.
          </p>
        </div>
      </div>
    </section>
  )
}
