import React from "react";

import "./startUpCard.css";

function StartUpCard({ heading, apply, content1, content2 }) {
  return (
    <div className="card-main">
      <div className="card-heading-wrapper">
        <div className="card-for">For</div>
        <div className="card-heading">{heading}</div>
      </div>
      <div className="card-contents">
        <div className="card-content"> {content1}</div>
        <div className="card-content"> {content2}</div>
      </div>
      {heading == "Interns" ? (
        <div className="interns-div">
          <div className="intern-with">WORK WITH NIRMAAN</div>
          <div className="intern-with intern-active"> ACTIVE START UPS</div>
        </div>
      ) : null}
      {heading == "Investors" || heading == "Startups" ? (
        <div className="card-apply">{apply}</div>
      ) : null}
    </div>
  );
}

export default StartUpCard;
