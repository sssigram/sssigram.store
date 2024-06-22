import React from "react";
import FAQs from "../components/FAQs";
import { faqData } from "../data/faqData";
import BodyContainer from "../components/BodyContainer";

const FAQsPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <BodyContainer>
        <FAQs data={faqData} />
      </BodyContainer>
    </div>
  );
};

export default FAQsPage;
