// Import first
import React, { useState } from "react";
import "./usage.css";

function Usage() {
  // useState(0) is to set the current state 0/ the label value to 0(label->0).
  const [value, setValue] = useState(0);

  //useState("white") is to set the current background color to white.
  const [color, setColor] = useState("white");

  return (
    <div>
      <div className="container1" style={{ background: color }}>
        {/* to change the value +/- */}
        <button
          onClick={() => {
            /*
             * initially value = 0.
             * 0 will increment to +1,+2.. etc.
             * useState(0, and a hidden function will be asined to setValue).
             * now setValue will act as function and calculation occurs.
             */
            setValue(value + 1);
          }}
        >
          Incement +
        </button>
        <label>{value}</label>
        <button
          onClick={() => {
            //incremented value will be decremented or decrement -1,-2.. etc.
            setValue(value - 1);
          }}
        >
          Decement -
        </button>
      </div>
      {/* to change the background color */}
      <div className="container2">
        <button
          onClick={() => {
            setColor("green");
          }}
        >
          💚
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          💙
        </button>
      </div>
    </div>
  );
}

export default Usage;
