"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { email })
    setEmail("")
  }

  return (
    <section
      id="contact"
      className="relative pt-12 pb-0 -mb-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Contact card – transparent black with stronger blur */}
          <div className="relative rounded-2xl p-8 sm:p-10 lg:p-12 bg-black/0 border border-[#30B1FC] backdrop-blur-2xl shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
              {/* Left: Title and description */}
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Contact Us!
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Got any queries? Reach out to us today to get instant support.
                </p>
              </div>

              {/* Right: Search bar with Send button overlaid on the right */}
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-[360px] lg:max-w-[320px] relative h-12 rounded-3xl overflow-visible"
              >
                <input
                  type="email"
                  placeholder="Email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-full pl-5 pr-32 rounded-3xl bg-dark-700/80 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/50"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 rounded-2xl px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm z-10"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
