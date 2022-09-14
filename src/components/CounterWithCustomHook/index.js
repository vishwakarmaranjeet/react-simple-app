import useCounter from "../../Hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <h2>Counter using custom Hooks</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default CounterWithCustomHook;
