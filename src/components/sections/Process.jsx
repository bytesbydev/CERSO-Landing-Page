const steps = [
  {
    number: "01",
    title: "Discuss",
    description:
      "A short brief — your business, your goal, and any content. No long questionnaires.",
    delay: "",
    variant: "primary",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Your site gets designed and structured to get visitors to actually take action.",
    delay: "delay-100",
    variant: "outline",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "The real, working site is built. We turn revisions around fast to meet your needs.",
    delay: "delay-200",
    variant: "outline",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Forms connected, mobile-checked, and live to bring in enquiries from day one.",
    delay: "delay-300",
    variant: "accent",
  },
];

const getStepStyles = (variant) => {
  switch (variant) {
    case "primary":
      return "bg-[#0058be] text-white shadow-lg shadow-indigo-500/30";
    case "accent":
      return "bg-gray-900 text-white";
    default:
      return "bg-white text-gray-900 border-2 border-[#0058be]";
  }
};

const Process = () => {
  return (
    <section
      id="process"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            From brief to live site, without the back-and-forth.
          </h2>

          <p className="text-gray-600 mt-4">
            A transparent 4-step workflow designed for speed.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 mt-3 left-0 w-full h-0.5 bg-gray-300 -translate-y-1/2 z-0" />

          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative z-10 w-full mt-10 md:w-1/4 flex flex-col items-center text-center transition-all ${step.delay}`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm mb-6 ${getStepStyles(
                  step.variant
                )}`}
              >
                {step.number}
              </div>

              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;