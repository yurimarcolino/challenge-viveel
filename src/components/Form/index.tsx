import { useFormContext } from "../../hooks/useFormContext";
import { CustomStepper } from "../CustomStepper";
import { FormStepps } from "../FormStepps";
import { footerInstructions, title } from "./formBody";
import { FormContainer, FormContent } from "./styles";

export function Form() {
  const { currentStep } = useFormContext();

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
