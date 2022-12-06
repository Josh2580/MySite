import React from "react";
import AgreementImg from "../img/agreement.jpg";
import BackendImg from "../img/Backend.jpeg";
import FrontendImg from "../img/Frontend.jpeg";
import WebImg from "../img/web.jpeg";
import ApiImg from "../img/api.jpeg";
import ResponsiveImg from "../img/Responsive.png";

import {
  Service,
  ServiceCard,
  AllCards,
  EachCard,
  Icons,
  Details,
} from "../styles/Services.style";

const Services = () => {
  return (
    <Service id="services">
      <ServiceCard>
        <h2>Services</h2>
        <p>
          I understand the objectives of being Capable to reder the following
          services and features, in analysing information accurately, to problem
          solving.
        </p>
        <AllCards>
          <EachCard>
            <Icons>
              <img src={FrontendImg} alt="Frontend Images" />
            </Icons>
            <Details>
              <h3>Front-End Development</h3>
              <p>
                With the help of HTML, CSS, JavaScript with other frameworks and
                libraris, I am able to build interactive User Interface
              </p>
            </Details>
          </EachCard>
          <EachCard>
            <Icons>
              <img src={BackendImg} alt="Backend Images" />
            </Icons>
            <Details>
              <h3>Back-End Development</h3>
              <p>
                I am able to build a robust backend architecture to to fetch
                data from the server.
              </p>
            </Details>
          </EachCard>
          <EachCard>
            <Icons>
              <img src={ResponsiveImg} alt="Responsive Images" />
            </Icons>
            <Details>
              <h3>Responsiveness</h3>
              <p>
                Building a web app with a presentable User Interface on all
                devices, ranging from android, tablet, Desktop and more
              </p>
            </Details>
          </EachCard>
          <EachCard>
            <Icons>
              <img src={AgreementImg} alt="Agreement Images" />
            </Icons>
            <Details>
              <h3>Meet All Consumer Requirement</h3>
              <p>
                Aim at building a web app that meet customers requirement and
                keep them engage.
              </p>
            </Details>
          </EachCard>
          <EachCard>
            <Icons>
              <img src={ApiImg} alt="API Images" />
            </Icons>
            <Details>
              <h3>API and Database Management</h3>
              <p>
                Building a web API which fetches data from server, management of
                data in the database and many more.
              </p>
            </Details>
          </EachCard>
          <EachCard>
            <Icons>
              <img src={WebImg} alt="Web Images" />
            </Icons>
            <Details>
              <h3>Web Hosting</h3>
              <p>
                It's my responsibility to host your site with prefered domain
              </p>
            </Details>
          </EachCard>
        </AllCards>
      </ServiceCard>
    </Service>
  );
};

export default Services;
