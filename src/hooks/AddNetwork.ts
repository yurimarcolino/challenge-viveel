import { useState } from "react";
import { useStepContext } from "../context/StepContext";

export function useAddNetwork() {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const { data, setData } = useStepContext();

  const AddNetwork = (key: string) => {
    const checkField = data.chains?.find((chain) => chain === key);

    if (!checkField) {
      setError(false);
      setChecked(true);
      setData((prevState) => ({
        ...prevState,
        chains: [...prevState.chains, key],
      }));
    } else {
      const newChain = data.chains?.filter((chain) => chain !== checkField);

      if (newChain.length === 0) {
        setChecked(false);
      }
      setData((prevState) => ({
        ...prevState,
        chains: newChain,
      }));
    }
  };

  return { AddNetwork, error, setError };
}
