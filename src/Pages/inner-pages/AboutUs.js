import React from "react";

import About from "./About";
import TeamsFirstComp from "./inner-sub-compoents.js/TeamsFirstComp";
import TeamsSecondComp from "./inner-sub-compoents.js/TeamsSecondComp";
import TeamSubCompTitle from "./inner-sub-compoents.js/TeamSubCompTitle";
import NavBar from "./NavBar";
import Footer from "../Footer";

function AboutUs() {
  return (
    <div>
      <NavBar />
      <About />
      <TeamSubCompTitle
        subtitle="WALL OF FAME"
        subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
      />
      <div className="fame">
        <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
        <div className="fame-second">
          <TeamsSecondComp
            name="Name NotName"
            designer="Designer"
            content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
          />
        </div>
        <div className="fame-third">
          <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
