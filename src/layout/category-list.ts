import styled from "styled-components";

export const CategoryList = styled.ul`
  display: flex;
  gap: 4dvw;
  position: relative;
  z-index: 9;

  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
