import React from "react";
import styled from "styled-components";
import AboutPix2 from "../img/myPix2.png";

import {
  AboutResponsive,
  AboutCard,
  CardStyle,
  ImageCard,
  DetailsCard,
  ListCard,
} from "../styles/About.style";

const About = () => {
  return (
    <AboutCard id="about">
      <AboutResponsive>
        <h2>About</h2>
        <CardStyle>
          <ImageCard>
            <img src={AboutPix2} alt="My Pix" />
          </ImageCard>
          <DetailsCard>
            <p id="FirstP">
              In this present Century, there is a system that carries all the
              information about your Products and Services. I dont expect you to
              do more talking, about your business, I'll rather be enlightened
              about your sevices by locating you on your website.
            </p>
            <p>
              While there's no facial interaction between you and the people, a
              good active website with active working server finds its way to
              the globe.
            </p>
            <p>
              In other words, you can connect with the world while you're busy
              with other schedules.
            </p>
            <p>That's where I come in.</p>
            <p>
              Hey! I am Joshua Chuks, known as JayCee. As a full stack
              developer, it is in my wish to bring to you the best of my
              services, in satisfaction of the desired goal. Get in touch and
              lets achieve a common goal
            </p>
          </DetailsCard>
        </CardStyle>
      </AboutResponsive>
    </AboutCard>
  );
};

export default About;
