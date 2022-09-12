import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";
const Test = () => {
  const [value, changeName] = useContext(UserContext);
  return (
    <>
      <h1>Consumer components</h1>
      <h4>
        {value.firstName} {value.lastName}
      </h4>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

export default Test;
