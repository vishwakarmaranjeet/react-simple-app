import React, { useReducer } from "react";

const initialState = {
  counter: 0,
};

const actionType = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
};

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case actionType.INCREMENT:
      newState = { ...state, counter: state.counter + 1 };
      break;
    case actionType.DECREMENT:
      newState = { ...state, counter: state.counter - 1 };
      break;
    case actionType.RESET:
      newState = { ...state, counter: 0 };
      break;
    default:
      throw new Error();
  }
  return newState;
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Counter using useReducer</h2>
      <h2>{state.counter}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: actionType.INCREMENT });
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: actionType.DECREMENT });
        }}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: actionType.RESET });
        }}
      >
        Reset
      </button>
    </>
  );
};

export default CounterWithReducer;
