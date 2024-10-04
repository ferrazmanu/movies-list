import { Wrapper } from "./styles";

interface Props {
  onClick: () => void;
  text: string;
  styleType: "regular" | "colorful";
  disabled?: boolean;
}

export const Button = ({ onClick, text, styleType, disabled }: Props) => {
  return (
    <Wrapper onClick={onClick} styleType={styleType} disabled={disabled}>
      {text}
    </Wrapper>
  );
};
