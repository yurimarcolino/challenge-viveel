import { Input } from "../Input";
import { useFormContext } from "../../hooks/useFormContext";

export function TokenName() {
  const { data, handleChange } = useFormContext();

  return (
    <>
      <Input value={data.tokenName} name="tokenName" onChange={handleChange} />
    </>
  );
}
