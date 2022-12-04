import { CreateTokenSymbol } from "./index";
import { render, screen } from "@testing-library/react";
import { StepContext, StepContextData } from "../../../context/StepContext";
import userEvent from "@testing-library/user-event";

describe("CreateTokenSymbol", () => {
  const customRender = () => {
    render(
      <StepContext.Provider value={{} as StepContextData}>
        <CreateTokenSymbol />
      </StepContext.Provider>
    );
  };
  it("should render an error when input is empty", async () => {
    customRender();

    const title = screen.getByRole("heading", {
      name: /token symbol/i,
    });
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /next >/i });
    const footer = screen.getByText(
      /The token Symbol is a short name to your asset, usually it is about 3 to 5 capital letters, as USD stands for US Dollar/i
    );

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    userEvent.click(button);

    const errorMessage = await screen.findByText("Token symbol required");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should save token symbol", async () => {
    customRender();

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /next >/i });

    userEvent.type(input, "some-symbol");
    userEvent.click(button);

    const errorMessage = screen.queryByText("Token symbol required");

    expect(errorMessage).not.toBeInTheDocument();
  });
});
