import styled from "styled-components";

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  }
`;
