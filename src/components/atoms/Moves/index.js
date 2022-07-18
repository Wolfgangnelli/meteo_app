import React from "react";
import "./_moves.scss";

function Moves() {
  return (
    <div className="moves-container">
      <span className="dot-moves active"></span>
      <span className="dot-moves mx-2"></span>
      <span className="dot-moves"></span>
    </div>
  );
}

export default Moves;
