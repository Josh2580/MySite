import React from "react";
import styled from "styled-components";
import HeroImg from "../img/hero-bg.jpg";
import { HeroRes, HeroLayout } from "../styles/HeroSection.style";
import { Button } from "../styles/Button.style";

const HeroSection = () => {
  return (
    <HeroRes id="">
      <img id="HeroImg" src={HeroImg} alt="" />

      <HeroLayout>
        <h1>Welcome</h1>

        <p>
          I build a website that makes you easily accessible, unique and
          connected to your potential clients.
        </p>

        <Button>Get Started</Button>
      </HeroLayout>
    </HeroRes>
  );
};

export default HeroSection;
