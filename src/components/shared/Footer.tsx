import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002045] text-white py-10">
      <div className="w-11/12 lg:w-9/12 mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-blue-700 py-10 mb-6">
          {/* Logo */}
          <div className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
            ANYTECH
          </div>
          {/* Navigation */}
          <div className="flex flex-col lg:flex-row lg:space-x-8 mt-6 lg:mt-0 text-center lg:text-left space-y-4 lg:space-y-0">
            <a
              href="#"
              className="text-[#00C3CB] font-bold hover:underline transition duration-300"
            >
              Our Solutions
            </a>
            <a
              href="#"
              className="text-[#00C3CB] font-bold hover:underline transition duration-300"
            >
              AnyCaaS
            </a>
            <a
              href="#"
              className="text-[#00C3CB] font-bold hover:underline transition duration-300"
            >
              AnyBaaS
            </a>
            <a
              href="#"
              className="text-[#00C3CB] font-bold hover:underline transition duration-300"
            >
              AnyPaaS
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm space-y-4 lg:space-y-0">
          <p className="text-[#1F80F0] font-semibold text-center lg:text-left">
            ©2023 All rights reserved. Any Technology Pte Ltd.
          </p>
          <a
            href="#"
            className="text-[#1F80F0] font-semibold hover:underline text-center lg:text-right transition duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
