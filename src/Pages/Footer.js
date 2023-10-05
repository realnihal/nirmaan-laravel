import React from "react";

import "./Footer.css";
import mailNnirmaan from "../images/mail-nir.png";
import location from "../images/location.png";
import SocialMediaIcons from "./SocialMediaIcons";
import copyRight from "../images/copyright.png";

function Footer() {
  return (
    <div className="common-footer">
      <div className="loc-mail">
        <div>
          <div className="mail-footer">
            <img src={mailNnirmaan} />
          </div>
          <img src={location} className="location" />
        </div>
        <div className="mailId-loc">
          <div className="mail-id">nirmaan@smail.iitm.ac.in</div>
          <div>Indian Institute of Technology Madras, Chennai - 600036</div>
        </div>
        <div className="social-icons-footer">
          <SocialMediaIcons />
        </div>
      </div>
      <div className="copyright-footer">
        <img src={copyRight} />
        <div>2023 IIT Madras - All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
