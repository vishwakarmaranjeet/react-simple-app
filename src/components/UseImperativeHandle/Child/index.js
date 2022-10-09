import React, { forwardRef, useImperativeHandle, useState } from "react";

const Child = (props, ref) => {
  const [isShow, setIsShow] = useState(false);

  useImperativeHandle(ref, () => ({
    showMessage: (value) => setIsShow(value),
  }));

  const hideMessage = () => {
    setIsShow(false);
  };

  return (
    <>
      <h2>{isShow && "Welcome to useImperativeHandle"}</h2>
      <button type="button" onClick={hideMessage}>
        Hide Message
      </button>
    </>
  );
};
export default forwardRef(Child);
