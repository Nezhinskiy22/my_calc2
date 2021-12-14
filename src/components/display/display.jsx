import React from "react";
import "./display.css";

const Display = ({ num, calc }) => {
  return (
    <div className="display">
      <h3>{calc}</h3>
      <h1>{num}</h1>
    </div>
  );
};

export default Display;
