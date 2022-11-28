import { useFormContext } from "../../hooks/useFormContext";
import { SelectChain } from "./SelectChain";

import { CreateTokenSymbol } from "./CreateTokenSymbol";
import { CreateTokenDistribution } from "./CreateTokenDistribution";
import { CreateTokenName } from "./CreateTokenName";

import { useTokenDistributionForm } from "./CreateTokenDistribution/tokenDistributionForm";
import { useTokenNameForm } from "./CreateTokenName/tokenNameForm";
import { useTokenSymbolForm } from "./CreateTokenSymbol/tokenSymbolForm";

export function FormStepps() {
  const { currentStep } = useFormContext();

  const tokenDistribution = useTokenDistributionForm();
  const tokenName = useTokenNameForm();
  const tokenSymbol = useTokenSymbolForm();

  const display: Record<number, JSX.Element> = {
    0: <CreateTokenName form={tokenName} />,
    1: <CreateTokenSymbol form={tokenSymbol} />,
    2: <CreateTokenDistribution form={tokenDistribution} />,
    3: <SelectChain />,
  };

  return <div>{display[currentStep]}</div>;
}
