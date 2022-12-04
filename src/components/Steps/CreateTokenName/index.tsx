import { useForm } from "react-hook-form";
import { useStepContext } from "../../../context/StepContext";
import { StepFooterStyled } from "../../StepFooter";
import { HeaderStyled } from "../../StepTitle";
import {
  ButtonContainerStyled,
  ErrorStyled,
  InputContainerStyled,
} from "../styles";
import { resolver, TokenNameFormShape } from "./schema";

export function CreateTokenName() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TokenNameFormShape>({
    mode: "onSubmit",
    resolver,
    defaultValues: {
      tokenName: {
        name: "",
      },
    },
  });

  const { handleCreateToken, handleNextStep } = useStepContext();

  function handleCreateTokenName({ tokenName }: TokenNameFormShape) {
    console.log("blabla");
    handleCreateToken("tokenName", tokenName.name);
    handleNextStep();
  }

  return (
    <>
      <HeaderStyled>Token Name</HeaderStyled>

      <form onSubmit={handleSubmit(handleCreateTokenName)}>
        <InputContainerStyled>
          <input {...register("tokenName.name", { required: true })} />
          {errors.tokenName?.name?.message && (
            <ErrorStyled>{errors.tokenName?.name?.message}</ErrorStyled>
          )}
        </InputContainerStyled>

        <ButtonContainerStyled>
          <button type="submit">Next {">"}</button>
        </ButtonContainerStyled>
      </form>

      <StepFooterStyled>
        The token name represents how your is going to be known
      </StepFooterStyled>
    </>
  );
}
