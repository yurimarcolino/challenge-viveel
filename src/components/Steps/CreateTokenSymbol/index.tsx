import { useForm, UseFormReturn } from "react-hook-form";
import { useStepContext } from "../../../context/StepContext";
import { HeaderStyled } from "../../StepTitle";
import { InputContainer } from "../styles";
import { resolver, TokenSymbolFormShape } from "./schema";

export function CreateTokenSymbol() {
  const { handleCreateToken, handleNextStep } = useStepContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TokenSymbolFormShape>({
    mode: "onSubmit",
    resolver,
    defaultValues: {
      tokenSymbol: {
        name: "",
      },
    },
  });

  function handleCreateTokenName({ tokenSymbol }: TokenSymbolFormShape) {
    handleCreateToken("tokenSymbol", tokenSymbol.name);
    handleNextStep();
  }

  return (
    <>
      <HeaderStyled>Token Symbol</HeaderStyled>
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
    </>
  );
}
