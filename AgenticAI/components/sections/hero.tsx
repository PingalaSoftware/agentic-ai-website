"use client"

import { useState, useRef } from "react"
import { Calendar, MapPin, Users, Volume2, VolumeX } from "lucide-react"
import { HERO_EVENT_DETAILS } from "@/data/constants"

const HERO_VIDEO_SRC = "/videos/Technical_Agility_Excellence_Team_Award_-_Team_Brillio_Agilists_1080P_1.mp4"

export function Hero() {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const iconMap = {
    Calendar,
    Users,
    MapPin,
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={HERO_VIDEO_SRC}
          autoPlay
          loop
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Mute / Unmute control */}
      <button
        type="button"
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 border border-white/20 text-white transition-colors duration-200"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center border-2 border-[#30B1FC] rounded-2xl backdrop-blur-sm bg-navy-950/50 p-8 sm:p-10 lg:p-12 shadow-2xl shadow-[#30B1FC]/20">
          {/* Main Title */}
          <div className="mb-6 space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Agentic AI Show{" "}
              <span className="text-blue-500">2026</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light">
              beyond assistants. into autonomy.
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-white/90 font-medium mb-6 tracking-wide">
            Plan. Reason. Act.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
            {HERO_EVENT_DETAILS.map((detail, index) => {
              const Icon = iconMap[detail.icon as keyof typeof iconMap]
              return (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-white/80"
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                  <span className="text-sm sm:text-base font-medium">{detail.text}</span>
                  {index < HERO_EVENT_DETAILS.length - 1 && (
                    <span className="text-[#30B1FC] mx-2">•</span>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-full min-w-[200px] px-8 py-3 text-base font-medium text-white border-2 border-[#30B1FC] bg-[#003159]/0 hover:bg-[#003159]/10 transition-all duration-200">
              Register Now
            </button>
            <button className="rounded-full min-w-[200px] px-8 py-3 text-base font-medium text-white border-2 border-[#FFFCFC] bg-[#30B1FC]/30 hover:bg-[#30B1FC]/90 transition-all duration-200">
              Become Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
