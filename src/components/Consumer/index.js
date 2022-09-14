import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";

const Test = () => {
  const [value, updateDetails] = useContext(UserContext);
  return (
    <>
      <h2>Context example cosumer component</h2>
      <h4>
        {value.firstName} {value.lastName} | {value.email}
      </h4>
      <button onClick={updateDetails}>Update Details</button>
    </>
  );
};

export default Test;
