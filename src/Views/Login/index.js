import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

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
    if (userData.username === "" && userData.password === "") {
      return;
    }
    if (
      userData.username.toLocaleLowerCase() === "admin" &&
      userData.password.toLocaleLowerCase() === "admin"
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard", { state: { username: userData.username } });
    }
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={userInputHandler}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={userInputHandler}
              autoComplete="current-password"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitUserDataHandler}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Login;
