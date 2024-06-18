import React from "react";

const BodyContainer = ({ children }) => {
  return (
    <main className='max-w-[1280px] flex flex-col gap-5 items-center justify-center lg:p-6 md:p-4 sm:p-3 p-2'>
      {children}
    </main>
  );
};

export default BodyContainer;
