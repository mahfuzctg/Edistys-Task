import { Droplet, Globe, Users, Zap } from "lucide-react";
import React from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: <Droplet size={24} className="text-[#0B305B]" />,
    title: "Driven",
    desc: "Motivated by a desire for change, we empower our customers by tenaciously striving for breakthroughs in financial services.",
    bgColor: "bg-[#FFE2D5]",
  },
  {
    icon: <Zap size={24} className="text-[#0B305B]" />,
    title: "Agile",
    desc: "Our agility helps us stay one step ahead, where we embrace change and swiftly adapt in order to deliver cutting-edge solutions.",
    bgColor: "bg-[#D7F8F9]",
  },
  {
    icon: <Globe size={24} className="text-[#0B305B]" />,
    title: "Global",
    desc: "We think beyond borders, with a commitment to creating financial technological solutions that empower banks and financial institutions across the world.",
    bgColor: "bg-[#B9D9FF]",
  },
  {
    icon: <Users size={24} className="text-[#0B305B]" />,
    title: "Open",
    desc: "In a world of possibilities, our openness leads us to discover new ideas, fostering creativity and inspiring transformative solutions.",
    bgColor: "bg-[#E4EAF1]",
  },
];

const OurValues: React.FC = () => {
  return (
    <section className="w-9/12 mx-auto mb-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-4 bg-[#FFFFFF]  "
          >
            {/* Icon with background */}
            <div className={`p-4 font-bold rounded-full ${feature.bgColor}`}>
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

export default OurValues;
