import styled from "@emotion/styled";
import React from "react";


const Container = styled.div`
  text-align: center;
  font-size: 50px;
`;

const Contact = ({ isLoggedIn }) => {
  return (
    <Container>
      {isLoggedIn
        ? "Contact: You are logged in."
        : "Contact"}
    </Container>
  );
};


export default Contact;
