import React, { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const [isEdit, setIsEdit] = useState(true);
  const inputRef = useRef(null);
  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  const inputEditable = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      <input type="text" placeholder="Enter Your Name" ref={inputRef} />
      <button type="button" onClick={inputEditable}>
        Edit Name
      </button>
    </>
  );
};
export default UseRefExample;
