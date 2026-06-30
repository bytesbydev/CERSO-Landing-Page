import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/2.png";


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Who it's for", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#process" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_LINKS.map((l) =>
        document.querySelector(l.href)
      );

      let current = "#home";

      sections.forEach((sec, i) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();

        // 120px offset matches header buffer for smooth scroll spy
        if (rect.top <= 120) {
          current = NAV_LINKS[i].href;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm">
        <nav className="max-w-[1280px] mx-auto px-2 flex justify-between items-center">
          
          {/* LOGO FROM SCREENSHOT */}
          <a href="#home" className="flex items-center h-fit py-1 border-none">
            <img
  src={logo}
  alt="Cerso"
  className="h-18 w-auto object-contain block"
/>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-10 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative transition duration-300 py-1 ${
                  active === link.href 
                    ? "text-[#0058be] font-semibold" 
                    : "text-[slate-500"
                }`}
              >
                {link.label}

                {/* SLIDING UNDERLINE BAR */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-[#0058be] transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA & MOBILE MENU TRIGGER */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:block bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-blue-500 transition-all duration-300"
            >
              Get a Free Quote
            </a>

            <button
              className="md:hidden text-slate-900 p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 md:hidden">
          {/* Close menu alternative via internal X button layout */}
          <button
            className="absolute top-6 right-6 text-slate-900"
            onClick={() => setOpen(false)}
          >
            <X size={34} />
          </button>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActive(link.href);
                setOpen(false);
              }}
              className={`text-2xl font-semibold transition ${
                active === link.href ? "text-slate-900" : "text-slate-500 hover:text-blue-500"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-slate-900 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-500 transition"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </>
  );
}