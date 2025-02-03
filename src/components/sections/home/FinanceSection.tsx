const FinanceSection = () => {
  return (
    <section className="w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-6 bg-[#FFFFFF] relative">
      {/* Text Section */}
      <div className="md:w-1/2 w-full md:pl-12 py-20">
        <h2 className="text-lg font-semibold text-[#1F80F0] mb-4">
          POWERING THE FUTURE OF FINANCE
        </h2>
        <p className="text-6xl font-bold text-[#0B305B] mb-6 w-[95%]">
          Uncovering new ways to delight customers
        </p>
        <p className="text-md font-bold text-[#0B305B] mb-6">
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className="text-md  text-[#0B305B]">
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      {/* Background Image Section */}
      <div className="mx-auto mb-8 md:mb-0 relative">
        <img
          src="https://i.postimg.cc/ryhjsyg2/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.avif"
          alt="Finance Technology"
          className="w-full md:w-9/12 opacity-90 z-20" // Set z-index for the main image to bring it in front
        />

        {/* Front Images */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex ">
          {" "}
          {/* Lower z-index for the front images */}
          {/* First Image: 50% outside to the left */}
          <img
            src="https://i.postimg.cc/dVzkSpBf/finance-logo-1.png"
            alt="Image 1"
            className="w-20 h-20 ml-6 -mt-24 rounded-full shadow-xl animate-slow-bounce"
          />
          {/* Second Image: 50% outside to the right */}
          <img
            src="https://i.postimg.cc/dVzkSpBf/finance-logo-1.png"
            alt="Image 2"
            className="w-20 h-20 mr-24 mt-12 rounded-full shadow-xl animate-slow-bounce"
          />
          {/* Third Image: 50% inside from the right border */}
          <img
            src="https://i.postimg.cc/dVzkSpBf/finance-logo-1.png"
            alt="Image 3"
            className="w-28 h-28 ml-36 -mt-12 rounded-full shadow-xl animate-slow-bounce"
          />
        </div>

        {/* Graphical shapes here */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex z-0">
          {" "}
          {/* Lower z-index for the shapes */}
          {/* First Image: 50% outside to the left */}
          <img
            src="/src/assets/Images/ctaMobileWaveLines (1).svg"
            alt="Image 1"
            className="opacity-65 mt-[70%] ml-[50%] animate-slow-bounce"
          />
          {/* Second Image: 50% outside to the right */}
          <img
            src="/src/assets/Frames/story/2.svg"
            alt="Image 2"
            className="w-28 h-28 -ml-[100%] mt-[90%] animate-slow-bounce"
          />
          {/* Third Image: 50% inside from the right border */}
          <img
            src="/src/assets/Frames/story/2.svg"
            alt="Image 3"
            className="w-40 h-72 ml-24 -mt-24  opacity-65 animate-slow-bounce"
          />
          <img
            src="/src/assets/Frames/Founder/3.svg"
            alt="Small Image 1"
            className="absolute opacity-65 top-[-1%] left-[6%] w-[80%] transform scale-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
