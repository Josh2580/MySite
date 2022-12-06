import styled from "styled-components";
import { ResponsiveStyle } from "./Responsive.style";

export const Service = styled.div`
  width: 100vw;
  background-color: white;
  padding-top: 65px;
`;

export const ServiceCard = styled(ResponsiveStyle)`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
  text-align: center;
  p {
    padding: 1rem 0rem;
  }
`;

export const AllCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(273px, 1fr));
  width: 100%;
  gap: 14px;
`;

export const EachCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  box-shadow: 0.5px 0.5px 5px 3px #e8e8e8;
  margin: 2px;
  min-height: 15rem;
  &:hover {
    transition: 1s ease-out;
    background-color: #1890e0;
    h3,
    p {
      color: #d8ecfa;
    }
  }
  @media (max-width: 769px) {
    height: fit-content;
  }
`;

export const Icons = styled.div`
  flex: 50%;
  width: 100%;
  height: 100%;
  img {
    overflow: hidden;
    height: 90%;
    width: 100%;
    padding: 1rem;
    border-radius: 3px;
    /* @media (max-width: 769px) {
      height: 250px;
    }
   */
  }
`;

export const Details = styled.div`
  flex: 50%;
  padding-top: 1rem;
  height: fit-content;
`;
