import React from "react";
import Heading from "../components/prime-components/Heading";
import { about } from "../data/about";
import AboutDataSection from "../components/prime-components/AboutDataSection";

const PrivacyPolicy = () => {
  return (
    <div className='lg:px-6 px-4'>
      <Heading>{about.title}</Heading>
      {about.sections.map((section, index) => (
        <AboutDataSection
          key={index}
          data={section}
        />
      ))}
    </div>
  );
};

export default PrivacyPolicy;
