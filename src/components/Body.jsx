import React, { useState } from "react";
import { Link } from "react-router-dom";
//react icons
import { SiApple } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import Accordion from "./FAQs";
import BodyContainer from "./BodyContainer";

const Body = () => {
  return (
    <BodyContainer>
      {/* section 1 start */}

      {/* section 1 end */}
      {/* section 2 start */}
      <div className='flex flex-col gap-1.5 items-center my-6 mt-10'>
        <h3 className='text-4xl font-bold mb-4 text-violet-700'>
          How to download IGTV from Instagram?
        </h3>
        <p className='text-lg'>
          To download IGTV videos, follow these easy steps:
        </p>
      </div>
      {/* section 2 end */}
      {/* download app section start */}

      {/* download app section end */}

      {/* FAQ section start */}
    </BodyContainer>
  );
};

export default Body;
