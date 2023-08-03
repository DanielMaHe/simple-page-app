import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    navigate(`/home`);
    login();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button type="submit">Login</button>
      )}
    </form>
  );
};

export default Login;
