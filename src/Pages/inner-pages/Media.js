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
            <div>
              <a href="#gallery">Gallery</a>
            </div>
            <div>
              <a href="#events">Events</a>
            </div>
            <div>
              <a href="#team">Team</a>
            </div>
            <div>
              <a href="#product">Products</a>
              {/* make required changes  */}
            </div>
            <div className="nir-you">
              <a href="https://www.youtube.com/channel/UCqXpedHH46Y5_x-7MNY6nCw">
                Nirman<br></br>Youtube
              </a>
            </div>
          </div>
        </div>
        <div className="media-sub-comp">
          <MediaSubComp />
        </div>
        <div id="events">
          <TeamSubCompTitle MediaSubtitle="SEE OUR" topic="EVENTS" />
        </div>
        <div className="media-sub-comp">
          <MediaSubComp />
        </div>

        <div id="team">
          <TeamSubCompTitle MediaSubtitle="SEE OUR" topic="TEAM" />
        </div>
        <div className="media-sub-comp">
          <MediaSubComp />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;
