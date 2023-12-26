import React from "react";

import youTube from "../images/youTube.png";
import twitter from "../images/twitter.png";
import linkedIN from "../images/LinkedIn.png";
import instagram from "../images/instagram.png";
import mail from "../images/mail.png";
import facebook from "../images/faceBook.png";

import "./homeFirstPage.css";

function SocialMediaIcons() {
  return (
    <ul className="social-icons">
      <li>
        <a href="https://www.youtube.com/">
          <img src={youTube} alt="youTube" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/i/flow/login?lang=en">
          <img src={twitter} alt="youTube" />
        </a>
      </li>
      <li>
        <a href="https://in.linkedin.com/">
          <img src={linkedIN} alt="youTube" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="youTube" />
        </a>
      </li>
      <li>
        <a href="https://mail.google.com/">
          <img src={mail} alt="youTube" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="youTube" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMediaIcons;
