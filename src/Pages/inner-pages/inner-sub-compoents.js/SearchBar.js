import React, { useState, useRef, useEffect } from "react";

import "./searchBar.css";
import search from "../../../images/search 1.png";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setSearchTerm("");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };
  
  return (
    <div className="search-bar" ref={searchContainerRef}>
      <img src={search} className="search-img" />
      <input
        type="text"
        placeholder="SEARCH"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default SearchBar;
