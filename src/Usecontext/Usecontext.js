import React, { createContext, useState } from "react";
import Child from "./Child";
import Otherchild from "./Otherchild";

export const GlobalInfo = createContext();

const Usecontext = () => {
  const [color, setColor] = useState("green");
const[day,setDay]=useState("Monday")
  const getDay=(item)=>{
        // console.warn(item)
        setDay(item)

    }
  return (
    <GlobalInfo.Provider value={{ appColor: color,getDay: getDay }}>
      <div>
        <h1>use context</h1>
        <Child />
        <Otherchild/>
      </div>
    </GlobalInfo.Provider>
  );
};

export default Usecontext;
