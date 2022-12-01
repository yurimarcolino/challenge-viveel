import { useStepContext } from "../../context/StepContext";
import { CustomStepper } from "../CustomStepper";
import { StepContent, steps } from "./StepContent";
import { TokenResume } from "../Steps/TokenResume";
import { footerInstructions } from "./StepConfig";
import { FormContainer, FormContent } from "./styles";

export function Steps() {
  const { currentStep, hasFinished } = useStepContext();

  return (
    <>
      {hasFinished ? (
        <TokenResume />
      ) : (
        <FormContainer>
          <CustomStepper
            steps={steps}
            currentStep={currentStep}
            style={{ width: "100%", padding: "5rem 0" }}
          />

          <FormContent>
            <StepContent />

            <div className="FooterContainer">
              <footer>{footerInstructions[currentStep]}</footer>
            </div>
          </FormContent>
        </FormContainer>
      )}
    </>
  );
}
