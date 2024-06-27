import React from "react";
import Heading2 from "./Heading2";

const PrivacyPolicyDataSection = ({ data }) => {
  return (
    <div>
      <Heading2>{data.name}</Heading2>
      <p className='text-sm md:text-base lg:text-lg'>{data.text.desc}</p>
      <ul className=' ms-5'>
        {data.text.list &&
          data.text.list.map((li, index) => <li key={index}>{li}</li>)}
      </ul>
    </div>
  );
};

export default PrivacyPolicyDataSection;
