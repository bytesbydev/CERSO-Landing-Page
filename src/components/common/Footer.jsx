const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 w-full rounded-t-2xl">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
           <img src="src/assets/2.png" alt="" srcset="" className="invert" />
          </div>

          <p className="text-sm text-white/60 max-w-xs">
            Built in days, not months. Precision engineering for the digital age.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold mb-6">Navigation</h4>

          <ul className="space-y-4 text-sm text-white/80">
            <li>
              <a href="#home" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-400 transition">
                Who it's for
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-indigo-400 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-indigo-400 transition">
                How it works
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-6">Contact</h4>

          <ul className="space-y-4 text-sm text-white/80">
            <li>thecerso@gmail.com</li>

            <li>
              <a
                href="https://www.linkedin.com/company/thecerso/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Offer */}
        <div>
          <h4 className="font-bold mb-6">Founding Offer</h4>

          <p className="text-sm text-white/60 mb-6">
            Only 5 spots left per tier for our founding client program.
          </p>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/thecerso/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-500 transition"
            >
              <span className="text-xs font-bold">in</span>
            </a>
          </div>

          <div className="mt-8 text-sm text-white/40">
            © 2026 Cerso. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;