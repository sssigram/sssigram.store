import React from "react";
import BodyContainer from "./BodyContainer";

const HowToDownload = () => {
  return (
    <BodyContainer>
      <div className='flex flex-col items-center'>
        {/* section 1 start */}
        <h3 className='text-4xl font-bold mb-4 text-violet-700'>
          HOW TO DOWNLOAD ANYTHING FROM INSTAGRAM?
        </h3>
        {/* <div className='flex items-start justify-between gap-10 h-fit'> */}
        <div
          className='grid grid-flow-col gap-10'
          style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          <img
            className='w-full'
            src='https://igram.world/img/how-to/copy-url.png'
            alt='how-to-copy-url'
          />
          <div className='main-content flex justify-center relative h-full'>
            <div className='w-1 bg-[#f0018c42] h-full'></div>
            <span className='rounded-full bg-red-600 text-white font-semibold text-xl w-8 h-8 flex items-center justify-center absolute top-3'>
              1
            </span>
          </div>
          <div className='my-8'>
            <h3 className='text-2xl font-bold mb-4'>Copy the URL</h3>
            <p className='text-lg'>
              To get started, access either the Instagram app or website and
              retrieve the link to the specific video, reels, carousel, or IGTV
              content that you want to copy.
            </p>
          </div>
        </div>
        <div
          className='grid grid-flow-col gap-10'
          style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          <div className='flex justify-center flex-col'>
            <h3 className='text-2xl font-bold mb-4'>Paste the link</h3>
            <p className='text-lg'>
              Return to the Igram website, paste the link into the input field
              at the top of the screen and click the “Download” button.
            </p>
          </div>
          <div className='main-content flex justify-center relative h-full'>
            <div className='w-1 bg-[#f0018c42] h-full'></div>
            <span className='rounded-full bg-red-600 text-white font-semibold text-xl w-8 h-8 flex items-center justify-center absolute top-3'>
              2
            </span>
          </div>
          <img
            className='w-full'
            src='https://igram.world/img/how-to/paste-url.png'
            alt='how-to-copy-url'
          />
        </div>
        <div
          className='grid grid-flow-col gap-10'
          style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          <img
            className='w-full'
            src='https://igram.world/img/how-to/click-download.png'
            alt='how-to-copy-url'
          />
          <div className='flex justify-center relative h-full'>
            <div className='w-1 bg-[#f0018c42] h-full'></div>
            <span className='rounded-full bg-red-600 text-white font-semibold text-xl w-8 h-8 flex items-center justify-center absolute  top-3'>
              3
            </span>
          </div>
          <div className='flex justify-center flex-col'>
            <h3 className='text-2xl font-bold mb-4'>Download</h3>
            <p className='text-lg'>
              In no time at all, you'll receive a list of results that offer
              various quality options. Choose the option that best suits your
              requirements and download it.
            </p>
          </div>
        </div>

        {/* section 1 end */}
      </div>
    </BodyContainer>
  );
};

export default HowToDownload;
