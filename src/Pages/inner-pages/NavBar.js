import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./navBar.css";
import nirmanLogoNav from "../../images/nirmaan-logo-small.png";
import iitmLogo from "../../images/iitmLogo.png";
import userIcon from "../../images/user.png";

function NavBar() {
  return (
    <div className="main-page-container">
      <div className="main-navbar">
        <div className="nirm-nav">
          <Link to="/">
            <img src={nirmanLogoNav} />
          </Link>
        </div>
        <div className="black-nav">
          <div className="iitm-logo-nav">
            <img src={iitmLogo} />
          </div>
          <div className="links-nav">
            <ul>
              <li>
                <Link to="/teams">Team</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/start-ups">Startups</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="log-in">
          <img src={userIcon} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
