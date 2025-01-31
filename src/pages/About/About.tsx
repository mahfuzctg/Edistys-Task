import { motion } from "framer-motion";
import TechFinCards from "../../components/reUsable/cards/TechFinCards";
import SponsorSection from "../../components/reUsable/SponsorScrolling/SponsorSection";
import OurPhilosophy from "../../components/sections/PhilosophySection";

const About = () => {
  return (
    <>
      <div className="relative w-full h-[800px] animated-bg clip-path-custom-about">
        {/* Hero Content */}
        <div className="relative w-9/12 mx-auto z-10 flex flex-col justify-center items-start h-full pl-10 text-white space-y-6">
          <p className="text-[#36fff2] font-semibold text-xl">ABOUT US</p>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl font-bold leading-tight max-w-2xl"
          >
            Paving the way ahead for finance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-lg max-w-md"
          >
            We’re building technologies that will power the future of banking
            and beyond
          </motion.p>
        </div>
      </div>
      {/*  */}

      <OurPhilosophy></OurPhilosophy>
      <TechFinCards></TechFinCards>
      {/* Scrolling  */}
      <SponsorSection></SponsorSection>
    </>
  );
};

export default About;
