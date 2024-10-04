import styled from "styled-components";

export const MovieCard = styled.li`
  position: relative;
  aspect-ratio: 384/576;
  transition: 0.3s ease-in-out;

  a {
    width: 100%;
    height: 100%;
    display: flex;
  }

  img {
    object-position: center;
    object-fit: cover;
  }

  .card-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  &:hover {
    transform: scale(1.1);
    z-index: 9;
    -webkit-box-shadow: 1px 1px 300px 200px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 1px 1px 300px 200px rgba(0, 0, 0, 0.6);
    box-shadow: 1px 1px 300px 200px rgba(0, 0, 0, 0.6);
  }
`;
