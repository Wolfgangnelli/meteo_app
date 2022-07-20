import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./_minicardoverlay.scss";
import svg1 from "../../../assets/svg/sun-hot.svg";

function MiniCardOverlay() {
  return (
    <div className="mini-card-overlay">
      <div
        className="ps-1 card-overlay-container"
        style={{ height: 100 + "%" }}
      >
        <div className="card-overlay-temperature">
          <p>22°</p>
        </div>
        <Image src={svg1} fluid />
      </div>
    </div>
  );
}

export default MiniCardOverlay;
