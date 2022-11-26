import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useFormContext } from "../../hooks/useFormContext";
import { InputContainer } from "./styles";

const nextStepValidationSchema = zod.object({
  tokenSymbol: zod
    .string()
    .min(3, { message: "Token symbol must be at least 3 characters" })
    .max(5, { message: "Token symbol must be at most 5 characters" }),
});

type nextStepFormData = zod.infer<typeof nextStepValidationSchema>;

export function CreateTokenSymbol() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<nextStepFormData>({
    resolver: zodResolver(nextStepValidationSchema),
    defaultValues: {
      tokenSymbol: "",
    },
  });
  const { handleCreateToken, handleNextStep } = useFormContext();

  function handleCreateTokenName({ tokenSymbol }: nextStepFormData) {
    handleCreateToken("tokenSymbol", tokenSymbol);
    handleNextStep();
  }

  return (
    <form onSubmit={handleSubmit(handleCreateTokenName)}>
      <InputContainer>
        <input {...register("tokenSymbol", { required: true })} />
        {errors.tokenSymbol?.message && <p>{errors.tokenSymbol?.message}</p>}
      </InputContainer>

      <div className="ButtonContainer">
        <button type="submit">Next {">"}</button>
      </div>
    </form>
  );
}
