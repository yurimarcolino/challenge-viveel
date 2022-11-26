import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useFormContext } from "../../hooks/useFormContext";
import { InputContainer } from "./styles";

const nextStepValidationSchema = zod.object({
  tokenName: zod
    .string()
    .min(2, { message: "Token must be at least 3 characters" })
    .max(10, { message: "Token must be at most 10 characters" }),
});

type nextStepFormData = zod.infer<typeof nextStepValidationSchema>;

export function CreateTokenName() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<nextStepFormData>({
    resolver: zodResolver(nextStepValidationSchema),
    defaultValues: {
      tokenName: "",
    },
  });
  const { handleCreateToken, handleNextStep } = useFormContext();

  function handleCreateTokenName({ tokenName }: nextStepFormData) {
    handleCreateToken("tokenName", tokenName);
    handleNextStep();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateTokenName)}>
      <InputContainer>
        <input {...register("tokenName", { required: true })} />
        {errors.tokenName?.message && <p>{errors.tokenName?.message}</p>}
      </InputContainer>

      <div className="ButtonContainer">
        <button type="submit">Next {">"}</button>
      </div>
    </form>
  );
}
