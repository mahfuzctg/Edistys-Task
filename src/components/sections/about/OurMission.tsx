import React from "react";

const OurMission: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#153861] mb-6">
          OUR MISSION
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-6">
          Redefining tomorrow
        </h3>

        {/* Mission Text */}
        <div className="w-full h-[500px] flex items-center  animated-bg text-white text-lg  leading-relaxed bg-gradient-to-r from-blue-500 via-[#146BDB] to-[#014AB8] bg-[length:200%_200%] animate-gradient-bg rounded-lg shadow-xl">
          <p className="md:text-3xl font-bold mx-5 ">
            To redefine global finance by empowering institutions with
            technology that drives value and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
