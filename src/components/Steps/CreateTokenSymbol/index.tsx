import { useForm, UseFormReturn } from "react-hook-form";
import { useStepContext } from "../../../context/StepContext";
import { StepFooterStyled } from "../../StepFooter";
import { HeaderStyled } from "../../StepTitle";
import {
  ButtonContainerStyled,
  ErrorStyled,
  InputContainerStyled,
} from "../styles";
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
        <InputContainerStyled>
          <input {...register("tokenSymbol.name", { required: true })} />
          {errors.tokenSymbol?.name?.message && (
            <ErrorStyled>{errors.tokenSymbol?.name?.message}</ErrorStyled>
          )}
        </InputContainerStyled>
        <ButtonContainerStyled>
          <button type="submit">Next {">"}</button>
        </ButtonContainerStyled>
      </form>
      <StepFooterStyled>
        The token Symbol is a short name to your asset, usually it is about 3 to
        5 capital letters, as USD stands for US Dollar
      </StepFooterStyled>
    </>
  );
}
