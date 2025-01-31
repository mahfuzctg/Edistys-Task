import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center = true,
}) => {
  return (
    <div className={`py-10 ${center ? "text-center" : ""}`}>
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
};

export default Heading;
