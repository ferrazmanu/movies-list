import styled from "styled-components";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10dvh 10dvw;

  h3 {
    text-align: center;
    margin-bottom: 15px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  p {
    font-size: 18px;
  }

  @media only screen and (max-width: 500px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
