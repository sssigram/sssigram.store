import React, { useEffect } from "react";

const AdMobileLarge = () => {
  // useEffect(() => {
  //   // const script = document.createElement("script");
  //   // script.src = "https://example.com/ad-script.js";
  //   // script.async = true;
  //   // document.body.appendChild(script);

  //   const script = document.createElement("img");
  //   script.src =
  //     "https://i0.wp.com/nancyjaffer.com/wp-content/uploads/2019/08/Nancy-Jaffer-336x280-layout1688-1el8v49.png?w=336&ssl=1";
  //   // script.async = true;
  //   document.getElementById("mobileLarge").appendChild(script);

  //   return () => {
  //     //   document.body.removeChild(script);
  //     if (document.getElementById("mobileLarge").contains(script)) {
  //       document.getElementById("mobileLarge").removeChild(script);
  //     }
  //   };
  // }, []);

  return (
    <div
      className='mx-5 min-w-fit'
      id='AdVertical'>
      <img
        src='https://i0.wp.com/nancyjaffer.com/wp-content/uploads/2019/08/Nancy-Jaffer-336x280-layout1688-1el8v49.png?w=336&ssl=1'
        alt=''
      />
    </div>
  );
};

export default AdMobileLarge;
