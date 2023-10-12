import React from "react";

import NavBar from "./NavBar";
import Footer from "../Footer";
import "./teams.css";
import TeamSubCompTitle from "./inner-sub-compoents.js/TeamSubCompTitle";
import TeamsFirstComp from "./inner-sub-compoents.js/TeamsFirstComp.js";
import TeamsSecondComp from "./inner-sub-compoents.js/TeamsSecondComp.js";
import teamsVect from "../../images/teams-vect.png";

function Teams() {
  return (
    <div className="teams-container">
      <NavBar />
      <div className="teams-wrapper-div">
        <img src={teamsVect} className="teams-vect" />
        <div className="positioning-teams">
          <div className="main-teams-container">
            <TeamSubCompTitle
              subtitle="THIS IS YOUR SUBTITLE"
              subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
            />
          </div>
          <div className="teams-content margin-1">
            <TeamsFirstComp
              name="Name NotName"
              tagLine="Tagline"
              className="first-comp-teams-content"
            />
            <div className="second-comp-teams-content">
              <TeamsSecondComp
                name="Name NotName"
                designer="Designer"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
              />
            </div>
            <div className="third-comp-teams-content">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="fourth-comp-teams-content">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
            <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            <div className="sixth-comp-teams-content">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
          </div>

          {/* second set ---------------------------- */}
          <div className="main-teams-container-2">
            <TeamSubCompTitle
              subtitle="THIS IS YOUR SUBTITLE"
              subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
              flag="true"
            />
          </div>

          <div className="teams-content margin-2">
            <div className="first-comp-teams-content-2">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="second-comp-teams-content-2">
              <TeamsSecondComp
                name="Name NotName"
                designer="Designer"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
              />
            </div>
            <div className="third-comp-teams-content-2">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="fourth-comp-teams-content-2">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="fifth-comp-teams-content-2">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="sixth-comp-teams-content-2">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
          </div>

          {/* thirst set-------------------------- */}

          <div className="main-teams-container">
            <TeamSubCompTitle
              subtitle="THIS IS YOUR SUBTITLE"
              subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
            />
          </div>
          <div className="teams-content margin-bottom-3">
            <TeamsFirstComp
              name="Name NotName"
              tagLine="Tagline"
              className="first-comp-teams-content"
            />
            <div className="second-comp-teams-content">
              <TeamsSecondComp
                name="Name NotName"
                designer="Designer"
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
              />
            </div>
            <div className="third-comp-teams-content">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="fourth-comp-teams-content">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
            <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            <div className="sixth-comp-teams-content">
              <TeamsFirstComp name="Name NotName" tagLine="Tagline" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Teams;
