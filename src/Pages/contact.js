import React from "react";

const Contact = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn
        ? "Contact us page content. You are logged in."
        : "Contact us page content. Please login to see more."}
    </div>
  );
};

export default Contact;
