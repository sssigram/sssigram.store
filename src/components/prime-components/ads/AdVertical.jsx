import React, { useEffect } from "react";

const AdVertical = () => {
  // useEffect(() => {
  //   // const script = document.createElement("script");
  //   // script.src = "https://example.com/ad-script.js";
  //   // script.async = true;
  //   // document.body.appendChild(script);

  //   const script = document.createElement("img");
  //   script.src =
  //     "https://theonlineadvertisingguide.com/wp-content/uploads/120x600.gif";
  //   // script.async = true;
  //   document.getElementById("AdVertical").appendChild(script);

  //   return () => {
  //     //   document.body.removeChild(script);
  //     if (document.getElementById("AdVertical").contains(script)) {
  //       document.getElementById("AdVertical").removeChild(script);
  //     }
  //   };
  // }, []);

  return (
    <div
      className='mx-5 min-w-fit'
      id='AdVertical'>
      <img
        src='https://theonlineadvertisingguide.com/wp-content/uploads/120x600.gif'
        alt=''
      />
    </div>
  );
};

export default AdVertical;
