import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";
const Test = () => {
  const [value, changeName] = useContext(UserContext);
  return (
    <>
      <h3>Context cosumer component</h3>
      <h4>
        {value.firstName} {value.lastName}
      </h4>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

export default Test;
