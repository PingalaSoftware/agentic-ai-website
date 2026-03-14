import Link from "next/link"
import { Linkedin, X, Send } from "lucide-react"
import { FOOTER_LINKS, SUPPORT_LINKS, SOCIAL_LINKS } from "@/data/constants"

const socialIcons = {
  Linkedin,
  Send,
  X,
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-4xl font-bold text-white">
                Agentic
                <span className="text-blue-500">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
            {"India's First Conference Dedicated To Autonomous AI Agents. Exploring The Future Of Enterprise Autonomy."}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons]
                return (
                  // <Link
                  //   key={social.platform}
                  //   href={social.href}
                  //   className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-colors duration-200 group"
                  //   aria-label={social.platform}
                  // >
                  //   <Icon className="w-5 h-5 text-white group-hover:text-white" />
                  // </Link>
                  <span
                    key={social.platform}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-colors duration-200"
                    aria-label={social.platform}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </span>
                )
              })}
            </div>
            {/* <p className="mt-4 text-gray-500 text-xs md:text-sm">
              © {new Date().getFullYear()} Agentic AI Show. All Rights Reserved.
            </p> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <p className="text-gray-500 text-sm">
                {/* Copyright & Design By @Sanmeet_Bamane */}
                © {new Date().getFullYear()} Agentic AI Show. All Rights Reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="#terms"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-200 text-sm"
              >
                Terms of use
              </Link>
              <span className="h-4 w-px bg-gray-700" />
              <Link
                href="#privacy"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
