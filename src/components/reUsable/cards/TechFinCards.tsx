import { Globe, ShieldCheck, TrendingUp } from "lucide-react";
import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheck size={24} className="text-gray-600" />,
    title: "Experts in Technology & Finance",
    desc: "With our team's deep expertise in the finance and tech sectors, we are catalysts for change, paving the way for innovation and strategic reorientation, shaping the future of finance.",
    bgColor: "bg-[#D7F8F9]",
  },
  {
    icon: <TrendingUp size={24} className="text-blue-600" />,
    title: "Empowerment through Technology",
    desc: "Empowering more than 40 financial institutions to transform in a digital-first world, our innovative platform enables banks and financial institutions to develop customer-centric financial products and offerings.",
    bgColor: "bg-[#E1EDFB]",
  },
  {
    icon: <Globe size={24} className="text-orange-600" />,
    title: "Understanding Evolving Needs",
    desc: "By staying at the forefront of technology and understanding the evolving needs of the industry, we strive to provide cutting-edge solutions that drive efficiency, enhance user experiences, and enable financial inclusion.",
    bgColor: "bg-[#FEF3C7]",
  },
];

const TechFinCards: React.FC = () => {
  return (
    <section className="w-9/12 mx-auto mb-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start p-4 bg-white  ">
            {/* Icon with background */}
            <div className={`p-3 rounded-full ${feature.bgColor}`}>
              {feature.icon}
            </div>

            {/* Title & Description */}
            <h3 className="text-lg font-semibold text-[#153861] mt-4">
              {feature.title}
            </h3>
            <p className="text-[#153861] mt-2 text-sm ">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechFinCards;
