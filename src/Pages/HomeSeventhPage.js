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
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="seventh-page-container ">
      <div className="nirman-logo-7">
        <img src={nirmanLogo7} className="page7-logo" />
        <img src={getToKnow} className="page7-heading" />
      </div>
      <div className="user-info7">
        <form onSubmit={handleSubmit}>
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
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="subject-input common-style7"
          />

          <input
            type="submit"
            value="Send"
            className="send-input common-style7"
          />
        </form>
      </div>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/start-ups">Start-ups</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeSeventhPage;
