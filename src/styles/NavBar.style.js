import styled from "styled-components";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { ResponsiveStyle } from "./Responsive.style";

export const NavbarStyle = styled.div`
  background-color: #4d4d4d;
  min-height: 60px;
  position: fixed;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
  padding: 0;
  margin: 0px;
`;

export const NavbarContainer = styled(ResponsiveStyle)``;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0px;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: flex-end;
  margin: 0px;
`;

export const NavbarLinkContainer = styled.div``;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  text-decoration: none;
  padding: 0px 10px;
  height: 110px;
  &:hover {
    color: #1890e0;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  display: block;
  width: fit-content;
  &:hover {
    color: #1890e0;
  }

  @media (min-width: 770px) {
    display: none;
  }
`;

export const Logo = styled.img`
  margin: 0px;
  width: 40px;
  height: auto;
  padding: 0px;
`;

export const OpenLinksButton = styled.button`
  width: 50px;
  height: fit-content;
  overflow: hidden;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  font-weight: lighter;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  &:hover {
    background-color: none;
  }
  @media (min-width: 770px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div``;
