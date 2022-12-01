import { Step, StepLabel, Stepper } from "@mui/material";
import { title } from "../Form/formBody";

interface CustomStepperProps {
  currentStep: number;
  style: {};
}

export function CustomStepper({ currentStep, ...args }: CustomStepperProps) {
  const steps = Object.keys(title);

  return (
    <Stepper activeStep={currentStep} alternativeLabel {...args}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel />
        </Step>
      ))}
    </Stepper>
  );
}
