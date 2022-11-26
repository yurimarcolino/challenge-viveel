import { useFormContext } from "../../hooks/useFormContext";
import { Input } from "../Input";

export function TokenSymbol() {
  const { data, handleChange } = useFormContext();

  return (
    <Input
      name="tokenSymbol"
      onChange={handleChange}
      value={data.tokenSymbol}
    />
  );
}
