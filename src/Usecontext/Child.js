import React, { useContext } from "react";
import { GlobalInfo } from "./Usecontext";
import Superchild from "./Superchild";

const Child = () => {
  const { appColor } = useContext(GlobalInfo);
  console.warn("appColor", appColor);

  return (
    <>
      <div>
        <h1 style={{backgroundColor:appColor}}>use context child</h1>
        <div style={{ color: appColor }}>
          <h1> child context</h1>
          <Superchild/>
        </div>
      </div>
    </>
  );
};

export default Child;
