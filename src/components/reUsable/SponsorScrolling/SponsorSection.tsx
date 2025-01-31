import React from "react";

const sponsors = [
  "https://i.postimg.cc/nz6Bc7k3/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.avif",
  "https://i.postimg.cc/nz6Bc7k3/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.avif",
  "https://i.postimg.cc/nz6Bc7k3/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.avif",
  "https://i.postimg.cc/nz6Bc7k3/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.avif",
  "https://i.postimg.cc/nz6Bc7k3/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.avif",
  "https://i.postimg.cc/nz6Bc7k3/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.avif",
  "https://i.postimg.cc/nz6Bc7k3/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.avif",
];

const SponsorSection: React.FC = () => {
  return (
    <section className="py-10 bg-[#FFFFFF] w-9/12  mx-auto">
      <div className="text-center">
        {/* Title */}
        <h2 className="text-xl md:text-4xl font-semibold text-[#153861] font-roboto">
          Empowering more than{" "}
          <span className="text-blue-600">40 financial institutions</span> to
          transform in a digital-first world.
        </h2>

        {/* HR Line */}
        <hr className="w-32 mx-auto my-4 border-t-2 border-gray-300" />
      </div>

      {/* Auto-scrolling Sponsor Logos */}
      <div className="relative overflow-hidden mt-6">
        <div className="flex w-[200%] md:w-[150%] animate-scroll">
          {sponsors.concat(sponsors).map((logo, index) => (
            <div key={index} className="w-32 mx-4 flex-shrink-0">
              <img src={logo} alt="Sponsor Logo" className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframes for Auto-scroll */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default SponsorSection;
