import React, { useContext } from "react";
import { GlobalInfo } from "./Usecontext";

const Child = () => {
  const { appColor } = useContext(GlobalInfo);
  console.warn("appColor", appColor);

  return (
    <>
      <div>
        <h1>use context child</h1>
        <div style={{ backgroundColor: appColor }}>
          This div's background color is determined by the context value.
        </div>
      </div>
    </>
  );
};

export default Child;
