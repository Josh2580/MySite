import styled from "styled-components";

import { ResponsiveStyle } from "./Responsive.style";

export const About = styled.div`
  width: 100vw;
  background-color: #ededed;

  #ValueImg {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: auto;
    filter: brightness(50%);

    @media (max-width: 700px) {
      top: 4.9rem;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

export const AboutValue = styled(ResponsiveStyle)`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
  }
`;

export const AllCardsValue = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
`;

export const EachCardValue = styled.div`
  display: flex;
  min-height: 20vh;
  padding: 2rem 2rem 0rem 0rem;
  gap: 0.6rem;
`;

export const IconsValue = styled.div`
  width: 45px;
  img {
    border: 2px dotted #1890e0;
    overflow: hidden;
    height: 40px;
    width: 40px;
    padding: 5px;
    margin: 0px;
    border-radius: 50%;
    color: white;
    /* background-color: #1890e0; */
  }
`;

export const Details = styled.div`
  flex: 90%;
`;
