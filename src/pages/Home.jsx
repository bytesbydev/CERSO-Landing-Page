import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import HowItWorks from "../components/sections/HowItWorks";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Process from "../components/sections/Process";
import WhyChoose from "../components/sections/WhyChoose";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <WhyChoose/>
      <Pricing />
      <Process/>
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;