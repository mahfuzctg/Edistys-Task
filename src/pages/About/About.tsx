import { motion } from "framer-motion";
import TechFinCards from "../../components/reUsable/cards/TechFinCards";
import SponsorSection from "../../components/reUsable/SponsorScrolling/SponsorSection";
import OurFounder from "../../components/sections/about/OurFounder";
import OurMission from "../../components/sections/about/OurMission";
import OurStory from "../../components/sections/about/OurStory";
import OurValues from "../../components/sections/about/OurValues";

const About = () => (
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
          We’re building technologies that will power the future of banking and
          beyond
        </motion.p>
      </div>
    </div>
    {/*  */}
    {/* Our story */}
    <OurStory></OurStory>
    {/* Tech finance  */}
    <TechFinCards></TechFinCards>
    {/* Scrolling  */}
    <SponsorSection></SponsorSection>
    {/* Our Mission */}
    <OurMission></OurMission>
    {/* Our Values */}
    <OurValues></OurValues>
    {/* Our Founder */}
    <OurFounder></OurFounder>
  </>
);

export default About;
