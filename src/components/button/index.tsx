import { Wrapper } from "./styles";

interface Props {
  onClick: () => void;
  text: string;
  styleType: "regular" | "colorful";
}

export const Button = ({ onClick, text, styleType }: Props) => {
  return (
    <Wrapper onClick={onClick} styleType={styleType}>
      {text}
    </Wrapper>
  );
};
