import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import React from "react";

import Home from "../Pages/home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
import Login from "../Pages/login";
import { useAuth } from "../Context/authContext";
import Happy from "../Pages/happy";
import NoHappy from "../Pages/noHappy";

const SPA = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/contact" element={<Contact isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/happy" element={<Happy />} />
        <Route path="/noHappy" element={<NoHappy />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default SPA;
