import React from "react";

import "./workWithNirman.css";

function WorkWithNirman({ role, duration, Stipend, link }) {
  const handleClickApply = () => {
    window.location.href = {};
  };
  return (
    <div className="wwn-main">
      <div className="wwn-role">{role}</div>
      <div className="wwn-duration">{duration}</div>
      <div className="wwn-stipend">{Stipend}</div>
      <div className="wwn-apply" onClick={handleClickApply}>
        APPLY
      </div>
    </div>
  );
}

export default WorkWithNirman;
