import { TokenName } from "./TokenName";
import { useFormContext } from "../../hooks/useFormContext";
import { TokenSymbol } from "./TokenSymbol";
import { TokenDistribution } from "./TokenDistribution";
import { SelectChain } from "./SelectChain";

export function FormFields() {
  const { currentStep } = useFormContext();

  const display: Record<number, JSX.Element> = {
    0: <TokenName />,
    1: <TokenSymbol />,
    2: <TokenDistribution />,
    3: <SelectChain />,
  };

  return <div>{display[currentStep]}</div>;
}
