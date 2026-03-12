import SpeakersSection from "@/components/sections/speakers"
import { ReadyToDefineFuture } from "@/components/sections/ready-to-define-future"
import { Contact } from "@/components/sections/contact"

export default function SpeakersPage() {
  return (
    <>
      <SpeakersSection />
      <ReadyToDefineFuture />
      <Contact />
    </>
  )
}
