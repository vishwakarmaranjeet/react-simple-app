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
import ConditionalRendering from "./components/ConditionalRendering";
import useHover from "./Hooks/useHover";
import UseRefExample from "./components/UseRefExample";
import styles from "./App.module.css";
import CountWithOne from "./HOC/CountWithOne";
import CountWithTwo from "./HOC/CountWithTwo";
// const Consumer = lazy(() => import("./components/Consumer"));
// const CounterWithReducer = lazy(() =>
//   import("./components/CounterWithReducer")
// );
// const StopWatchWithReducer = lazy(() =>
//   import("./components/StopWatchWithReducer")
// );
// const StopWatchWithoutReducer = lazy(() =>
//   import("./components/StopWatchWithoutReducer")
// );
// const CounterWithCustomHook = lazy(() =>
//   import("./components/CounterWithCustomHook")
// );
// const ImageWithPreview = lazy(() => import("./components/ImageWithPreview"));
// const CounterWithCustomUseReducerHook = lazy(() =>
//   import("./components/CounterWithCustomUseReducerHook")
// );
// const APIRequest = lazy(() => import("./components/APIRequest"));
import Posts from "./HOC/Post";

const App = () => {
  const width = useWindowSize();
  const [ref, isHovered] = useHover();
  console.log(`[Screen Width] - ${width}`);

  return (
    <>
      <section className={styles.container}>
        {/* <Suspense fallback={<div>Loading</div>}> */}
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
        {/* </Suspense> */}
        <h2 style={{ color: isHovered ? "red" : "#333" }} ref={ref}>
          Hello React Hooks
        </h2>
        <UseRefExample />
        <ConditionalRendering />
        <CountWithOne />
        <CountWithTwo />
        <Posts />
      </section>
    </>
  );
};

export default App;
