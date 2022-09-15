import React from "react";
import useWindowSize from "./Hooks/useWindowSize";
import UserProvider from "./Context/userContext";
import Consumer from "./components/Consumer";
import CounterWithReducer from "./components/CounterWithReducer";
import StopWatchWithReducer from "./components/StopWatchWithReducer";
import StopWatchWithoutReducer from "./components/StopWatchWithoutReducer";
import CounterWithCustomHook from "./components/CounterWithCustomHook";
import ImageWithPreview from "./components/ImageWithPreview";
import CounterWithCustomUseReducerHook from "./components/CounterWithCustomUseReducerHook";
import APIRequest from "./components/APIRequest";
import styles from "./App.module.css";

const App = () => {
  const width = useWindowSize();
  console.log(`[Screen Width] - ${width}`);
  return (
    <>
      <section className={styles.container}>
        <CounterWithCustomHook />
        <CounterWithReducer />
        <StopWatchWithReducer />
        <StopWatchWithoutReducer />
        <UserProvider>
          <Consumer />
        </UserProvider>
        <ImageWithPreview />
        <CounterWithCustomUseReducerHook />
        <APIRequest />
      </section>
    </>
  );
};

export default App;
