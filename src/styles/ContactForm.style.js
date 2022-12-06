import styled from "styled-components";
import { ResponsiveStyle } from "./Responsive.style";

export const Contact = styled.div`
  padding-top: 80px;
  h2 {
    text-align: center;
  }
  width: 100vw;
  background-color: white;
`;

export const ContactFormCard = styled(ResponsiveStyle)`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const ContactCardLeft = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  flex: 50%;
`;

export const ContactCardRight = styled.div`
  flex: 50%;
  background-color: #f6f6ff;
`;

export const MeetUsCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background-color: #f6f6ff;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
