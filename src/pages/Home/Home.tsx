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
      <div className="relative w-full h-screen animated-bg clip-path-custom-home font-[Montserrat]">
        {/* Animated Background Image with Clip-Path */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center bg-no-repeat clip-path-image"
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/L4CdSp1n/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.avif')",
          }}
        ></motion.div>

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
            className="px-6 py-2 bg-orange-500 text-white text-lg font-medium rounded-md hover:bg-orange-600 transition"
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
