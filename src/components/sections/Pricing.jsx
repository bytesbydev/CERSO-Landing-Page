import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹599",
    subtitle: "Live in 3–5 days",
    badge: "5 spots left",
    featured: false,
    buttonClass:
      "bg-white text-[#0d1b2e] border-2 border-[#0d1b2e] hover:bg-[#0d1b2e] hover:text-white",
    features: [
      "Single-page website",
      "Contact form, wired to your inbox",
      "Mobile-optimized",
      "Basic on-page SEO",
    ],
  },
  {
    name: "Growth",
    price: "₹1,299",
    subtitle: "Most popular for small businesses",
    badge: "5 spots left",
    featured: true,
    popular: "POPULAR PICK!",
    buttonClass:
      "bg-[#0058be] text-white hover:bg-white hover:text-[#0058be] border-2 border-[#0d1b2e]",
    features: [
      "Everything in Starter",
      "Up to 5 pages",
      "Lead capture & registration forms",
      "Basic analytics setup",
    ],
  },
  {
    name: "Pro",
    price: "₹1,999",
    subtitle: "For teams ready to automate",
    badge: "5 spots left",
    featured: false,
    buttonClass:
      "bg-white text-[#0d1b2e] border-2 border-[#0d1b2e] hover:bg-[#0d1b2e] hover:text-white",
    features: [
      "Everything in Growth",
      "AI chatbot, trained on your business",
      "Form & workflow automation",
      "Priority support",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            LaunchKit Pricing
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Founding client pricing. Real-agency results. The first 5 clients on
            each tier get LaunchKit at a fraction of its real price.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                plan.featured
                  ? "bg-[#0d1b2e] text-white shadow-xl border-4 border-[#0058be] scale-105 z-10"
                  : "bg-white text-gray-900 shadow-sm border border-gray-200"
              }`}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0058be] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {plan.popular}
                </div>
              )}

              {/* Badge */}
              <div
                className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                  plan.featured ? "text-indigo-200" : "text-[#0058be]"
                }`}
              >
                {plan.badge}
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-4xl font-bold mb-1">
                {plan.price}
              </div>

              {/* Subtitle */}
              <p
                className={`text-sm mb-8 ${
                  plan.featured ? "text-white/70" : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <CheckCircle
                      size={18}
                      className={
                        plan.featured
                          ? "text-indigo-200"
                          : "text-[#0058be]"
                      }
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a
                href="#contact"
                className={`w-full py-3 rounded-lg text-center font-bold transition-all ${plan.buttonClass}`}
              >
                Claim founding price
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;