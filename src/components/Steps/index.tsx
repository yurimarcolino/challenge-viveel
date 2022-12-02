import { useStepContext } from "../../context/StepContext";
import { CustomStepper } from "../CustomStepper";
import { StepContent, steps } from "./StepContent";
import { TokenResume } from "../Steps/TokenResume";
import { StepContainerStyled } from "./styles";

export function Steps() {
  const { currentStep, hasFinished } = useStepContext();

  return (
    <>
      {hasFinished ? (
        <TokenResume />
      ) : (
        <StepContainerStyled>
          <CustomStepper steps={steps} currentStep={currentStep} />

          <StepContent />
        </StepContainerStyled>
      )}
    </>
  );
}
