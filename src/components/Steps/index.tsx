import { useStepContext } from "../../context/StepContext";
import { CustomStepper } from "../CustomStepper";
import { StepContent, steps } from "./StepContent";
import { TokenResume } from "../Steps/TokenResume";
import { StepContainerStyled, StepContentStyled } from "./styles";

export function Steps() {
  const { currentStep, hasFinished } = useStepContext();

  return (
    <>
      {hasFinished ? (
        <TokenResume />
      ) : (
        <StepContainerStyled>
          <CustomStepper
            steps={steps}
            currentStep={currentStep}
            style={{ width: "100%", padding: "5rem 0" }}
          />

          <StepContentStyled>
            <StepContent />
          </StepContentStyled>
        </StepContainerStyled>
      )}
    </>
  );
}
