import { useState } from "react";
import { useFormContext } from "../../hooks/useFormContext";
import { Button } from "../Button";
import { Input } from "../Input";

export function TokenDistribution() {
  const { data, handleChange } = useFormContext();
  const [inputs, setInputs] = useState([]);

  //TODO : ADD MORE FUNCTION
  function addInputs() {
    alert("vc conseguiu");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexFlow: "nowrap",
        }}
      >
        <div>
          <Input
            hasSpan={true}
            label={"Name"}
            name="tokenDistributionName"
            onChange={handleChange}
            value={data.tokenDistributionName}
          />
        </div>

        <div>
          <Input
            hasSpan={true}
            label={"Amount"}
            name="tokenDistributionAmount"
            onChange={handleChange}
            value={data.tokenDistributionAmount}
          />
        </div>
      </div>
      <Button onClick={addInputs} />
    </>
  );
}
