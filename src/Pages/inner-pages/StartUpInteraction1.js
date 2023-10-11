import React, { useState } from "react";
import axios from "axios";

import "./startUpInteraction.css";

import NavBar from "./NavBar";
import Footer from "../Footer";
import SearchedResult from "./inner-sub-compoents.js/SearchedResult";
import CheckBox from "./inner-sub-compoents.js/CheckBox";
import SearchBar from "./inner-sub-compoents.js/SearchBar";
import demoImg from "../../images/chess.png";

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
          {/* map the searched result when api is ready  */}
          {/* {searchResult.map((item) => {
            <div>
              
            </div>
          })} */}

          <div className="searched-container-div">
            <SearchedResult
              demoImg={demoImg}
              projectName="Project Name"
              projectContent="NIRMAAN acts as a sandbox for aspiring entrepreneurs of IIT Madras
            to practice the highs and lows of entrepreneurship with a deferred
            placement. We strive to offer our students a firsthand experience of
            what it takes to be an entrepreneur."
              Projecturl="/your-target-page"
            />
            <SearchedResult
              demoImg={demoImg}
              projectName="Project Name"
              projectContent="NIRMAAN acts as a sandbox for aspiring entrepreneurs of IIT Madras
            to practice the highs and lows of entrepreneurship with a deferred
            placement. We strive to offer our students a firsthand experience of
            what it takes to be an entrepreneur."
              Projecturl="/your-target-page"
            />
            <SearchedResult
              demoImg={demoImg}
              projectName="Project Name"
              projectContent="NIRMAAN acts as a sandbox for aspiring entrepreneurs of IIT Madras
            to practice the highs and lows of entrepreneurship with a deferred
            placement. We strive to offer our students a firsthand experience of
            what it takes to be an entrepreneur."
              Projecturl="/your-target-page"
            />
            <SearchedResult
              demoImg={demoImg}
              projectName="Project Name"
              projectContent="NIRMAAN acts as a sandbox for aspiring entrepreneurs of IIT Madras
            to practice the highs and lows of entrepreneurship with a deferred
            placement. We strive to offer our students a firsthand experience of
            what it takes to be an entrepreneur."
              Projecturl="/your-target-page"
            />
            <SearchedResult
              demoImg={demoImg}
              projectName="Project Name"
              projectContent="NIRMAAN acts as a sandbox for aspiring entrepreneurs of IIT Madras
            to practice the highs and lows of entrepreneurship with a deferred
            placement. We strive to offer our students a firsthand experience of
            what it takes to be an entrepreneur."
              Projecturl="/your-target-page"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StartUpInteraction1;
