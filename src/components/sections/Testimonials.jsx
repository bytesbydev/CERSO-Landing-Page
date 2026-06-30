import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Miller",
    role: "Clinic Director",
    review:
      "Cerso delivered our clinic website in just 4 days. The process was incredibly smooth and the design is stunning.",
  },
  {
    name: "David Chen",
    role: "Lead Consultant",
    review:
      "The registration portal they built for our coaching program has saved us hours of manual work every week.",
  },
  {
    name: "Marcus Thorne",
    role: "Founder & CEO",
    review:
      "Fast, professional, and affordable. Exactly what our startup needed to establish immediate credibility.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="mb-6 italic leading-relaxed text-slate-600">
                "{item.review}"
              </p>

              <h3 className="font-semibold text-slate-900">
                {item.name}
              </h3>

              <p className="text-sm text-slate-500">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;