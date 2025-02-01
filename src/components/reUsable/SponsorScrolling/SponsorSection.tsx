import React from "react";

const sponsors = [
  "https://i.postimg.cc/9F7KVRZ0/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.webp",
  "https://i.postimg.cc/bvzBQmMS/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.webp",
  "https://i.postimg.cc/QM0nSpG4/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.webp",
  "https://i.postimg.cc/nzWSfpLq/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.webp",
  "https://i.postimg.cc/Wb0V8f95/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.webp",
  "https://i.postimg.cc/vZzsFxw9/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.webp",
  "https://i.postimg.cc/cJLNs1dz/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.webp",
  "https://i.postimg.cc/tgvG70T4/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.webp",
  "https://i.postimg.cc/fyXGHJvV/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.webp",
  "https://i.postimg.cc/7P2rPWyq/9764422d5b731f38edd216852c7c77e650647975-500x330.webp",
  "https://i.postimg.cc/kXP32vnK/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.webp",
  "https://i.postimg.cc/t49K5Rng/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.webp",
  "https://i.postimg.cc/LsXGcyTK/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.webp",
  "https://i.postimg.cc/wMhrXn6J/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.webp",
  "https://i.postimg.cc/GhxNH0gn/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.webp",
];

const SponsorSection: React.FC = () => {
  return (
    <section className="py-20 bg-white w-9/12 mx-auto">
      <div className="py-8 text-center">
        {/* Title */}
        <h2 className="text-xl md:text-5xl text-[#153861]">
          Empowering more than{" "}
          <span className="text-blue-500 text-xl md:text-5xl">
            40 financial institutions
          </span>{" "}
          to transform in a digital-first world.
        </h2>

        {/* HR Line */}
        <hr className="w-full mx-auto my-4 border-t-3 mt-8 border-gray-300" />
      </div>

      {/* Auto-scrolling Sponsor Logos */}
      <div className="relative overflow-hidden mt-6">
        <div className="flex w-[200%] md:w-[150%] animate-scroll">
          {sponsors.concat(sponsors).map((logo, index) => (
            <div
              key={index}
              className="w-40 h-24 mx-6 flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="object-contain w-full h-full"
              />
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
