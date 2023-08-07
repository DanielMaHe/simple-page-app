import React from "react";
import styled from "@emotion/styled";


  const Container = styled.div`
  text-align: center;
  font-size: 50px;
  `;
  
    const Home = ({ isLoggedIn }) => {
    return (
      <Container>
        {isLoggedIn
          ? "Home: You are logged in."
          : "Home"}
      </Container>
    );
  };
  
  

export default Home;
