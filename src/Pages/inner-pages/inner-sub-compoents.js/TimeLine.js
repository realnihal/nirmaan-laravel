import React from "react";

import "./timeline.css";

import chessImg from "../../../images/chess.png";
import hLine from "../../../images/hLine.png";
import vLine from "../../../images/vLine.png";

function TimeLine() {
  return (
    <div>
      <div className="timeline">
        <div className="chess-hv">
          <img src={chessImg} className="c-img" />
          <img src={hLine} className="h-line" />
          <img src={vLine} className="v-line" />
        </div>
        <div className="timeline-right">
          <div>
            <div className="a-title">2008 - Subtitle</div>
            <div className="a-content">
              Nirmaan, The Pre-incubator, IIT Madras, aims to provide the
              experience of Entrepreneurship to the student community. NIRMAAN
              acts as a sandbox for aspiring entrepreneurs of IIT Madras to
              practice the highs and lows of entrepreneurship with a deferred
              placement. We strive to offer our students a firsthand experience
              of what it takes to be an entrepreneur.
            </div>
            <div className="odd-color">
              <div className="a-title a-width a-padding">2011 - Subtitle</div>
              <div className="a-title a-width">2015 - Subtitle</div>
              <div className="a-title a-width">2021 - Subtitle</div>
              <div className="a-title a-width">2023 - Subtitle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
