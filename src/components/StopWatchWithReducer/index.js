import React, { useReducer, useEffect, useRef } from "react";

const initialState = {
  isRunning: false,
  time: 0,
};

const actionType = {
  START: "START",
  STOP: "STOP",
  RESET: "RESET",
  TICK: "TICK",
};

function reducer(state, action) {
  switch (action.type) {
    case actionType.START:
      return { ...state, isRunning: true };
    case actionType.STOP:
      return { ...state, isRunning: false };
    case actionType.RESET:
      return { isRunning: false, time: 0 };
    case actionType.TICK:
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}
const StopWatchWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => {
      dispatch({ type: actionType.TICK });
    }, 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <>
      <h2>Stop watch using useReducer Hook</h2>
      <h2>{state.time}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: actionType.START });
        }}
      >
        Start
      </button>
      <button type="button" onClick={() => dispatch({ type: actionType.STOP })}>
        Stop
      </button>
      <button type="reset" onClick={() => dispatch({ type: actionType.RESET })}>
        Reset
      </button>
    </>
  );
};

export default StopWatchWithReducer;
