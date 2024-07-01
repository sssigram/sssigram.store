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
      {/* <AdwebLarge /> */}
      {data && data.length
        ? data.map((dataItem, index) => (
            <HowToDownloadCard
              key={dataItem.id}
              data={dataItem}
              index={index}
            />
          ))
        : null}

      {/* <AdMobileLarge /> */}
    </div>
  );
};

export default HowToDownload;
