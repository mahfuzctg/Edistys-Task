import React from "react";

const OurMission: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFFFFF] relative">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Section Heading */}
        <h2 className="text-sm font-semibold text-blue-500 tracking-wider mb-2">
          OUR MISSION
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#153861] mb-8">
          Redefining tomorrow
        </h3>

        {/* Mission Content */}
        <div className="py-36 rounded-3xl animated-bg-mission ">
          <p className="w-[85%] -mt-10 mx-auto text-2xl font-semibold text-[#01DAE0] text-start mb-6">
            Our Mission
          </p>
          <p className="text-4xl font-bold text-start text-white text w-[85%] mx-auto">
            To redefine global finance by empowering institutions with
            technology that drives value and growth.
          </p>

          {/* Background Decoration */}
          <div className="background-decoration"></div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
