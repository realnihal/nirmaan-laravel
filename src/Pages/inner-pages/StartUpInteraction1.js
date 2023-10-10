import React from "react";
import NavBar from "./NavBar";
import Footer from "../Footer";
import CheckBox from "./inner-sub-compoents.js/CheckBox";

function StartUpInteraction1() {
  return (
    <div>
      <NavBar />
      <div>
        <CheckBox/>
      </div>
      <Footer />
    </div>
  );
}

export default StartUpInteraction1;
