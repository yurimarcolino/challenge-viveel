import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";
import { InputContainer } from "../styles";
import { Button } from "../../Button";
import { TokenDistributionFormShape } from "./schema";
import { useStepContext } from "../../../context/StepContext";
import { resolver } from "./schema";
import { HeaderStyled } from "../../StepTitle";
import { StepFooterStyled } from "../../StepFooter";

export function CreateTokenDistribution() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TokenDistributionFormShape>({
    mode: "onSubmit",
    resolver,
    defaultValues: {
      tokenDistribution: [
        {
          name: "",
          amount: 0,
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "tokenDistribution",
  });

  const { handleNextStep, handleCreateToken } = useStepContext();

  function AppendInputs() {
    append({
      name: "",
      amount: 0,
    });
  }

  function handleCreateTokenDistribution({ tokenDistribution }: any) {
    handleCreateToken("tokenDistribution", tokenDistribution);
    handleNextStep();
  }

  return (
    <>
      <HeaderStyled>Token Distribution</HeaderStyled>
      <form onSubmit={handleSubmit(handleCreateTokenDistribution)}>
        {fields.map((field, index) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "2rem",
                flexFlow: "nowrap",
              }}
              key={field.id}
            >
              <InputContainer>
                <span>Name</span>
                <input {...register(`tokenDistribution.${index}.name`, {})} />
                {errors.tokenDistribution?.[index]?.name?.message && (
                  <p>{errors.tokenDistribution?.[index]?.name?.message}</p>
                )}
              </InputContainer>

              <InputContainer>
                <span>Amount</span>
                <input
                  type="number"
                  {...register(`tokenDistribution.${index}.amount`, {
                    valueAsNumber: true,
                  })}
                />
                {errors.tokenDistribution?.[index]?.amount?.message && (
                  <p>{errors.tokenDistribution?.[index]?.amount?.message}</p>
                )}
              </InputContainer>
            </div>
          );
        })}
        <Button onClick={AppendInputs} />
        <div className="ButtonContainer">
          <button type="submit">Next {">"}</button>
        </div>
      </form>
      <StepFooterStyled>
        Token distribution relates to how you share your assets between
        different players, such as your developmen team, marketing and
        community. In this slide you must add as much players as you like and
        the amount of tokens each one is entiteled with.
      </StepFooterStyled>
    </>
  );
}
