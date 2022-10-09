import React, { useRef } from "react";
import Child from "../Child";

const Parent = () => {
  const childRef = useRef(null);

  const handleShowMessage = (value) => {
    childRef.current.showMessage(value);
  };
  return (
    <>
      <h2>Parent Component</h2>
      <Child ref={childRef} />
      <button onClick={() => handleShowMessage(true)}>Show Message</button>
    </>
  );
};
export default Parent;
