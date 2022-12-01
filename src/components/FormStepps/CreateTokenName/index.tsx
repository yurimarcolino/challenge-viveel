import { UseFormReturn } from "react-hook-form";
import { useFormContext } from "../../../hooks/useFormContext";
import { InputContainer } from "../styles";
import { TokenNameFormShape } from "./tokenNameForm";

export interface Props {
  form: UseFormReturn<TokenNameFormShape, any>;
}

export function CreateTokenName({
  form: {
    handleSubmit,
    register,
    formState: { errors },
  },
}: Props) {
  const { handleCreateToken, handleNextStep } = useFormContext();

  function handleCreateTokenName({ tokenName }: TokenNameFormShape) {
    handleCreateToken("tokenName", tokenName.name);
    handleNextStep();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateTokenName)}>
      <InputContainer>
        <input {...register("tokenName.name", { required: true })} />
        {errors.tokenName?.name?.message && (
          <p>{errors.tokenName?.name?.message}</p>
        )}
      </InputContainer>
      <div className="ButtonContainer">
        <button type="submit">Next {">"}</button>
      </div>
    </form>
  );
}
