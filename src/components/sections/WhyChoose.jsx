
const features = [
  {
    id: "01",
    title: "Affordable Solutions",
    description:
      "Premium quality at startup-friendly prices. No hidden fees or agency bloat.",
  },
  {
    id: "02",
    title: "Rapid Deployment",
    description:
      "From kickoff to launch in as little as 5–14 days. We move as fast as you do.",
  },
  {
    id: "03",
    title: "Clean Design",
    description:
      "Minimalist, functional aesthetics that enhance your brand without distraction.",
  },
  {
    id: "04",
    title: "Tailored for You",
    description:
      "Every line of code and design element is built specifically for your business goals.",
  },
];
const WhyChoose = () => {
  return (
    <div><section className="bg-slate-900 py-20">
  <div className="mx-auto max-w-7xl px-6">
    {/* Heading */}
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        Why Choose Cerso?
      </span>

      <h2 className="mt-4 text-4xl font-bold text-white">
        We cut through the noise with results-oriented engineering.
      </h2>

      <p className="mt-4 text-lg text-slate-400">
        Fast delivery, modern design, and scalable solutions built for growing
        businesses.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="rounded-2xl border border-slate-700 bg-slate-800 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
        >
          <div className="mb-6 text-5xl font-bold text-blue-400">
            {feature.id}
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-white">
            {feature.title}
          </h3>

          <p className="leading-7 text-slate-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section></div>
  )
}

export default WhyChoose