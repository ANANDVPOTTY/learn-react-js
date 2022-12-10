//1, Import first
import React, { useReducer, useState } from "react";
import "./useRedu.css";

/*
 * valueReducer function().
 * valueReducer function must declered globally .
 * do not declere it inside our component.
 * reducer function must be a pure function.
 * so declered it globally.
 *
 * valueReducer(state, action) state & action is called as argument.
 * currently state is 0.
 */
function valueReducer(state, action) {
  /*
   * the current state(value) will change,
   * accourding to the function valueReducer() "return;"
   *
   * action will be called "increment"/"decrement"
   * accourding to the action{ state will change.
   */
  if (action === "increment") {
    return state + 1;
  } else {
    return state - 1;
  }
}

function UseRedu() {
  //
  const [value, dispatch] = useReducer(valueReducer, 0);
  const [color, setColor] = useState("white");
  return (
    <>
      <div>
        <div className="container1" style={{ background: color }}>
          <button
            onClick={() => {
              /* dispatch() is function
               * inside the dispatch is called argument dispatch(argument).
               * The dispatch(argument) argument is called as Acion{.
               *
               * here the dispatch argument is to increment the value.
               * so "increment" is the action here.
               */

              dispatch("increment");
            }}
          >
            Incement +
          </button>
          <label>{value}</label>
          <button
            onClick={() => {
              //so "decrement" is the action here.
              dispatch("decrement");
            }}
          >
            Decement -
          </button>
        </div>

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
    </>
  );
}

export default UseRedu;
