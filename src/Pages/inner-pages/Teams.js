import React from "react";

import NavBar from "./NavBar";
import Footer from "../Footer";
import "./teams.css";

function Teams() {
  return (
    <div className="teams-container">
      <NavBar />
      <h1>Teams</h1>
      <div className="teams-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Teams;
