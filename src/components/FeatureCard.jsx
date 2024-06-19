import React from "react";
const FeatureCard = ({ data }) => {
  return (
    <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8 mb-5'>
      {data && data.length
        ? data.map((card) => (
            <div
              key={card.id}
              className='max-w-[480px] sm:max-w-[360px] lg:max-w-[310px] bg-white border rounded-lg shadow-md shadow-gray-200 dark:bg-gray-800 dark:border-gray-700'>
              <img
                className='rounded-t-lg'
                src={card.image}
                alt={card.title}
              />
              <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {card.title}
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {card.description}
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default FeatureCard;
