import React, { useCallback, useEffect, useMemo } from "react";
import useCounter from "./hooks/useCounter";
import useWindowSize from "./hooks/useWindowSize";
import UserProvider from "./Context/userContext";
import Consumer from "./components/Consumer";

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const width = useWindowSize();
  console.log(width);
  return (
    <>
      <h2>Counter using custom Hooks</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <hr />
      <UserProvider>
        <Consumer />
      </UserProvider>
    </>
  );
};

export default App;
