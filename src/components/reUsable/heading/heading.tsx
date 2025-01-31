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
      <h1 className="heading mt-2 text-[#1F80F0]">{title}</h1>
      {subtitle && <p className="subheading">{subtitle}</p>}
    </div>
  );
};

export default Heading;
