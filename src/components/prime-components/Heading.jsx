import React from "react";

const Heading = ({ children }) => {
  return (
    <h3 className='text-2xl text-center sm:text-3xl md:text-4xl font-bold my-5 text-violet-700'>
      {children}
    </h3>
  );
};

export default Heading;
