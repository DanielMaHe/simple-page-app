import React from "react";
import { Link } from "react-router-dom";
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
  aparence: none;
  display: flex;
  gap: 10px;
  align-items: space-between;
`;
const Navstyled = styled.nav`
  width: 5rem;
  height: 2.5rem;
`;
const NavbarLink = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Navstyled>
      <UlSyled>
        <LinkStyled to="/">Home</LinkStyled>

        <LinkStyled to="/about">About</LinkStyled>

        <LinkStyled to="/contact">Contact</LinkStyled>

        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <LinkStyled to="/login">Login</LinkStyled>
        )}
      </UlSyled>
    </Navstyled>
  );
};

export default NavbarLink;
