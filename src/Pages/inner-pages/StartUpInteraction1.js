import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "../Footer";
import CheckBox from "./inner-sub-compoents.js/CheckBox";

function StartUpInteraction1() {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);

  const years = [
    { id: "2021-22", year: "2021-22" },
    { id: "2020-21", year: "2020-21" },
    { id: "2019-20", year: "2019-20" },
    { id: "2018-19", year: "2018-19" },
    { id: "2017-18", year: "2017-18" },
  ];

  const months = [
    { id: "jan", month: "january" },
    { id: "july", month: "july" },
    { id: "aug", month: "August" },
  ];

  const sectors = [
    { id: "aerospace", sector: "Aerospace" },
    { id: "blockchain", sector: "Blockchain" },
    { id: "cleanTech", sector: "Clean Technology" },
    { id: "digitalMarketing", sector: "Digital Marketing" },
    { id: "edTech", sector: "Ed Tech" },
    { id: "eCommerce", sector: "E Commerce" },
  ];
  return (
    <div>
      <NavBar />
      <div>
        <CheckBox
          years={years}
          months={months}
          sectors={sectors}
          selectedYears={selectedYears}
          setSelectedYears={setSelectedYears}
          selectedMonths={selectedMonths}
          setSelectedMonths={setSelectedMonths}
          selectedSectors={selectedSectors}
          setSelectedSectors={setSelectedSectors}
        />
      </div>
      <Footer />
    </div>
  );
}

export default StartUpInteraction1;
