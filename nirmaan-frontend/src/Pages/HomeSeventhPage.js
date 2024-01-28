import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./homeSeventhPage.css";
import nirmanLogo7 from "../images/nirmaan-logo-small.png";
import getToKnow from "../images/GET TO KNOW US BETTER.png";
import Footer from "./Footer";

function HomeSeventhPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="seventh-page-container ">
      <div className="nirman-logo-7">
        <img src={nirmanLogo7} className="page7-logo" />
        <img src={getToKnow} className="page7-heading" />
      </div>
      <div className="user-info7">
        <form onSubmit={handleSubmit} className="user-info7__form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="name-input common-style7"
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="email-input common-style7"
          />
          <div className="fsubmit-input">
            {isMobile ? (
              <textarea name=""
                value={formData.subject}
                id="subject"
                cols="30"
                rows="8"
                onChange={handleInputChange}
                className="subject-input common-style7"

              ></textarea>
            ) : (
              <input
                type="text" text
                id="subject"
                name="subject"

                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="subject-input common-style7"
              />
            )}

            <input
              type="submit"
              value="Send"
              className="send-input common-style7"
            />
          </div>
        </form>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/teams">Teams</a>
          </li>
          <li>
            <a href="/about-us">About</a>
          </li>
          <li>
            <a href="/work-with-start-ups">Startups</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default HomeSeventhPage;
