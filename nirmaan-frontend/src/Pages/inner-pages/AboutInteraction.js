import React, {useState, useEffect} from "react";

import NavBar from "./NavBar";
import Footer from "../Footer";
import About from "./About";

function AboutInteraction() {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    // Fetch stats from Laravel API
    fetch('http://127.0.0.1:8000/api/about_stats')
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(stats);
  return (
    <div>
      <NavBar />
      <About stats={stats}/>
      <Footer />
    </div>
  );
}

export default AboutInteraction;
