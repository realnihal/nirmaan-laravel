import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import Footer from "../Footer";
import "./teams.css";
import TeamSubCompTitle from "./inner-sub-compoents.js/TeamSubCompTitle";
import TeamsFirstComp from "./inner-sub-compoents.js/TeamsFirstComp.js";
import TeamsSecondComp from "./inner-sub-compoents.js/TeamsSecondComp.js";
import teamsVect from "../../images/teams-vect.png";

function Teams() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from Laravel API
    fetch('http://127.0.0.1:8000/api/teams')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(users);
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
          <div className="teams-content left-ro-right margin-1">
            {users.map((user)=>{
              if(user.team === 'student team'){
                return(
                  <TeamsFirstComp
                  content={user.description}
                  designer={user.designation}
                  name={user.name}
                  tagLine={user.tagline}
                  image = {'http://127.0.0.1:8000/api/images/'+user.profile_image}
                />
                )
              }
            })}
            {/* <div className="second-comp-teams-content">
    
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName"
                tagLine="Tagline"
                className="first-comp-teams-content"
              />
            </div>
            <div className="third-comp-teams-content">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="fourth-comp-teams-content">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div>
            <TeamsFirstComp
              content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
              designer="Designer"
              name="Name NotName" tagLine="Tagline" />
            <div className="sixth-comp-teams-content">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div> */}
          </div>

          {/* second set ---------------------------- */}

          <div className="main-teams-container-2">
            <TeamSubCompTitle
              subtitle="THIS IS YOUR SUBTITLE"
              subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
              flag="true"
            />
          </div>

          <div className="teams-content right-to-left margin-2">
          {users.map((user)=>{
              if(user.team === 'faculty advisors'){
                return(
                  <TeamsFirstComp
                  content={user.description}
                  designer={user.designation}
                  name={user.name}
                  tagLine={user.tagline}
                  image = {'http://127.0.0.1:8000/api/images/'+user.profile_image}
                />
                )
              }
            })}
            {/* <div className="first-comp-teams-content-2">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="second-comp-teams-content-2">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName"
                tagLine="Tagline"
                className="first-comp-teams-content"
              />
            </div>
            <div className="third-comp-teams-content-2">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="fourth-comp-teams-content-2">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="fifth-comp-teams-content-2">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="sixth-comp-teams-content-2">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div> */}
          </div>

          {/* thirst set-------------------------- */}

          <div className="main-teams-container">
            <TeamSubCompTitle
              subtitle="THIS IS YOUR SUBTITLE"
              subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
            />
          </div>
          <div className="teams-content left-ro-right margin-bottom-3">
          {users.map((user)=>{
              if(user.team === 'board advisors'){
                return(
                  <TeamsFirstComp
                  content={user.description}
                  designer={user.designation}
                  name={user.name}
                  tagLine={user.tagline}
                  image = {'http://127.0.0.1:8000/api/images/'+user.profile_image}
                />
                )
              }
            })}
            {/* <TeamsFirstComp
              content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
              designer="Designer"

              name="Name NotName"
              tagLine="Tagline"
              className="first-comp-teams-content"
            />
            <div className="second-comp-teams-content">
            <TeamsFirstComp
              content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
              designer="Designer"
              name="Name NotName"
              tagLine="Tagline"
              className="first-comp-teams-content"
            />
            </div>
            <div className="third-comp-teams-content">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div>
            <div className="fourth-comp-teams-content">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div>
            <TeamsFirstComp
              content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
              designer="Designer"
              name="Name NotName" tagLine="Tagline" />
            <div className="sixth-comp-teams-content">
              <TeamsFirstComp
                content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
                designer="Designer"
                name="Name NotName" tagLine="Tagline" />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Teams;
