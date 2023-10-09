import React from "react";

import "./teamSubCompTitle.css";

function TeamSubCompTitle({
  subtitle,
  subContent,
  flag,
  MediaSubtitle,
  topic,
  AboutSubtitle,
  AboutTopic,
}) {
  return (
    <div className={flag ? "conditional-class" : "team-sub-main"}>
      <div>
        <div className="first-sutitle-div"></div>
        <div className="second-sutitle-div">
          <div id={flag ? "c-title" : ""}>{subtitle}</div>
          {MediaSubtitle ? (
            <div>
              <div className="media-title">{MediaSubtitle}</div>
              <div className="media-topic">{topic}</div>
            </div>
          ) : null}
          {AboutSubtitle ? (
            <div className="about-div">
              <div className={flag ? "about-m about-title right-padding" : "about-title"}>
                {AboutSubtitle}
              </div>
              <div className={flag ? "about-m about-topic right-padding" : "about-topic"}>
                {AboutTopic}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className={flag ? "conditional-class-content" : "sub-content"}>
        {subContent}
      </div>
    </div>
  );
}

export default TeamSubCompTitle;
