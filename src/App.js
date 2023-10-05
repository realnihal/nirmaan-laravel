import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import TeamsComp from "../src/Pages/inner-pages/Teams";
import AboutComp from "../src/Pages/inner-pages/About";
import StartupsComp from "../src/Pages/inner-pages/StartUps";
import Media from "./Pages/inner-pages/Media";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamsComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/start-ups" element={<StartupsComp />} />
        <Route path="/media" element={<Media/>} />
      </Routes>
    </div>
  );
}

export default App;
