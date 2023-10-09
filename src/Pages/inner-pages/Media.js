import React from "react";

import "./media.css";
import NavBar from "./NavBar";
import Footer from "../Footer";

import TeamSubCompTitle from "../inner-pages/inner-sub-compoents.js/TeamSubCompTitle";
import MediaSubComp from "./inner-sub-compoents.js/MediaSubComp";

function Media() {
  return (
    <div>
      <NavBar />
      <div>
        <div className="media-nav">
          <TeamSubCompTitle MediaSubtitle="SEE OUR" topic="GALLERY" />
          <div className="media-list">
            <div>Gallery</div>
            <div>Events</div>
            <div>Team</div>
            <div>Products</div>
            <div className="nir-you">
              Nirman<br></br>Youtube
            </div>
          </div>
        </div>
        <div className="media-sub-comp">
          <MediaSubComp />
        </div>
        <TeamSubCompTitle MediaSubtitle="SEE OUR" topic="EVENTS" />
        <div className="media-sub-comp">
          <MediaSubComp />
        </div>
        <TeamSubCompTitle MediaSubtitle="SEE OUR" topic="TEAM" />
        <div className="media-sub-comp">
          <MediaSubComp />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;
