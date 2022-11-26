import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasSpan?: boolean;
  label?: string;
}

export function Input({ label, hasSpan, ...rest }: InputProps) {
  return (
    <InputContainer>
      {hasSpan ? (
        <>
          <span>{label}</span>
          <input type="text" {...rest} />
        </>
      ) : (
        <input type="text" {...rest} />
      )}
    </InputContainer>
  );
}
