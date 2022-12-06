import React from "react";
import ValueImg from "../img/SiteLogo3.png";
import {
  About,
  AboutValue,
  AllCardsValue,
  EachCardValue,
  IconsValue,
  Details,
} from "../styles/Values.style";

const Values = () => {
  return (
    <About>
      <AboutValue>
        <h2>Values</h2>
        <AllCardsValue>
          <EachCardValue>
            <IconsValue>
              <img src={ValueImg} alt="icon" />
            </IconsValue>
            <Details>
              <h3>Integrity</h3>
              <p>
                Honesty in delivery of my services to ensure credibility in
                building relationship and trust.
              </p>
            </Details>
          </EachCardValue>
          <EachCardValue>
            <IconsValue>
              <img src={ValueImg} alt="icon" />
            </IconsValue>
            <Details>
              <h3>Transparent</h3>
              <p>
                What we agree is established. We don't alter our deals, unless
                on a legal agreement.
              </p>
            </Details>
          </EachCardValue>
          <EachCardValue>
            <IconsValue>
              <img src={ValueImg} alt="icon" />
            </IconsValue>
            <Details>
              <h3>Understanding</h3>
              <p>
                I deliberately listen to my prospect and understand their
                request in building a website.
              </p>
            </Details>
          </EachCardValue>
          <EachCardValue>
            <IconsValue>
              <img src={ValueImg} alt="icon" />
            </IconsValue>
            <Details>
              <h3>Creativity</h3>
              <p>
                Bent to acquiring and implemention of new ideas and
                inspirations.
              </p>
            </Details>
          </EachCardValue>
          <EachCardValue>
            <IconsValue>
              <img src={ValueImg} alt="icon" />
            </IconsValue>
            <Details>
              <h3>Team-Work</h3>
              <p>
                Ability to work with a team of other developers, content
                writers, UI/UX designers and more in acheiving a common goal.
              </p>
            </Details>
          </EachCardValue>
          <EachCardValue>
            <IconsValue>
              <img src={ValueImg} alt="icon" />
            </IconsValue>
            <Details>
              <h3>Learning</h3>
              <p>
                I'm bent to ever learning and developing myself in what I offer.
              </p>
            </Details>
          </EachCardValue>
        </AllCardsValue>
      </AboutValue>
    </About>
  );
};

export default Values;
