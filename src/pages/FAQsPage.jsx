import React from "react";
import FAQs from "../components/FAQs";
import { faqData } from "../data/faqData";
import BodyContainer from "../components/BodyContainer";
import AdVertical from "../components/prime-components/ads/AdVertical";
import AdMobileLarge from "../components/prime-components/ads/AdMobileLarge";
import { Helmet, HelmetProvider } from "react-helmet-async";

const FAQsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>FAQ Page</title>
        <meta
          name='description'
          content='Welcome to the FAQ Page'
        />
        <meta
          name='keywords'
          content='home, react, SEO'
        />
      </Helmet>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <div className='hidden lg:block min-w-fit'>{/* <AdVertical /> */}</div>
        <div className='lg:hidden min-w-fit'>{/* <AdMobileLarge /> */}</div>
        <BodyContainer>
          <FAQs data={faqData} />
        </BodyContainer>
        <div className='hidden lg:block min-w-fit'>{/* <AdVertical /> */}</div>
      </div>
    </HelmetProvider>
  );
};

export default FAQsPage;
