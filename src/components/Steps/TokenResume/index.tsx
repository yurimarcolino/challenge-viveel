import { useStepContext } from "../../../context/StepContext";
import { TwoSimplePieChart } from "../../PieChart";
import { HeaderStyled } from "../../StepTitle";
import {
  BodyContainerStyled,
  ButtonContainerStyled,
  LabelContainerStyled,
  SpanContainerStyled,
} from "../styles";
import { TokenResumeContainerStyled } from "../styles";

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
    <TokenResumeContainerStyled>
      <HeaderStyled>Token Resume</HeaderStyled>

      <BodyContainerStyled>
        <SpanContainerStyled>
          <p>Template:</p>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <label />
        </LabelContainerStyled>
      </BodyContainerStyled>

      <BodyContainerStyled>
        <SpanContainerStyled>
          <p>Template:</p>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <label>{data.tokenName}</label>
        </LabelContainerStyled>
      </BodyContainerStyled>

      <BodyContainerStyled>
        <SpanContainerStyled>
          <p>Template:</p>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <label>{data.tokenSymbol}</label>
        </LabelContainerStyled>
      </BodyContainerStyled>

      <BodyContainerStyled>
        <SpanContainerStyled>
          <p>Distribution:</p>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <div style={{ width: "400px", height: "400px" }}>
            <TwoSimplePieChart data={tokenDistributionPercentage} />
          </div>
        </LabelContainerStyled>
      </BodyContainerStyled>

      <BodyContainerStyled>
        <SpanContainerStyled>
          <p>BlockChains:</p>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <label>
            {data.chains.map((chain, index) => {
              return (
                <div key={index}>
                  <img style={{ width: "50px", height: "50px" }} src={chain} />
                </div>
              );
            })}
          </label>
        </LabelContainerStyled>
      </BodyContainerStyled>

      <ButtonContainerStyled>
        <button
          onClick={() =>
            alert("🎉🎉CONGRATS, THE TOKEN WAS BUILT successfully🎉🎉")
          }
        >
          Build {">"}
        </button>
      </ButtonContainerStyled>
    </TokenResumeContainerStyled>
  );
}
