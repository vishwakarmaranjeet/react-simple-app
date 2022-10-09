import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Dashboard from "./Views/Dashboard";
import PageNotFound from "./Views/PageNotFound";
import Login from "./Views/Login";

const App = () => {
  function isEnableGoogleGTM() {
    if (
      window.location.href.indexOf("localhost") > -1 ||
      window.location.href.indexOf("jpmorgan") > -1
    ) {
      return true;
    }
    return false;
  }

  let urlCheck = useCallback(() => {
    return isEnableGoogleGTM();
  }, [isEnableGoogleGTM]);

  useEffect(() => {
    if (urlCheck()) {
      console.warn("executed");
    } else {
      console.error("failed");
    }
  }, []);

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
