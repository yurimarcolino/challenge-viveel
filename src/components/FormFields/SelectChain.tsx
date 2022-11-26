import { useFormContext } from "../../hooks/useFormContext";
import { ChainGroup } from "../ChainGroup";

export function SelectChain() {
  const { data, handleChange } = useFormContext();

  return (
    <>
      <ChainGroup />
    </>
  );
}
