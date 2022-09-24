import React, { useCallback, useState } from "react";

const colorPalette = [
  { id: 1, name: "red" },
  { id: 2, name: "green" },
  { id: 3, name: "blue" },
  { id: 4, name: "purple" },
  { id: 5, name: "orange" },
];
const ConditionalRendering = () => {
  const [data, setData] = useState("");

  const buttonHandler = (e) => {
    setData(e.target.value);
  };

  const resetHandler = () => {
    setData("");
  };

  const upperCase = (data) => {
    if (!data) return;
    return data.toLocaleUpperCase();
  };

  const renderData = useCallback((data) => {
    let strData = "";
    switch (data) {
      case "red":
        strData += `You have clicked on [${upperCase(data)}]`;
        break;
      case "green":
        strData += `You have clicked on [${upperCase(data)}]`;
        break;
      case "blue":
        strData += `You have clicked on [${upperCase(data)}]`;
        break;
      default:
        strData += `You have clicked on [${upperCase(data)}]`;
    }
    return strData;
  }, []);

  return (
    <>
      <div style={{ marginTop: "40px" }} onClick={buttonHandler}>
        {colorPalette.map((color) => (
          <button type="button" key={color.id} value={color.name}>
            {upperCase(color.name)}
          </button>
        ))}
        <button onClick={resetHandler}>Reset</button>
        <h3 style={{ color: data }}>{data ? renderData(data) : ""}</h3>
      </div>
    </>
  );
};
export default ConditionalRendering;
