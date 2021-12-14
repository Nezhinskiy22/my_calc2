import React from "react";
import "./button.css";

export default function Button({ num, color, width, handleClick }) {
  return (
    <>
      <button
        className="calc-button"
        onClick={() => {
          handleClick(num);
        }}
        style={{ backgroundColor: color, width }}
      >
        {num}
      </button>
    </>
  );
}
