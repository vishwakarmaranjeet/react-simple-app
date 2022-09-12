import React, { useCallback, useEffect, useMemo } from "react";
import ChildComponent from "./components/ChildComponent";
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
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
      <button onClick={reset}>Reset</button>
      <ChildComponent />
      <UserProvider>
        <Consumer />
      </UserProvider>
    </>
  );
};

export default App;
