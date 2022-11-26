import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useFormContext } from "../../hooks/useFormContext";
import { InputContainer } from "./styles";
import { Button } from "../Button";

const nextStepValidationSchema = zod.object({
  tokenDistributionName: zod
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(10, { message: "Name must be at most 10 characters" }),
  tokenDistributionAmount: zod
    .string()
    .min(1, { message: "Amount must be at least 1 characters" })
    .max(10, { message: "Amount must be at most 10 characters" }),
});

type nextStepFormData = zod.infer<typeof nextStepValidationSchema>;

export function CreateTokenDistribution() {
  const { handleNextStep, handleCreateToken } = useFormContext();

  //TODO : ADD MORE FUNCTION
  function addInputs() {
    alert("vc conseguiu");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<nextStepFormData>({
    resolver: zodResolver(nextStepValidationSchema),
    defaultValues: {
      tokenDistributionName: "",
      tokenDistributionAmount: "",
    },
  });

  function handleCreateTokenDistribution({
    tokenDistributionName,
    tokenDistributionAmount,
  }: nextStepFormData) {
    handleCreateToken("tokenDistributionName", tokenDistributionName);
    handleCreateToken("tokenDistributionAmount", tokenDistributionAmount);
    handleNextStep();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateTokenDistribution)}>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexFlow: "nowrap",
        }}
      >
        <InputContainer>
          <input {...register("tokenDistributionName", { required: true })} />
          {errors.tokenDistributionName?.message && (
            <p>{errors.tokenDistributionName?.message}</p>
          )}
        </InputContainer>

        <InputContainer>
          <input {...register("tokenDistributionAmount", { required: true })} />
          {errors.tokenDistributionAmount?.message && (
            <p>{errors.tokenDistributionAmount?.message}</p>
          )}
        </InputContainer>
      </div>
      <Button onClick={addInputs} />

      <div className="ButtonContainer">
        <button type="submit">Next {">"}</button>
      </div>
    </form>
  );
}
