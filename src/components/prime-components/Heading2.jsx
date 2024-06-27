import React from "react";

const Heading2 = ({ children }) => {
  return (
    <h3 className='text-lg sm:text-xxl md:text-2xl font-bold my-2 text-gray-700'>
      {children}
    </h3>
  );
};

export default Heading2;
