import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const tabs = [
  {
    label: "Customer focused",
    title: "Purpose-built financial services",
    content: `Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.`,
    secondaryContent: `Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behavior, and product marketing opportunities.`,
    image:
      "https://i.postimg.cc/63hT0ygz/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.avif",
  },
  {
    label: "Agile and adaptable",
    title: "Adaptable financial services",
    content: `Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.`,
    secondaryContent: `Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behavior, and product marketing opportunities.`,
    image:
      "https://i.postimg.cc/rpN867jw/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.avif",
  },
  {
    label: "Compliance ready",
    title: "Compliance-driven solutions",
    content: `Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.`,
    secondaryContent: `Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behavior, and product marketing opportunities.`,
    image:
      "https://i.postimg.cc/ydfsx9wq/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.avif",
  },
  {
    label: "Secure and safe",
    title: "Safety-focused solutions",
    content: `Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.`,
    secondaryContent: `Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behavior, and product marketing opportunities.`,
    image:
      "https://i.postimg.cc/xj49SvvM/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.avif",
  },
];

const FutureTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 768) {
      const interval = setInterval(() => {
        setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="bg-white px-6 py-12">
      <div className="text-center mb-10">
        <h5 className="text-blue-500 text-sm font-medium tracking-wide">
          TECHNOLOGY BUILT FOR YOU
        </h5>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          The future of finance
        </h1>
      </div>

      {/* Tabs for md & lg devices */}
      <div className="hidden md:flex justify-center gap-6 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full font-bold text-lg ${
              activeTab === index
                ? "bg-[#B9D9FF] text-blue-500"
                : "text-blue-600 hover:text-blue-500"
            } transition duration-300`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 overflow-hidden">
        <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
          <h5 className="text-blue-500 text-lg font-bold">
            {tabs[activeTab].label.toUpperCase()}
          </h5>
          <h2 className="text-3xl font-semibold text-[#0B305B] mt-2 mb-4">
            {tabs[activeTab].title}
          </h2>
          <p className="text-[#0B305B] font-bold leading-relaxed">
            {tabs[activeTab].content}
          </p>
          <p className="text-[#0B305B] mt-4 leading-relaxed">
            {tabs[activeTab].secondaryContent}
          </p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img
            src={tabs[activeTab].image}
            alt={tabs[activeTab].label}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FutureTab;
