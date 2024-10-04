import styled from "styled-components";

interface Props {
  backgroundImage: string;
  pageType: "home" | "details";
}

export const Header = styled.header<Props>`
  display: flex;
  gap: 30px;
  padding: 30px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: ${(props) => (props.pageType === "home" ? "70dvh" : "40dvh")};
  background-image: url(${(props) => props.backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    inset: 0;
    width: 100%;
    height: inherit;
  }

  h1,
  h2,
  button {
    position: relative;
    z-index: 9;
    color: #eeeeee;
  }
`;
