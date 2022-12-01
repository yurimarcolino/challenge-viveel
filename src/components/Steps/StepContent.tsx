import { useStepContext } from "../../context/StepContext";
import { SelectChain } from "./SelectChain";

import { CreateTokenSymbol } from "./CreateTokenSymbol";
import { CreateTokenDistribution } from "./CreateTokenDistribution";
import { CreateTokenName } from "./CreateTokenName";

export const steps: Record<number, JSX.Element> = {
  0: <CreateTokenName />,
  1: <CreateTokenSymbol />,
  2: <CreateTokenDistribution />,
  3: <SelectChain />,
};

export function StepContent() {
  const { currentStep } = useStepContext();

  return <div>{steps[currentStep]}</div>;
}
