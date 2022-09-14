import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      throw new Error("Error has occured");
  }
}

const useCounterReducer = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setState = (newState) => dispatch({ type: newState });
  return [state, setState];
};

export default useCounterReducer;
