import { ButtonHTMLAttributes } from "react";
import { ButtonContainerStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...rest }: ButtonProps) {
  return (
    <ButtonContainerStyled>
      <button {...rest}>Add more</button>
    </ButtonContainerStyled>
  );
}
