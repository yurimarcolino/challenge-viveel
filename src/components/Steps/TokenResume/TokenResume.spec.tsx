import { TokenResume } from "./index";
import { render, screen } from "@testing-library/react";
import { StepContext, StepContextData } from "../../../context/StepContext";

jest.mock("recharts");

describe("TokenResume", () => {
  const customRender = () => {
    render(
      <StepContext.Provider
        value={
          {
            data: {
              tokenName: "some-token-name",
              tokenSymbol: "some-token-symbol",
              tokenDistribution: [
                {
                  name: "some-name",
                  amount: 120,
                },
              ],
              chains: ["/src/assets/polygon.svg"],
            },
          } as StepContextData
        }
      >
        <TokenResume />
      </StepContext.Provider>
    );
  };
  it("should render token resume", () => {
    customRender();

    const tokenNameFieldData = screen.getByText("some-token-name");
    const tokenSymbolFieldData = screen.getByText("some-token-symbol");
    const tokenDistributionPieChart = screen.getByTestId("piechart");
    const tokenBlockChainsFieldData = screen.getByRole("img");

    expect(tokenNameFieldData).toBeInTheDocument();
    expect(tokenSymbolFieldData).toBeInTheDocument();
    expect(tokenDistributionPieChart).toBeInTheDocument();
    expect(tokenBlockChainsFieldData).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
  });
});
