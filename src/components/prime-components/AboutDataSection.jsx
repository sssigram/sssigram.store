import React from "react";
import Heading2 from "./Heading2";

const AboutDataSection = ({ data }) => {
  return (
    <div>
      <Heading2>{data.name}</Heading2>
      <p className='text-sm md:text-base lg:text-lg'>{data.text.desc}</p>
    </div>
  );
};

export default AboutDataSection;
