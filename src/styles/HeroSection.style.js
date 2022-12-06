import styled from "styled-components";
import { ResponsiveStyle } from "./Responsive.style";

export const HeroRes = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  h1,
  p {
    color: white;
  }

  #HeroImg {
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
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: auto;
  }
`;

export const HeroLayout = styled(ResponsiveStyle)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
  }
`;
