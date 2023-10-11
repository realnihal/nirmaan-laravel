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
              <li className="drop-down-nav">
                <Link to="/about-us">About</Link>
                <div className="dropdown-content">
                  <div>
                    <Link to="/about-us">About</Link>
                  </div>
                  <div>
                    <Link to="/about-interaction">Interaction</Link>
                  </div>
                </div>
              </li>
              <li className="drop-down-nav">
                <Link to="/start-ups-main">Startups</Link>

                <div className="dropdown-content">
                  <div>
                    <Link to="/start-ups-main">startUps</Link>
                  </div>
                  <div>
                    <Link to="/start-ups-interaction">Interaction</Link>
                  </div>
                  <div>
                    <Link to="/work-with-start-ups">Work with Startups</Link>
                  </div>
                  <div>
                    <Link to="/inner-start-up-pratham">
                      Inner startUp - Pratham
                    </Link>
                  </div>
                  <div>
                    <Link to="/inner-start-up-akshar">
                      Inner startUp - Akshar
                    </Link>
                  </div>
                </div>
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
