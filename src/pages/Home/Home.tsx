import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-[#005BC4] via-[#13A8ED] to-[#005BC4] clip-path-custom">
      {/* Animated Background Image with Clip-Path */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute right-0 top-0 w-1/2 h-full bg-cover bg-center bg-no-repeat clip-path-image"
        style={{
          backgroundImage: "url('https://i.postimg.cc/fL0LJgTm/dress.webp')",
        }}
      ></motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full pl-10 text-white space-y-6">
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
          className="text-lg max-w-md"
        >
          Reimagine financial services with Edistys' open platform, distributed
          banking solutions that power transformation.
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
  );
};

export default Home;
