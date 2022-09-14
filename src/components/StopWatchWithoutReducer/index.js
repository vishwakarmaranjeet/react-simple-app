import React, { useEffect, useRef, useState } from "react";

const StopWatchWithoutReducer = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalID = useRef(0);

  const startStopCounter = () => {
    setIsRunning(!isRunning);
  };

  const resetCounter = () => {
    setCounter(0);
    clearInterval(intervalID.current);
  };

  useEffect(() => {
    if (isRunning) {
      intervalID.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalID.current);
      intervalID.current = 0;
    };
  }, [isRunning]);

  return (
    <>
      <h2>Stop watch without useReducer Hook</h2>
      <h2>{counter}</h2>
      <button type="button" onClick={startStopCounter}>
        Start / Stop
      </button>
      <button type="button" onClick={resetCounter}>
        Reset
      </button>
    </>
  );
};

export default StopWatchWithoutReducer;
