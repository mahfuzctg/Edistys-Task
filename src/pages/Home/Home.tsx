import { motion } from "framer-motion";
import TechFinCards from "../../components/reUsable/cards/TechFinCards";
import BrandLogo from "../../components/sections/home/BrandLogo";
import Countdown from "../../components/sections/home/Countdown";
import FinanceSection from "../../components/sections/home/FinanceSection";
import FutureTab from "../../components/sections/home/FutureTab";
import OurPhilosophy from "../../components/sections/home/PhilosophySection";

const Home = () => {
  return (
    <>
      {" "}
      <div className="relative w-full h-screen animated-bg md:clip-path-custom-home font-Montserrat">
        {/* Animated Background Image with Clip-Path */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "1%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute   right-0 top-0 w-9/12 h-full bg-cover bg-center bg-no-repeat clip-path-image animated-bg gradient-background"
        ></motion.div>

        {/* New Image in Right Top Corner */}
        <div className="absolute ml-[45%] mt-[13%] ">
          {" "}
          {/* Adjust the opacity value as needed */}
          <img
            src="/src/assets/Images/WaveLinesDesktop1.svg"
            className="w-full h-full"
          />
        </div>

        {/* Hero Content */}
        <div className="relative w-9/12 mx-auto z-10 flex flex-col justify-center items-start h-full pl-10 text-white space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl font-bold leading-tight max-w-2xl"
          >
            Embrace the future <br /> of finance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-lg max-w-md font-[Montserrat]"
          >
            Reimagine financial services with Edistys' open platform,
            distributed banking solutions that power transformation.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-orange-500 text-white  font-bold rounded-md hover:bg-orange-600 transition"
          >
            Reach Out to Us ›
          </motion.button>
        </div>
      </div>
      <FinanceSection></FinanceSection>
      <OurPhilosophy></OurPhilosophy>
      <TechFinCards></TechFinCards>
      <FutureTab></FutureTab>
      <Countdown></Countdown>
      <BrandLogo></BrandLogo>
    </>
  );
};

export default Home;
