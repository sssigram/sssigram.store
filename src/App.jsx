import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import HowToDownload from "./components/HowToDownload";

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <HowToDownload />
      <Body />
    </div>
  );
};

export default App;
