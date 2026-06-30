import { Mail, Share2 } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Background skew shape */}
      <div className="absolute top-0 right-0 h-full w-1/3 -skew-x-12 translate-x-1/2 bg-indigo-100/40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Let's get your site live this week.
            </h2>

            <p className="text-lg text-gray-600 mb-12">
              Tell us a bit about what you need. We'll reply within a day with
              next steps — no sales call required to get started.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-[#0d1b2e]">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-gray-600">thecerso@gmail.com</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-[#0d1b2e]">
                  <Share2 size={22} />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Follow Us</p>
                  <p className="text-gray-600">linkedin.com/company/thecerso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-xl">
            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-[#0d1b2e] focus:ring-2 focus:ring-[#0d1b2e]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-[#0d1b2e] focus:ring-2 focus:ring-[#0d1b2e]"
                  />
                </div>
              </div>

              {/* Business */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Your Business Ltd."
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-[#0d1b2e] focus:ring-2 focus:ring-[#0d1b2e]"
                />
              </div>

              {/* Phone number */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+91 87656 76342"
                  inputMode="numeric"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-[#0d1b2e] focus:ring-2 focus:ring-[#0d1b2e]"
                />
              </div>
              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="address"
                  placeholder="City, State, Country"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-[#0d1b2e] focus:ring-2 focus:ring-[#0d1b2e]"
                />
              </div>
              {/* Service */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Service Needed
                </label>

                <select className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-[#0d1b2e] focus:ring-2 focus:ring-[#0d1b2e]">
                  <option>Starter — ₹599</option>
                  <option>Growth — ₹1,299</option>
                  <option>Pro — ₹1,999</option>
                  <option>Custom Solution</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Project Details
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us more about your project..."
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 outline-none focus:border-[#0d1b2e] focus:ring-2 focus:ring-[#0d1b2e]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-900 py-4 font-semibold hover:bg-[#0058be] cursor-pointer text-white transition hover:bg-[#0d1b2e]"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
