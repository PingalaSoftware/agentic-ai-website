import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Agentic AI Show 2026 | Beyond Assistants, Into Autonomy",
  description: "Join 1000+ attendees for the premier event on autonomous AI systems. Plan. Reason. Act. Bangalore, India.",
  keywords: ["Agentic AI", "AI Conference", "Autonomous Systems", "AI 2026", "Bangalore AI Event"],
  // icons: {
  //   icon: "/favicon.png",
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Header />
        <main className="page-fade">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
