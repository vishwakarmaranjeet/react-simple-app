import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import Dashboard from "./view/Dashboard";
import PageNotFound from "./view/PageNotFound";
import Login from "./view/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
