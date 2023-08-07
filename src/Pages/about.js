import styled from "@emotion/styled";
import React from "react";


const Container = styled.div`
  text-align: center;
  font-size: 50px;
`;

const About = ({ isLoggedIn }) => {
  return (
    <Container>
      {isLoggedIn
        ? "About: You are logged in."
        : "About"}
    </Container>
  );
};

export default About;
