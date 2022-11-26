import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...rest }: ButtonProps) {
  return (
    <ButtonContainer>
      <button {...rest}>Add more</button>
    </ButtonContainer>
  );
}
