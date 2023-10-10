import React from "react";

import "./innerStartUp.css";
import linkedIn from "../../images/XMLID_801_ (1).png";
import img from "../../images/innerStartUpImg.png";

function InnerStartUpComp({
  content,
  title,
  projectName,
  teamMembers,
  subTitle,
  name,
  inr
}) {
  return (
    <div className="is-main">
      <div className="is-sub-main">
        <div className="is-sub-left">
          <div className="is-left-first-heading">
            <div className="is-left-first-sub-heading">{title}</div>
            <div className="is-left-second-sub-heading">{projectName}</div>
          </div>
          <div className="is-content">{content}</div>
          <div className="is-member-main">
            <div className="is-member-heading">MEMBERS OF THIS PROJECT</div>
            <div className="is-members-name">
              {teamMembers.map((item) => (
                <div className="is-name-wrapper">
                  <div className="is-name">{item.name}</div>
                  <div>
                    <a href={item.link}>
                      <img src={linkedIn} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="is-sub-right">
          <div className="name-startup">
            <div className="startup-title-is">{subTitle}</div>
            <div className="start-main-name">{name}</div>
          </div>
          <img src={img} className="is-image" />
          <div className="funds-raised">
            <div className="inr">{inr}</div>
            <div className="funds-heading">Funds Raised</div>
          </div>
        </div>
      </div>

      {/* contact us  */}
    </div>
  );
}

export default InnerStartUpComp;
