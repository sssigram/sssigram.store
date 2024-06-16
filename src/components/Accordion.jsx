import React, { useState } from "react";

//react icons
import { IoIosArrowDown } from "react-icons/io";

const Accordion = () => {
  const faqData = [
    {
      question: "What is an instagram video downloader?",
      answer: `It's an online tool that allows you to download Instagram photos, videos, and IGTV videos. In case you need to use it later. SnapInta is the best tool for downloading from Instagram.
    `,
    },
    {
      question: "Do I need instagram account to download video?",
      answer: `No, you don't need to log in to your account, Snapinsta Does not ask for any information from you, so you can download anything from Instagram securely, anonymously.
    `,
    },
    {
      question: "Can I save videos on my instagram account?",
      answer: `Unfortunately, Instagram doesn't allow you to download videos you find on your feed or on other users' stories. And luckily you already have us, just visit our website: https://snapinsta.app and follow the instructions.
    `,
    },
    // { question: "", answer: "" },
  ];
  //selected accordion item
  const [selected, setSelected] = useState("");
  //to close and open faqs
  const selectFAQ = (index) => {
    console.log(index, selected);
    if (selected === index) return setSelected("");
    return setSelected(index);
  };

  return (
    <>
      {faqData && faqData.length
        ? faqData.map((faq, index) => (
            <div
              key={`faq-${index}`}
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
    </>
  );
};

export default Accordion;
