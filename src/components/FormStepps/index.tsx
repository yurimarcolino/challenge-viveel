import { CreateTokenName } from "./CreateTokenName";
import { useFormContext } from "../../hooks/useFormContext";
import { CreateTokenSymbol } from "./CreateTokenSymbol";
import { CreateTokenDistribution } from "./CreateTokenDistribution";
import { SelectChain } from "./SelectChain";

export function FormStepps() {
  const { currentStep } = useFormContext();

  const display: Record<number, JSX.Element> = {
    0: <CreateTokenName />,
    1: <CreateTokenSymbol />,
    2: <CreateTokenDistribution />,
    3: <SelectChain />,
  };

  return <div>{display[currentStep]}</div>;
}
