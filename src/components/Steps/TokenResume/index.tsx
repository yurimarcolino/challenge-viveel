import { useStepContext } from "../../../context/StepContext";
import { TwoSimplePieChart } from "../../PieChart";
import { HeaderStyled } from "../../StepTitle";
import { TokenResumeContainer } from "./styles";

export function TokenResume() {
  const { data } = useStepContext();

  const total = data.tokenDistribution.reduce((acc, token) => {
    return acc + token.amount;
  }, 0);

  const tokenDistributionPercentage = data.tokenDistribution.map((token) => {
    return {
      name: token.name,
      value: (token.amount / total) * 100,
    };
  });

  return (
    <>
      <TokenResumeContainer>
        <HeaderStyled>Token Resume</HeaderStyled>
        <div className="BodyContainer">
          <div className="SpanContainer">
            <p>Template:</p>
          </div>
          <div className="LabelContainer">
            <label />
          </div>
        </div>
        <div className="BodyContainer">
          <div className="SpanContainer">
            <p>Name:</p>
          </div>
          <div className="LabelContainer">
            <label>{data.tokenName}</label>
          </div>
        </div>
        <div className="BodyContainer">
          <div className="SpanContainer">
            <p>Symbol:</p>
          </div>
          <div className="LabelContainer">
            <label>{data.tokenSymbol}</label>
          </div>
        </div>

        <div className="BodyContainer">
          <div className="SpanContainer">
            <p>Distribution:</p>
          </div>
          <div className="LabelContainer">
            <div style={{ width: "400px", height: "400px" }}>
              <TwoSimplePieChart data={tokenDistributionPercentage} />
            </div>
          </div>
        </div>

        <div className="BodyContainer">
          <div className="SpanContainer">
            <p>BlockChains:</p>
          </div>
          <div className="LabelContainer">
            <label>
              {data.chains.map((chain, index) => {
                return (
                  <div key={index}>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={chain}
                    />
                  </div>
                );
              })}
            </label>
          </div>
        </div>

        <div className="BuildButton">
          <button
            onClick={() =>
              alert("🎉🎉CONGRATS, THE TOKEN WAS BUILT successfully🎉🎉")
            }
          >
            Build {">"}
          </button>
        </div>
      </TokenResumeContainer>
    </>
  );
}
