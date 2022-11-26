import { useFormContext } from "../../hooks/useFormContext";
import { CustomStepper } from "../CustomStepper";
import { FormStepps } from "../FormStepps";
import { FormContainer, FormContent } from "./styles";

export interface IFormValues {
  tokenName: string;
  tokenSymbol: string;
}

export function Form() {
  const { footerInstructions, currentStep, handleNextStep, title, lastStep } =
    useFormContext();

  return (
    <FormContainer>
      <CustomStepper
        currentStep={currentStep}
        style={{ width: "100%", padding: "5rem 0" }}
      />
      <FormContent>
        <header>
          <h2>{title[currentStep]}</h2>
        </header>

        <FormStepps />

        <div className="FooterContainer">
          <footer>{footerInstructions[currentStep]}</footer>
        </div>
      </FormContent>
    </FormContainer>
  );
}
