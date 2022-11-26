import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../Form";

import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasLabel?: boolean;
  label?: string;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}

export function Input({
  label,
  hasLabel,
  register,
  required,
  name,
  ...rest
}: InputProps) {
  return (
    <InputContainer>
      {hasLabel ? (
        <>
          <span>{label}</span>
          <input {...register(name, { required })} type="text" {...rest} />
        </>
      ) : (
        <input {...register(name, { required })} type="text" {...rest} />
      )}
    </InputContainer>
  );
}
