import useCounterReducer from "../../Hooks/useCounterReducer";

const initialState = {
  counter: 0,
};

const CounterWithCustomUseReducerHook = () => {
  const [state, setState] = useCounterReducer(initialState);
  return (
    <>
      <h2>Counter with custom hook reducer</h2>
      <h2>{state.counter}</h2>
      <button type="button" onClick={() => setState("INCREMENT")}>
        +
      </button>
      <button type="button" onClick={() => setState("DECREMENT")}>
        -
      </button>
    </>
  );
};

export default CounterWithCustomUseReducerHook;
