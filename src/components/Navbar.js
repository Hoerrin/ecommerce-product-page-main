import React from "react";
import styled from "styled-components";
import LogoImg from "../images/logo.svg";
import AvatarImg from "../images/image-avatar.png";
import Cart from "./Cart";

const NavbarContainer = styled.nav`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  border-bottom: 1px solid ${(props) => props.theme.lightGrayishBlue};

  @media only screen and (max-width: 1024px) {
    height: 4rem;
    padding: 0 1.5rem;
  }
`;

const Logo = styled.img``;

const CenterButtonsList = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  width: 100%;
  margin: 0 3rem;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Button = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  height: 100%;
  margin: 0 1rem;
  color: ${(props) => props.theme.darkGrayishBlue};
  transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover {
    color: ${(props) => props.theme.veryDarkBlue};
  }
  &::after {
    content: "";
    position: absolute;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    width: 100%;
    background-color: ${(props) => props.theme.orange};
    transform: scaleX(0);
    transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Avatar = styled.img`
  height: 45%;
  width: auto;
  margin-left: 2rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    outline: 2px solid ${(props) => props.theme.orange};
  }
`;

const RightButtonsContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 100%;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={LogoImg} alt="Sneakers company logo" />
      <CenterButtonsList>
        <Button>Collections</Button>
        <Button>Men</Button>
        <Button>Women</Button>
        <Button>About</Button>
        <Button>Contact</Button>
      </CenterButtonsList>
      <RightButtonsContainer>
        <Cart />
        <Avatar src={AvatarImg} alt="User avatar" />
      </RightButtonsContainer>
    </NavbarContainer>
  );
}

export default Navbar;
