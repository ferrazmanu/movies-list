import { glowingFrames } from "@/styles/global";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  text-align: center;

  span {
    font-family: "Dancing Script", cursive;
    font-size: 66px;
  }

  @media only screen and (max-width: 900px) {
    span {
      font-size: 30px;
    }
  }
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  background-size: 400%;
  animation: ${glowingFrames} 20s linear infinite;
  filter: blur(5px);
`;
