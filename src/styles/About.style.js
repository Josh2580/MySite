import styled from "styled-components";
import { ResponsiveStyle } from "./Responsive.style";

export const AboutCard = styled.div`
  width: 100vw;
  background-color: white;
  padding-top: 65px;
`;

export const AboutResponsive = styled(ResponsiveStyle)`
  h2 {
    text-align: center;
    padding-bottom: 1rem;
  }
`;

export const CardStyle = styled.div`
  padding: 2rem 1rem 2rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(273px, 1fr));
  gap: 1.5rem;
  @media (max-width: 916px) {
    display: block;
  }
`;

export const ImageCard = styled.div`
  img {
    width: 100%;
    height: 80vh;
    object-fit: contain;
    @media (max-width: 916px) {
      background-color: #efefef;
    }
  }
  padding-bottom: 1rem;
`;

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 1rem; */
  p {
    padding-bottom: 1rem;
  }
`;

export const ListCard = styled.div`
  display: flex;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    width: 100%;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0px;
    }
  }

  li {
    flex-direction: column;
    padding: 8px 0px;
    justify-content: space-between;
  }
`;
