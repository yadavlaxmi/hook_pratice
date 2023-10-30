import React, { useContext } from "react";
import { GlobalInfo } from "./Usecontext";

const Otherchild = () => {
  const { appColor } = useContext(GlobalInfo);
  const day="sunday"
//   console.warn("appColor", appColor);

  return (
    <>
      <div>
        <h1 >use context child</h1>
        <div style={{ color: appColor }}>
          <h1> Otherchild context</h1>
        </div>
      </div>
    </>
  );
};

export default Otherchild;
