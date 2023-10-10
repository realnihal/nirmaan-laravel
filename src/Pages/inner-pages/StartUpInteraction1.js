import React, { useState } from "react";
import axios from "axios";

import "./startUpInteraction.css";

import NavBar from "./NavBar";
import Footer from "../Footer";
import CheckBox from "./inner-sub-compoents.js/CheckBox";
import SearchBar from "./inner-sub-compoents.js/SearchBar";

function StartUpInteraction1() {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);

  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = (searchTerm) => {
    console.log("searchedItem - ", searchTerm);
    const apiUrl = `https://api.example.com/search?q=${searchTerm}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch((error) => {
        console.error("API call error", error);
      });
  };

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
      <div className="start-up-interaction">
        <div className="checkbox-margin">
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
        <div className="search-container">
          <SearchBar onSearch={handleSearch} />
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StartUpInteraction1;
