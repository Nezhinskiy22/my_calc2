import React, { useState } from "react";
import Button from "../button/button";
import Display from "../display/display";
import "./surface.css";

const Surface = () => {
  const [num, setNum] = useState(0);
  const [calc, setCalc] = useState("");

  const addToCalc = (val) => {
    setCalc((calc) => [...calc, val + ""]);
  };

  const resultCalc = () => {
    console.log(eval(calc.toString()));
  };

  const clearDisplay = () => {
    setNum(0);
    setCalc("");
  };
  return (
    <div className="surface">
      <Display num={num} calc={calc} />
      <div className="row">
        <Button num={7} handleClick={addToCalc} />
        <Button num={8} handleClick={addToCalc} />
        <Button num={9} handleClick={addToCalc} />
        <Button num={"*"} color="#e28233" handleClick={addToCalc} />
      </div>
      <div className="row">
        <Button num={4} handleClick={addToCalc} />
        <Button num={5} handleClick={addToCalc} />
        <Button num={6} handleClick={addToCalc} />
        <Button num={"-"} color="#e28233" handleClick={addToCalc} />
      </div>
      <div className="row">
        <Button num={1} handleClick={addToCalc} />
        <Button num={2} handleClick={addToCalc} />
        <Button num={3} handleClick={addToCalc} />
        <Button num={"+"} color="#e28233" handleClick={addToCalc} />
      </div>
      <div className="row">
        <Button num={0} handleClick={addToCalc} />
        <Button num={"."} handleClick={addToCalc} />
        <Button num={"="} color="#eb4d31" handleClick={resultCalc} />
        <Button num={"-"} color="#e28233" handleClick={addToCalc} />
      </div>
      <div className="row">
        <Button
          width="90%"
          num={"C"}
          color="#e28233"
          handleClick={clearDisplay}
        />
      </div>
    </div>
  );
};

export default Surface;
