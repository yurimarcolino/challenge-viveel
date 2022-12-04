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
  console.log({ data });
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
          <span>Template:</span>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <label data-testid="template-field" />
        </LabelContainerStyled>
      </BodyContainerStyled>

      <BodyContainerStyled>
        <SpanContainerStyled>
          <span>Name:</span>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <label data-testid="token-name-field">{data.tokenName}</label>
        </LabelContainerStyled>
      </BodyContainerStyled>

      <BodyContainerStyled>
        <SpanContainerStyled>
          <span>Symbol:</span>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <label data-testid="token-symbol-field">{data.tokenSymbol}</label>
        </LabelContainerStyled>
      </BodyContainerStyled>

      <BodyContainerStyled>
        <SpanContainerStyled>
          <span>Distribution:</span>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <div
            style={{ width: "25rem", height: "25rem" }}
            data-testid="piechart"
          >
            <TwoSimplePieChart data={tokenDistributionPercentage} />
          </div>
        </LabelContainerStyled>
      </BodyContainerStyled>

      <BodyContainerStyled>
        <SpanContainerStyled>
          <span>BlockChains:</span>
        </SpanContainerStyled>
        <LabelContainerStyled>
          <label>
            {data.chains.map((chain, index) => {
              return (
                <div key={index}>
                  <img
                    data-testid="blockchain-field"
                    style={{ width: "3.125rem", height: "3.125rem" }}
                    src={chain}
                  />
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
