import React, { useState } from "react";
//react icons
import { IoIosArrowDown } from "react-icons/io";
import Heading from "./prime-components/Heading";
import { useTranslation } from "react-i18next";

const FAQs = ({ data }) => {
  const { t } = useTranslation();
  //selected FAQs item
  const [selected, setSelected] = useState("");
  //to close and open faqs
  const selectFAQ = (index) => {
    console.log(index, selected);
    if (selected === index) return setSelected("");
    return setSelected(index);
  };

  return (
    <div>
      <Heading>{t("faq_home_heading")}</Heading>
      <p className='mb-5 text-center'>
        This FAQ provides information on frequent questions or concerns about
        the igram . world downloader . if you can't find the answer to your
        question, feel free to ask through email on our contact page
      </p>
      {data && data.length
        ? data.map((faq, index) => (
            <div
              key={`faq-${faq.id}`}
              className={`flex flex-col w-full rounded-xl overflow-hidden mb-2 ${
                selected === index ? "border shadow" : null
              }`}>
              {/* question */}
              <button
                onMouseDown={() => selectFAQ(index)}
                className='flex justify-between items-center w-full rounded-xl bg-gradient-to-r from-[#956161] via-[#af6fb2] to-[#5872a1] text-white text-xl font-medium p-3.5 px-8'>
                <span>{faq.question}</span>
                <span
                  className={`tansition-all ease-linear duration-200 ${
                    selected === index ? "rotate-180" : null
                  }`}>
                  <IoIosArrowDown />
                </span>
              </button>
              {/* answer */}
              <div
                className={`grid overflow-hidden py-2 px-6 border transition-all ease-in-out duration-300 ${
                  selected === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                <p className='overflow-hidden'>{faq.answer}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default FAQs;
