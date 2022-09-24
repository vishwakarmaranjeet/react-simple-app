import { useEffect, useRef, useState, useCallback } from "react";

const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  // memoize the function calls
  const handleMouseOver = useCallback(() => {
    setValue(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setValue(false);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      node.removeEventListener("mouseover", handleMouseOver);
      node.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseOut, handleMouseOver]);

  return [ref, value];
};

export default useHover;
