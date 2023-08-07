import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
  });

  function login() {
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = {
    login,
    logout,
    isLoggedIn,
    formData,
    setFormData,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
