import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({ username: "", password: "" });

  const formDataHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const clearData = () => {
    setUserData({ username: "", password: "" });
  };
  const submitFormHandler = () => {
    if (userData.username == "" && userData.password == "") {
      return;
    }
    if (
      userData.username.toLocaleLowerCase() === "admin" &&
      userData.password.toLocaleLowerCase() === "admin"
    ) {
      if (typeof localStorage !== undefined) {
        try {
          localStorage.setItem("isLoggedIn", true);
        } catch (e) {
          console.log(e);
        }
      }
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
          onChange={formDataHandler}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formDataHandler}
        />
        <br />
        <br />
        <button onClick={submitFormHandler}>Login</button>
      </div>
    </>
  );
};
export default Login;
