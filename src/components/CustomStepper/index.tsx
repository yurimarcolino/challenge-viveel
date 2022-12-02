import React from "react";
import {
  StepperStyled,
  StepStyled,
  StepLabelStyled,
  StepDividerStyled,
} from "./styles";

interface CustomStepperProps {
  currentStep: number;
  steps: Record<number, JSX.Element>;
}

export function CustomStepper({ currentStep, steps }: CustomStepperProps) {
  return (
    <StepperStyled>
      {Object.keys(steps).map((step, index) => (
        <React.Fragment key={index}>
          <StepStyled aria-current={currentStep === index}>
            <StepLabelStyled>{index}</StepLabelStyled>
          </StepStyled>
          <StepDividerStyled />
        </React.Fragment>
      ))}
    </StepperStyled>
  );
}
