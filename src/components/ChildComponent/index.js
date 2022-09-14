import React from "react";

const ChildComponent = ({ value }) => {
  console.log("[Child component]");
  return <h1>Child Component</h1>;
};

export default React.memo(ChildComponent);
