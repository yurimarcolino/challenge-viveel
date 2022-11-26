import { Step, StepLabel, Stepper, StepperTypeMap } from "@mui/material";
import { useFormContext } from "../../hooks/useFormContext";

interface CustomStepperProps {
  currentStep: number;
  style: {};
}

export function CustomStepper({ currentStep, ...args }: CustomStepperProps) {
  const { title } = useFormContext();

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
