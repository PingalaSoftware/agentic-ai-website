export function ReadyToDefineFuture() {
  return (
    <section className="relative py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center bg-[#30B1FC] border-1 border-white rounded-2xl p-8 sm:p-10 lg:p-12">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
            Ready To Define Future?
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-black mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 800+ Attendees For The Premier Event On Autonomous AI Systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button className="min-w-[180px] px-8 py-3 text-base font-semibold text-white bg-[#003056] rounded-full hover:bg-[#00308F]/90 transition-all duration-200 shadow-lg">
              Get Your Ticket
            </button>
            <a
              href="https://forms.gle/j1rmYcV85VWXkxBq8"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[180px] px-8 py-3 text-base font-semibold text-white bg-[#003056] rounded-full hover:bg-[#00308F]/90 transition-all duration-200 shadow-lg text-center"
            >
              Apply To Sponsor/Exhibit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
