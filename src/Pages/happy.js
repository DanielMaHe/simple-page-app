import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
 

  h1 {
    font-family: 'sans serif';
    font-weight: 750;
    font-size: 65px;
    align-text: center;
  }
`;

const Happy = () => {
 

  return (
    <Container>
      <h1>YES HAPPY</h1>
      <h1>BIRTHDAY!</h1>
      <h1>🥳</h1>

    </Container>
  );
};

export default Happy;
