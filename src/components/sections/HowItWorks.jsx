import { Globe, MonitorCog, Rocket, Blocks } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance websites and landing pages built to bring in enquiries and bookings.",
    delay: "",
  },
  {
    icon: MonitorCog,
    title: "Management Systems",
    description:
      "Registration portals and dashboards that replace spreadsheets and manual admin work.",
    delay: "delay-100",
  },
  {
    icon: Rocket,
    title: "Digital Presence",
    description:
      "SEO-optimized architecture and conversion-focused design to ensure you're found and trusted.",
    delay: "delay-200",
  },
  {
    icon: Blocks,
    title: "Custom Solutions",
    description:
      "Bespoke AI chatbots and automated workflows tailored to your unique business needs.",
    delay: "delay-300",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One studio. Four ways we help you grow.
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Tailored digital solutions built for conversion and efficiency.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 ${service.delay}`}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-[#0058be] group-hover:scale-110 transition-all duration-300 mb-6">
                  <Icon
                    size={30}
                    className="text-blue-600 group-hover:text-white transition-colors"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;