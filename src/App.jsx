import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Header />
      <Body />
    </div>
  );
};

export default App;
