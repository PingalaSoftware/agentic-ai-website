import AgendaSection from "@/components/sections/agenda"
import { ReadyToDefineFuture } from "@/components/sections/ready-to-define-future"
import { Contact } from "@/components/sections/contact"

export default function AgendaPage() {
  return (
    <>
      <AgendaSection />
      <ReadyToDefineFuture />
      <Contact />
    </>
  )
}
