import { Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-block rounded-full border border-indigo-200 bg-indigo-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0058be]">
              FOUNDING CLIENT OFFER — 5 SPOTS PER TIER
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              From idea to{" "}
              <span className="text-[#0058be]">impact.</span>
              <br />
              Delivered in days, not months.
            </h1>

            {/* Paragraph */}
            <p className="mb-10 max-w-lg text-lg leading-8 text-gray-600">
              Cerso builds websites and business systems that get you noticed —
              fast. No long agency timelines, no bloated retainers. Just a site
              that gets you enquiries.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                className="px-8 py-4 rounded-lg bg-[#0d1b2e] cursor-pointer text-white font-semibold hover:bg-[#0058be] transition"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get a Free Quote
              </button>

              <button
                className="px-8 py-4 rounded-lg border-2 border-[#0d1b2e] cursor-pointer text-[#0d1b2e] font-semibold hover:bg-[#0058be] hover:border-[#0058be] hover:text-white transition"
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See founding prices
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl"></div>

            {/* Image */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPSWKC8SEwlP1sjIgoCc1pmaiL-kp-MX4mczNmcgdjEHxDNqXRNLpHndrig4cCUgmwAU8y336-muvbikmEqK4wUv29eIRJbMFx4CuCvGiY3pSQ6lQWNVuD4WUjG5J3lFjN81za-UjHWj266EEFZm8BTSmIpKzqWTvwJ0AmiNOOoxuVl4tKVBfUdKQN-43k-PZPIQQdwLH0Bh2pUrAucFuAoDx6ZW5aNXOjmP6frymh_SMGiigE2I_5ag"
              alt="Hero Illustration"
              className="relative z-10 w-full rounded-2xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="hidden md:block absolute -left-10 bottom-10 z-20 rounded-2xl p-6 shadow-xl bg-white/70 backdrop-blur-md border border-white/40">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#0d1b2e] p-2 text-white">
                  <Zap size={20} />
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    Live in 5 Days
                  </p>
                  <p className="text-xs text-gray-500">
                    Rapid Deployment Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}