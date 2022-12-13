import styled from "styled-components";

export const ResponsiveStyle = styled.div`
  width: 96%;

  max-width: 1250px;
  margin: auto;
  padding: 1.5rem 0rem;

  @media (max-width: 1400px) {
    width: 96%;

    max-width: 1100px;
  }
  @media (max-width: 1158px) {
    width: 96%;

    max-width: 858px;
  }

  @media (max-width: 916px) {
    width: 96%;

    max-width: 700px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: block;
    width: 85%;
    max-width: 550px;
  }
`;
