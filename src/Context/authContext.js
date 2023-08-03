import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
