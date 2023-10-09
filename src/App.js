import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import TeamsComp from "../src/Pages/inner-pages/Teams";
import AboutComp from "./Pages/inner-pages/AboutInteraction";
import StartupsComp from "../src/Pages/inner-pages/StartUps";
import Media from "./Pages/inner-pages/Media";
import BlogsComp from "./Pages/inner-pages/AboutUs";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamsComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/start-ups" element={<StartupsComp />} />
        <Route path="/media" element={<Media />} />
        <Route path="/blog" element={<BlogsComp />} />
      </Routes>
    </div>
  );
}

export default App;
