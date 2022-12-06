import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import Values from "../components/Values";
import About from "../components/About";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Resume />
      <Values />
      <Services />
      <ContactForm />
    </>
  );
};

export default HomePage;
