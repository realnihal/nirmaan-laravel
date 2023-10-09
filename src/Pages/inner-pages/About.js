import React from "react";

import "./about.css";

import NavBar from "./NavBar";
import Footer from "../Footer";
import TeamSubCompTitle from "./inner-sub-compoents.js/TeamSubCompTitle";
import TimeLine from "./inner-sub-compoents.js/TimeLine";

function About() {
  return (
    <div>
      <NavBar />
      <div>
        <TeamSubCompTitle
          AboutSubtitle="THIS IS OUR"
          AboutTopic="JOURNEY"
          subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
        />
        <TimeLine />
        <TeamSubCompTitle
          AboutSubtitle="NIRMAAN IN"
          AboutTopic="NUMBERS"
          flag="true"
          subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
