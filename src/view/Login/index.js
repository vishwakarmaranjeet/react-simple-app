import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ username: "", password: "" });

  const userInputHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const submitUserDataHandler = () => {
    if (userData.username == "" && userData.password == "") {
      return;
    }
    if (
      userData.username.toLocaleLowerCase() === "admin" &&
      userData.password.toLocaleLowerCase() === "admin"
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div
        style={{
          margin: "40px auto",
          width: "400px",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={userInputHandler}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={userInputHandler}
        />
        <br />
        <br />
        <button onClick={submitUserDataHandler}>Login</button>
      </div>
    </>
  );
};
export default Login;
