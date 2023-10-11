import React, { useState } from "react";

import "./workWithStartUp.css";
import NavBar from "./NavBar";
import Footer from "../Footer";
import CheckBox from "./inner-sub-compoents.js/CheckBox";
import SearchBar from "./inner-sub-compoents.js/SearchBar";
import axios from "axios";
import WorkWithNirman from "./inner-sub-compoents.js/WorkWithNirman";

function WorkWithStartUp() {
  const roles = [
    { role: "Front End Dev - Web", id: 1 },
    { role: "Back End Dev - Web", id: 2 },
    { role: "Front End Dev", id: 3 },
    { role: "Designer", id: 4 },
    { role: "Full Stack - App", id: 5 },
    { role: "Back End Dev ", id: 6 },
  ];
  const Remunerations = [
    { remuneration: "Unpaid", id: 1 },
    { remuneration: "Paid", id: 2 },
  ];

  const sectors = [
    { id: "aerospace", sector: "Aerospace" },
    { id: "blockchain", sector: "Blockchain" },
    { id: "cleanTech", sector: "Clean Technology" },
    { id: "digitalMarketing", sector: "Digital Marketing" },
    { id: "edTech", sector: "Ed Tech" },
    { id: "eCommerce", sector: "E Commerce" },
  ];

  const initialVisibleRoles = 4;
  const [selectedRole, setSelectedRole] = useState([]);
  const [visibleRoles, setVisibleRoles] = useState(
    roles.slice(0, initialVisibleRoles)
  );
  const [selectedRemuneration, setSelectedRemuneration] = useState([]);
  const [selectedSectors2, setSelectedSectors2] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult1, setSearchResult1] = useState(null);
  const [searchResult2, setSearchResult2] = useState(null);

  // api call
  const handleSearch = (searchTerm) => {
    console.log("searchedItem - ", searchTerm);
    const apiUrl = `https://api.example.com/search?q=${searchTerm}`;
    const apiUrl2 = `https://api.example.com/endpoint2?q=${searchTerm}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setSearchResult1(response.data);
      })
      .catch((error) => {
        console.error("API call error", error);
      });

    axios
      .get(apiUrl2)
      .then((response) => {
        setSearchResult2(response.data);
      })
      .catch((error) => {
        console.error("API call error", error);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="wws-main">
        <div className="wws-checkbox">
          <CheckBox
            roles={roles}
            Remunerations={Remunerations}
            sectors2={sectors}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            selectedRemuneration={selectedRemuneration}
            setSelectedRemuneration={setSelectedRemuneration}
            selectedSectors2={selectedSectors2}
            setSelectedSectors2={setSelectedSectors2}
            Title1="Role"
            Title2="Remuneration"
            initialVisibleRoles={initialVisibleRoles}
            showAll={showAll}
            setShowAll={setShowAll}
            visibleRoles={visibleRoles}
            setVisibleRoles={setVisibleRoles}
          />
        </div>

        <div>
          <div className="wws-right-div">
            <SearchBar
              onSearch={handleSearch}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <div className="wws-table">
              <div className="open-roles-nirman">
                Open roles to work with Nirmaan
              </div>
              <div className="wws-list-with-nirman">
                <ul>
                  <li className="list-role">Role</li>
                  <li>Duration</li>
                  <li>Remuneration</li>
                  <li>Actions</li>
                </ul>
              </div>
              <div className="wwn-details">
                {/* //data from api response  */}
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                />
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                />
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                />
              </div>
            </div>
            <div className="open-roles-nirman">
              Open roles to work with STARTUPS ASSSOCIATED
            </div>
            <div className="wws-startup-associated">
              <div className="wws-list-with-nirman">
                <ul>
                  <li className="list-role-2">Role</li>
                  <li className="wwnstart-up">StartUp</li>
                  <li>Duration</li>
                  <li>Remuneration</li>
                  <li>Actions</li>
                </ul>
              </div>
              <div className="wwn-details">
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                  startUp="Prayavaran Sodhal"
                  tech="clean Technology"
                />
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                  startUp="Prayavaran Sodhal"
                  tech="clean Technology"
                />
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                  startUp="Prayavaran Sodhal"
                  tech="clean Technology"
                />
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                  startUp="Prayavaran Sodhal"
                  tech="clean Technology"
                />
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                  startUp="Prayavaran Sodhal"
                  tech="clean Technology"
                />
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                  startUp="Prayavaran Sodhal"
                  tech="clean Technology"
                />
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="Unpaid"
                  link="https://ww.google.com"
                  startUp="Prayavaran Sodhal"
                  tech="clean Technology"
                />
                <WorkWithNirman
                  role="Front End Developer"
                  duration="3 months"
                  Stipend="INR 12,000/month"
                  link="https://ww.google.com"
                  startUp="Prayavaran Sodhal"
                  tech="clean Technology"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WorkWithStartUp;
