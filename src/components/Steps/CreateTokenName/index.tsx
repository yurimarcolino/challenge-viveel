import { useForm } from "react-hook-form";
import { useStepContext } from "../../../context/StepContext";
import { HeaderStyled } from "../../StepTitle";
import { InputContainer } from "../styles";
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
    handleCreateToken("tokenName", tokenName.name);
    handleNextStep();
  }

  return (
    <>
      <HeaderStyled>Token Name</HeaderStyled>
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
    </>
  );
}
