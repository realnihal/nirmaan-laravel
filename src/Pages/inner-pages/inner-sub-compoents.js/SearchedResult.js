import React from "react";

import "./searchedResult.css";

function SearchedResult({ demoImg, projectName, projectContent, Projecturl}) {
  const handleButtonClick = () => {
    // Define the URL you want to navigate to when the button is clicked
    const url ={Projecturl}; // Replace with the actual URL

    // Navigate to the specified URL
    window.location.href = url;
  };
  return (
    <div className="searched-result-main">
      <div>
        <img src={demoImg} className="searched-img" />
      </div>
      <div className="searched-project-content-main">
        <div>
          <div className="sr-name">{projectName}</div>
          <div className="sr-content">
            {projectContent}
          </div>
        </div>
        <div className="button-div" onClick={handleButtonClick}>
          SEE THIS PROJECT
        </div>
      </div>
    </div>
  );
}

export default SearchedResult;
