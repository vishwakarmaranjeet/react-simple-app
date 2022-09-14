import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        let context = this;
        func.apply(context, args);
      }, timeout);
    };
  };

  const getWidowSize = () => {
    setWidth(window.innerWidth);
  };

  const resized = debounce(getWidowSize, 500);
  useEffect(() => {
    window.addEventListener("resize", resized);
    return () => {
      window.removeEventListener("resize", resized);
    };
  }, [resized]);
  return width;
};

export default useWindowSize;
