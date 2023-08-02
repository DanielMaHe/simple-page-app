import React from "react";

const Home = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn
        ? "Welcome to the Home page! You are logged in."
        : "Welcome to the Home page! Please login to see more."}
    </div>
  );
};

export default Home;
