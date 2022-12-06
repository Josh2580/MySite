import styled from "styled-components";
import { ResponsiveStyle } from "./Responsive.style";

export const Resumes = styled.div`
  background-color: white;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    padding-bottom: 1rem;
  }
`;

export const EduExp = styled.div`
  display: flex;
  padding-top: 1rem;
  gap: 2rem;
  h2 {
    padding-bottom: 0.5rem;
  }
  p {
    padding: 0.5rem 0rem;
  }
  @media (max-width: 916px) {
    flex-direction: column;
    gap: 0rem;
  }
`;

export const Education = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  padding-bottom: 1rem;
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
`;
