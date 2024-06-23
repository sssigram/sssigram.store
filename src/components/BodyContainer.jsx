import React from "react";

const BodyContainer = ({ children }) => {
  return (
    <main className='max-w-[1280px] flex flex-col gap-5 items-center justify-center lg:px-6 px-4'>
      {children}
    </main>
  );
};

export default BodyContainer;
