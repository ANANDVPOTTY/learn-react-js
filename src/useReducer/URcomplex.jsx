import "./urcomplex.css";
import React, { useReducer } from "react";
import URcomValue, { Type } from "./URcomValue";

//THIS IS CONNECTED TO "URcomValue" COMPONENT

const initialState = { value: 0 };

function URcomplex() {
  //URcomValue function is URcomValue" COMPONENT
  const [state, dispatch] = useReducer(URcomValue, initialState);

  return (
    <>
      <section className="wholeCont">
        <div className="container1" style={{ background: state.color }}>
          <button
            className="button-55"
            onClick={() => {
              /*
               * dispatch("increment");
               * object is given as action to reducer
               */
              //----------OR-------------
              dispatch({
                type: Type.CHANGE_VALUE,
                payload: 1,
              });
            }}
          >
            Incement +
          </button>

          <label>{state.value}</label>

          <button
            className="button-55"
            onClick={() => {
              //so "decrement" is the action here.
              //   dispatch("decrement");
              //----------OR-------------
              dispatch({
                type: Type.CHANGE_VALUE,
                payload: -1,
              });
            }}
          >
            Decement -
          </button>
        </div>

        <div className="container2">
          <button
            onClick={() => {
              //   dispatch("green");
              //----------OR-------------
              dispatch({
                type: Type.CHANGE_COLOR,
                payload: "green",
              });
            }}
          >
            💚
          </button>
          <button
            onClick={() => {
              //   dispatch("blue");
              //----------OR-------------
              dispatch({
                type: Type.CHANGE_COLOR,
                payload: "blue",
              });
            }}
          >
            💙
          </button>
        </div>
      </section>
    </>
  );
}

export default URcomplex;
