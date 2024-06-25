import React, { useEffect, useState } from "react";
import AdMobileLarge from "./prime-components/ads/AdMobileLarge";
import AdwebLarge from "./prime-components/ads/AdwebLarge";

const HowToDownload = ({ data }) => {
  const mediaMatch = window.matchMedia("(min-width: 768px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  const HowToDownloadCard = ({ data, index }) => {
    return (
      <div className='flex flex-col items-center gap-10'>
        <span className='bg-gradient-to-r from-transparent from-10% via-red-600 to-transparent to-90% w-full text-white font-semibold text-2xl px-4 py-1 text-center -mb-5 mt-5'>
          STEP {index + 1}
        </span>
        <div
          className='grid grid-flow-row md:grid-flow-col md:gap-10'
          style={
            matches
              ? { gridTemplateColumns: "1fr 1fr" }
              : { gridTemplateRows: "1fr auto" }
          }>
          <img
            className='w-full'
            src={data.image}
            alt={data.title}
          />
          <div className='md:my-8 text-center md:text-start flex flex-col justify-center'>
            <h3 className=' text-xl md:text-2xl font-bold mb-4'>
              {data.title}
            </h3>
            <p className='text-md md:text-lg'>{data.description}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className='flex flex-col items-center'>
      <AdwebLarge />
      {data && data.length
        ? data.map((dataItem, index) => (
            <HowToDownloadCard
              key={dataItem.id}
              data={dataItem}
              index={index}
            />
          ))
        : null}
      {/* <div className='flex flex-col items-center gap-10'>
        <span className='bg-gradient-to-r from-transparent from-10% via-red-600 to-transparent to-90% w-full text-white font-semibold text-2xl px-4 py-1 text-center -mb-5 mt-5'>
          STEP 1
        </span>
        <div
          className='grid grid-flow-row md:grid-flow-col md:gap-10'
          style={
            matches
              ? { gridTemplateColumns: "1fr 1fr" }
              : { gridTemplateRows: "1fr auto" }
          }>
          <img
            className='w-full'
            src='https://igram.world/img/how-to/copy-url.png'
            alt='how-to-copy-url'
          />
          <div className='md:my-8 text-center md:text-start flex flex-col justify-center'>
            <h3 className='text-2xl font-bold mb-4'>Copy the URL</h3>
            <p className='text-lg'>
              To get started, access either the Instagram app or website and
              retrieve the link to the specific video, reels, carousel, or IGTV
              content that you want to copy.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-10'>
        <span className='bg-gradient-to-r from-transparent from-10% via-red-600 to-transparent to-90% w-full text-white font-semibold text-2xl px-4 py-1 text-center -mb-5 mt-5'>
          STEP 2
        </span>
        <div
          className='grid grid-flow-row md:grid-flow-col md:gap-10'
          style={
            matches
              ? { gridTemplateColumns: "1fr 1fr" }
              : { gridTemplateRows: "1fr auto" }
          }>
          <div className=' hidden md:my-8 md:flex md:flex-col md:justify-center'>
            <h3 className='text-2xl font-bold mb-4 '>Paste the link</h3>
            <p className='text-lg '>
              Return to the Igram website, paste the link into the input field
              at the top of the screen and click the “Download” button.
            </p>
          </div>
          <img
            className='w-full'
            src='https://igram.world/img/how-to/paste-url.png'
            alt='how-to-copy-url'
          />
          <div className=' md:hidden text-center md:text-start flex flex-col justify-center'>
            <h3 className='text-2xl font-bold mb-4'>Paste the link</h3>
            <p className='text-lg'>
              Return to the Igram website, paste the link into the input field
              at the top of the screen and click the “Download” button.
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-10 '>
        <span className='bg-gradient-to-r from-transparent from-10% via-red-600 to-transparent to-90% w-full text-white font-semibold text-2xl px-4 py-1 text-center -mb-5 mt-5'>
          STEP 3
        </span>
        <div
          className='grid grid-flow-row md:grid-flow-col md:gap-10'
          style={
            matches
              ? { gridTemplateColumns: "1fr 1fr" }
              : { gridTemplateRows: "1fr auto" }
          }>
          <img
            className='w-full'
            src='https://igram.world/img/how-to/click-download.png'
            alt='how-to-copy-url'
          />
          <div className='text-center md:text-start md:my-8 flex flex-col justify-center'>
            <h3 className='text-2xl font-bold mb-4'>Download</h3>
            <p className='text-lg'>
              In no time at all, you'll receive a list of results that offer
              various quality options. Choose the option that best suits your
              requirements and download it.
            </p>
          </div>
        </div>
      </div> */}
      <AdMobileLarge />
    </div>
  );
};

export default HowToDownload;
