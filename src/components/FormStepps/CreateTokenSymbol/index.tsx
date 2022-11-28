import { UseFormReturn } from "react-hook-form";
import { useFormContext } from "../../../hooks/useFormContext";
import { InputContainer } from "../styles";
import { TokenSymbolFormShape } from "./tokenSymbolForm";

export interface Props {
  form: UseFormReturn<TokenSymbolFormShape, any>;
}

export function CreateTokenSymbol({
  form: {
    handleSubmit,
    register,
    formState: { errors },
  },
}: Props) {
  const { handleCreateToken, handleNextStep } = useFormContext();

  function handleCreateTokenName({ tokenSymbol }: TokenSymbolFormShape) {
    handleCreateToken("tokenSymbol", tokenSymbol.name);
    handleNextStep();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateTokenName)}>
      <InputContainer>
        <input {...register("tokenSymbol.name", { required: true })} />
        {errors.tokenSymbol?.name?.message && (
          <p>{errors.tokenSymbol?.name?.message}</p>
        )}
      </InputContainer>
      <div className="ButtonContainer">
        <button type="submit">Next {">"}</button>
      </div>
    </form>
  );
}
