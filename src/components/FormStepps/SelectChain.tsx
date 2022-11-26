import { useFormContext } from "../../hooks/useFormContext";
import { ChainGroup } from "../ChainGroup";

export function SelectChain() {
  const { handleCreateToken } = useFormContext();

  return (
    <>
      <ChainGroup />
    </>
  );
}
