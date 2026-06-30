const audience = [
  "Local businesses",
  "Clinics & Healthcare",
  "Coaches & Consultants",
  "Student clubs & Events",
  "Startups & NGOs",
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-[#0058be] uppercase tracking-widest font-semibold block mb-4">
            Our Mission
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Crafting Technical Mastery into Aesthetic Clarity
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            At Cerso, we believe that high-end engineering shouldn't be a
            luxury. We founded this studio to bridge the gap between complex
            software architecture and the everyday needs of growing businesses.
            Every line of code we write is a commitment to your long-term
            success.
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-10">
            Who it's for
          </h3>

          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Cerso works best for people and teams who need to look credible
            online fast — without a six-week back-and-forth with an agency.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {audience.map((item) => (
              <div
                key={item}
                className="bg-white border border-slate-200 p-4 rounded-xl text-center font-semibold text-slate-900 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;