import { useFieldArray, UseFormReturn } from "react-hook-form";
import { InputContainer } from "../styles";
import { Button } from "../../Button";
import {
  emptyTokenDistribution,
  TokenDistributionFormShape,
} from "./tokenDistributionForm";
import { useFormContext } from "../../../hooks/useFormContext";

export interface Props {
  form: UseFormReturn<TokenDistributionFormShape, any>;
}

export function CreateTokenDistribution({
  form: {
    handleSubmit,
    control,
    register,
    formState: { errors },
  },
}: Props) {
  const { fields, append } = useFieldArray({
    control,
    name: "tokenDistribution",
  });

  const { handleNextStep, handleCreateToken } = useFormContext();

  function AppendInputs() {
    append(emptyTokenDistribution);
  }

  function handleCreateTokenDistribution({ tokenDistribution }: any) {
    handleCreateToken("tokenDistribution", tokenDistribution);
    handleNextStep();
  }

  return (
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
  );
}
