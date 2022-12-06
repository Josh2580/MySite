import styled from "styled-components";

export const Button = styled.button`
  padding: 0.4rem 2.2rem;
  font-size: 1.1rem;
  font-family: Tahoma, sans-serif;
  color: ${(props) => props.C || "white"};
  background: ${(props) => props.BG || "transparent"};
  border-radius: 5px;
  border-color:${(props) => props.BC || "white"}};
  box-shadow: none;
  transition: all ease 0.5s;
  width: fit-content;
  &:hover {
    background-color: ${(props) => props.HBGC || "#1890e0"};
    color: ${(props) => props.HC || "white"};
    border-color:  ${(props) => props.HBC || "#1890e0"};

  }
`;
