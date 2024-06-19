import React from "react";

const BodyContainer = ({ children }) => {
  return (
    <main className='max-w-[1280px] flex flex-col gap-5 items-center justify-center lg:px-6 md:px-4 sm:px-3 px-2'>
      {children}
    </main>
  );
};

export default BodyContainer;
