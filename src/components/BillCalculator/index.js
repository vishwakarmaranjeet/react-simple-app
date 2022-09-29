import React, { useState } from "react";

const BillCalculator = () => {
  const [inputVal, setInputVal] = useState();
  const [totalAmount, setTotalAmount] = useState(0);
  const SGST = 9;
  const CGST = 9;

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setInputVal(value);
  };

  const calculateTotal = () => {
    const totalGST = SGST + CGST;
    if (inputVal > totalGST) {
      const total = (Number(inputVal) * Number(totalGST)) / 100;
      const finalAmount = Number(total) + Number(inputVal);
      setTotalAmount(Math.round(finalAmount));
    } else {
      setTotalAmount();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter amount"
        value={inputVal}
        onChange={(e) => handleInputChange(e)}
      />
      <br />
      <br />
      SGST : 9% <br /> CGST : 9%
      <br />
      <br />
      {totalAmount ? `Total Amount : ${totalAmount}` : ""}
      <br />
      <br />
      <button onClick={calculateTotal}>Calculat Total Amount</button>
    </>
  );
};
export default BillCalculator;
