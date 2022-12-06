import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../img/Logo.png";
import HomePage from "../pages/HomePage";
import {
  NavbarStyle,
  NavbarContainer,
  RightContainer,
  LeftContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/NavBar.style";
import { AboutCard } from "../styles/About.style";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarStyle>
      <NavbarContainer NavbarProp={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <Logo src={LogoImg} alt="Logo" onClick="/#"></Logo>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/#" smooth>
                Home
              </NavbarLink>
              <NavbarLink to="/#about" smooth>
                About
              </NavbarLink>
              <NavbarLink to="/#services" smooth>
                Services
              </NavbarLink>
              <NavbarLink to="/#contact" smooth>
                Contact
              </NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            <NavbarLinkExtended to="/#" smooth>
              Home
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/#about" smooth>
              About
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/#services" smooth>
              Services
            </NavbarLinkExtended>
            <NavbarLinkExtended to="/#contact" smooth>
              Contact
            </NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </NavbarStyle>
  );
};

export default NavBar;
