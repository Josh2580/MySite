import styled from "styled-components";
import { ResponsiveStyle } from "./Responsive.style";

export const SkillValue = styled.div`
  width: 100vw;
  background-color: #ededed;
`;

export const SkillResp = styled(ResponsiveStyle)``;

export const AllCards = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  justify-content: space-between;
  @media (max-width: 769px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 0.6rem 0rem;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const EachCard = styled.div`
  padding: 0rem 0.5rem;
  /* box-shadow: 0.5px 0.5px 5px 3px #bdd7ef; */

  padding: 0;
`;
