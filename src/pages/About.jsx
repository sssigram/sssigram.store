import React from "react";
import Heading from "../components/prime-components/Heading";
import { about } from "../data/about";
import AboutDataSection from "../components/prime-components/AboutDataSection";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta
          name='description'
          content='Welcome to the About Page'
        />
        <meta
          name='keywords'
          content='home, react, SEO'
        />
      </Helmet>
      <div className='lg:px-6 px-4'>
        <Heading>{about.title}</Heading>
        {about.sections.map((section, index) => (
          <AboutDataSection
            key={index}
            data={section}
          />
        ))}
      </div>
    </>
  );
};

export default PrivacyPolicy;
