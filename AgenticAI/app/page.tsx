import { Hero } from "@/components/sections/hero"
import { Statistics } from "@/components/sections/statistics"
import { ConferenceOverview } from "@/components/sections/conference-overview"
import { WhatYoullExplore } from "@/components/sections/what-youll-explore"
import { ReadyToDefineFuture } from "@/components/sections/ready-to-define-future"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <ConferenceOverview />
      <WhatYoullExplore />
      <ReadyToDefineFuture />
      <Contact />
    </>
  )
}
