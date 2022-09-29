import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("isLoggedIn") === null ||
      localStorage.getItem("isLoggedIn") === ""
    ) {
      navigate("/login");
    }
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div
      style={{
        margin: "40px auto",
        width: "400px",
      }}
    >
      <h2>Welcome on Board</h2>
      <button button="button" onClick={logOutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
