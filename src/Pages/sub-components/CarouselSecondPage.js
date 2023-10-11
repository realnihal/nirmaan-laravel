import React from "react";


import "./carouselSecondPage.css";

import cImg1 from "../../images/cimg1.png";
import cImg2 from "../../images/cimg2.png";

function CarouselSecondPage() {
  return (
    <div className="vertical-carousel-container">
      <div>
        <img src={cImg1}/>
      </div>
      <div>
        <img src={cImg1}/>
      </div>
      <div>
        <img src={cImg1}/>
      </div>
    </div>
  );
}

export default CarouselSecondPage;
