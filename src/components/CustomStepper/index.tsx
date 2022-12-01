import { Step, StepLabel, Stepper } from "@mui/material";

interface CustomStepperProps {
  currentStep: number;
  style: {};
  steps: Record<number, JSX.Element>;
}

export function CustomStepper({
  currentStep,
  steps,
  ...args
}: CustomStepperProps) {
  return (
    <Stepper activeStep={currentStep} alternativeLabel {...args}>
      {Object.keys(steps).map((step, index) => (
        <Step key={index}>
          <StepLabel />
        </Step>
      ))}
    </Stepper>
  );
}
