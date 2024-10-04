import styled from "styled-components";

interface Props {
  image: string;
}

export const FixedBanner = styled.div<Props>`
  min-height: 40dvh;
  background-image: url(${(props) => props.image});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
`;
