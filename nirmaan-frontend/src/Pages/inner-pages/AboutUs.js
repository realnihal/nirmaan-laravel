import React, { useState, useEffect } from 'react';


import About from "./About";
import TeamsFirstComp from "./inner-sub-compoents.js/TeamsFirstComp";
import TeamsSecondComp from "./inner-sub-compoents.js/TeamsSecondComp";
import TeamSubCompTitle from "./inner-sub-compoents.js/TeamSubCompTitle";


import NavBar from "./NavBar";
import Footer from "../Footer";

function AboutUs() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Fetch stats from Laravel API
    fetch('http://127.0.0.1:8000/api/about_stats')
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(stats);
  return (
    <>
      <NavBar />
      <About stats={stats} />
      <TeamSubCompTitle
        subtitle="WALL OF FAME"
        subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
      />
      <div className="fame">
        {/* {users.map((user,index)=>{
          if (index <3) {
            return (
              <TeamsFirstComp
            name={user.name}
            tagLine={user.tagline}
            designer={user.designation}
            content={user.description}
            image = {"http://127.0.0.1:8000/api/images/"+user.profile_image}
          />
            );
          }
        })} */}
        <TeamsFirstComp
          name="Name NotName"
          tagLine="Tagline"
          designer="Designer"
          content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
          image={"http://127.0.0.1:8000/api/images/"+stats.photo_1}
        />
        <div className="fame-second">
          <TeamsFirstComp
            name="Name NotName"
            designer="Designer"
            content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
            tagLine="Tagline"
            image={"http://127.0.0.1:8000/api/images/"+stats.photo_2}
          />

        </div>
        <div className="fame-third">
          <TeamsFirstComp
            name="Name NotName"
            tagLine="Tagline"
            designer="Designer"
            content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
            image={"http://127.0.0.1:8000/api/images/"+stats.photo_3}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
