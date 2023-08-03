import React from "react";

const About = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn
        ? "About us page content. You are logged in."
        : "About us page content. Please login to see more."}
    </div>
  );
};

export default About;
