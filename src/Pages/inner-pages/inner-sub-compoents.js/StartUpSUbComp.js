import React from "react";

import "./startSubComp.css";

function StartUpSUbComp({ image, heading, content, thirdComp }) {
  return (
    <div className="sp-flex">
      <div className="green-sp">
        <img src={image} />
      </div>
      <div className="sub-right-sp">
        <div className="strat-up-heading">{heading}</div>
        <div
          className={
            thirdComp
              ? "startup-content third-sub-comp-prop"
              : "startup-content"
          }
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default StartUpSUbComp;
