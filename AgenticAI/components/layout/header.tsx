"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { NAV_LINKS } from "@/data/constants"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const normalizedPath = pathname?.replace(/\/$/, "") || "/"
  const activeLink = NAV_LINKS.find(
    (link) => (link.href.replace(/\/$/, "") || "/") === normalizedPath
  )?.label ?? null

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-[#0F172A]"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[32px] font-extrabold leading-none">
              <span className="text-white">Agentic</span>
              <span className="text-[#00D1FF]">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[16px] font-medium transition-colors duration-200 ${
                  activeLink === link.label
                    ? "text-[#00D1FF]"
                    : "text-[#E2E8F0] hover:text-[#00D1FF]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section: Button, Search, Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Register Now Button */}
            <button className="px-6 py-2 text-[16px] font-medium text-white border-2 border-[#00D1FF] rounded-lg hover:bg-[#00D1FF] transition-all duration-200">
              Register Now
            </button>

            {/* Search Icon */}
            <button className="w-10 h-10 flex items-center justify-center text-white hover:text-[#00D1FF] transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Menu Toggle */}
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1E3A8A] hover:bg-[#1E40AF] transition-colors duration-200">
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#1E3A8A] hover:bg-[#1E40AF] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0F172A]/98 backdrop-blur-md border-t border-white/10">
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-2 transition-colors duration-200 ${
                    activeLink === link.label
                      ? "text-[#00D1FF]"
                      : "text-[#E2E8F0] hover:text-[#00D1FF]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full px-6 py-3 text-white font-medium border-2 border-[#00D1FF] rounded-lg hover:bg-[#00D1FF] transition-all duration-200 mt-4">
                Register Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
