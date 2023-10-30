import React, { useContext } from "react";
import { GlobalInfo } from "./Usecontext";

const Superchild = () => {
  const { appColor,getDay } = useContext(GlobalInfo);
const day="Sunday"
  return (
    <>
      <div>
        <h1 >use context child</h1>
        <div style={{ color: appColor }}>
          <h1> Superchild context</h1>
        <button onClick={()=>getDay(day)}>click me</button>
        </div>
      </div>
    </>
  );
};

export default Superchild;
