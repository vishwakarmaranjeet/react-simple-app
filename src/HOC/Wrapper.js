import { useState } from "react";

const Wrapper = (WrappedComponent, entity) => {
  return function Wrapper(props) {
    const handleClick = () => {
      if (entity === 2) {
        setCount(count + 2);
      } else {
        setCount(count + 1);
      }
    };
    const [count, setCount] = useState(0);
    return (
      <WrappedComponent handleClick={handleClick} count={count} {...props} />
    );
  };
};

export default Wrapper;
