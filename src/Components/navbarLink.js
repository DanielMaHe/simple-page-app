import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import styled from "@emotion/styled";

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: gray;

  :hover {
    color: black;
  }
  :focus {
    color: orange;
  }
`;

const UlSyled = styled.ul`
  appearance: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 0;
  padding: 20px;

  button {
    background: cornflowerblue;
    border: none;
    color: white;
  }
`;
const Navstyled = styled.nav`
  width: 17rem;
  height: 2.5rem;
  margin: auto;
  font-size: 20px;
`;
const NavbarLink = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate(`/home`);
  }

  return (
    <Navstyled>
      <UlSyled>
        <LinkStyled to="/">Home</LinkStyled>

        <LinkStyled to="/about">About</LinkStyled>

        <LinkStyled to="/contact">Contact</LinkStyled>

        {isLoggedIn ? (
          <button onClick={handleClick}>Bye</button>
        ) : (
          <LinkStyled to="/login">BIRTHDAY?</LinkStyled>
        )}
      </UlSyled>
    </Navstyled>
  );
};

export default NavbarLink;
