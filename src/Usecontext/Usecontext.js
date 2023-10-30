import React, { createContext, useState } from "react";
import Child from "./Child";

export const GlobalInfo = createContext();

const Usecontext = () => {
  const [color, setColor] = useState("green");

  return (
    <GlobalInfo.Provider value={{ appColor: color }}>
      <div>
        <h1>use context</h1>
        <Child />
      </div>
    </GlobalInfo.Provider>
  );
};

export default Usecontext;
