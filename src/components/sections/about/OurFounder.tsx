import React from "react";

const OurFounder: React.FC = () => {
  return (
    <section className="bg-white w-11/12 sm:w-9/12 mx-auto py-20 px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
      {/* Left Section: Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h4 className="text-blue-500 font-semibold text-base sm:text-lg mb-4">
          Our Founder
        </h4>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B305B] mb-6">
          A trailblazer in finance
        </h2>
        <p className="text-[#0B305B] text-base sm:text-lg font-bold mb-2">
          Trong Lau is an experienced executive with extensive knowledge in the
          field of credit card systems. Throughout her career spanning over 30
          years, she has played a pivotal role in introducing and executing
          advanced credit card and intelligent retail financial systems across
          the region.
        </p>
        <p className="text-[#0B305B] text-base sm:text-lg">
          Her unwavering dedication to innovation and impactful leadership has
          been instrumental in shaping the industry and driving the creation of
          pragmatic and user-centric financial technologies.
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="w-full lg:w-[700px] relative flex justify-center items-center">
        <div className="relative w-full sm:w-4/5">
          {/* Main Image */}
          <img
            src="https://i.postimg.cc/yYH75nhd/Our-Founder.png"
            alt="AnyTech Story"
            className="w-[85%]"
          />

          {/* Small Images */}
          {/* Top-Left Small Image */}
          <img
            src="/assets/Frames/Founder/3.svg"
            alt="Small Image 1"
            className="absolute top-[-15%] left-[-5%]  w-[50%] sm:w-[60%] transform scale-[-1]"
          />

          {/* Bottom-Right Small Image */}
          <img
            src="/assets/Frames/story/3.svg"
            alt="Small Image 2"
            className="absolute w-[40%]  sm:h-[87%] ml-[56%] -mt-[50%]"
          />
          {/* Right Small Image */}
          <img
            src="/assets/Frames/story/2.svg"
            alt="Small Image 3"
            className="absolute h-[40%]  top-[-25%] left-[62%]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurFounder;
