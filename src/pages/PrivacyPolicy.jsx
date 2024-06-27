import React from "react";
import Heading from "../components/prime-components/Heading";
import Heading2 from "../components/prime-components/Heading2";
import { PrivacyPolicyData } from "../data/PrivacyPolicy";
import PrivacyPolicyDataSection from "../components/prime-components/PrivacyPolicyDataSection";

const PrivacyPolicy = () => {
  return (
    <div className='lg:px-6 px-4'>
      <Heading>{PrivacyPolicyData.title}</Heading>
      <Heading2>Effective Date: June, 2024</Heading2>
      <p className='text-sm md:text-base lg:text-lg'>
        {PrivacyPolicyData.description}
      </p>
      {PrivacyPolicyData.sections.map((section, index) => (
        <PrivacyPolicyDataSection
          key={index}
          data={section}
        />
      ))}
    </div>
  );
};

export default PrivacyPolicy;
