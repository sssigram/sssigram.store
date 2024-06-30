import React from "react";
import Heading from "../components/prime-components/Heading";
import { contactData } from "../data/contact";
import AboutDataSection from "../components/prime-components/AboutDataSection";
import Heading2 from "../components/prime-components/Heading2";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const ContactDetails = ({ data }) => {
    return (
      <li>
        <p>
          <b>{data.type}</b>: {data.value}
        </p>
      </li>
    );
  };
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta
          name='description'
          content='Welcome to the Contact Page'
        />
        <meta
          name='keywords'
          content='home, react, SEO'
        />
      </Helmet>
      <div className='lg:px-6 px-4'>
        <Heading>{contactData.title}</Heading>
        <AboutDataSection data={contactData.sections[0]} />
        <Heading2>Contact Details:</Heading2>
        <ul>
          {contactData.sections[0].text.contactDetails.map((contact, index) => (
            <ContactDetails
              key={index}
              data={contact}
            />
          ))}
        </ul>

        <AboutDataSection data={contactData.sections[1]} />
        {/* {contactData.sections.map((section, index) => (
        <AboutDataSection
          key={index}
          data={section}
        />
      ))} */}
      </div>
    </>
  );
};

export default ContactUs;
