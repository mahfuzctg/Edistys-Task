import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className="bg-white w-11/12 sm:w-9/12 mx-auto py-20 px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
      {/* Left Section: Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h4 className="text-blue-500 font-semibold text-base sm:text-lg mb-4">
          OUR STORY
        </h4>
        <h2 className="text-3xl w-9/12 sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
          Building the{" "}
          <span className="bg-gradient-to-r from-[#0CC0EC] via-[#1B73D8] to-[#0E3C72] text-transparent bg-clip-text">
            future
          </span>{" "}
          {}
          today
        </h2>
        <p className="text-[#0B305B] text-base sm:text-lg">
          Founded in January 2020, Any Technology is a Singapore-based fintech
          enterprise committed to helping the global financial services industry
          reimagine banking and payment services.
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-[700px] relative flex justify-center items-center">
        <div className="relative w-full sm:w-4/5">
          {/* Main Image */}
          <img
            src="https://i.postimg.cc/gJT6s3Fd/45215835736396e2687121e2610eca30b0a8ca2a-2121x1414.avif"
            alt="AnyTech Story"
            className="w-full"
          />

          {/* Small Images */}
          {/* Top-Left Small Image */}
          <img
            src="/assets/Frames/story/1.png"
            alt="Small Image 1"
            className="absolute top-[-20%] left-[-40%] sm:left-[-25%] w-[50%] sm:w-[60%]"
          />
          {/* Bottom-Right Small Image */}
          <img
            src="/assets/Frames/story/3.svg"
            alt="Small Image 2"
            className="absolute w-[70%] sm:w-[90%] h-[70%] sm:h-[90%] ml-28 sm:ml-40 -mt-36 sm:-mt-48"
          />
          {/* Right Small Image */}
          <img
            src="/assets/Frames/story/2.svg"
            alt="Small Image 3"
            className="absolute h-[40%] sm:h-[60%] ml-[60%] sm:ml-[80%] -mt-56 sm:-mt-72"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
