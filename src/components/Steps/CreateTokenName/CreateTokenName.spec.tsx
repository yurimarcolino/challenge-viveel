import { CreateTokenName } from "./index";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  StepContextData,
  StepContext,
  Data,
} from "../../../context/StepContext";

describe("CreateTokenName", () => {
  const customRender = () => {
    render(
      <StepContext.Provider value={{} as StepContextData}>
        <CreateTokenName />
      </StepContext.Provider>
    );
  };
  it("should render an error when input is empty", async () => {
    customRender();

    const title = screen.getByRole("heading", {
      name: /token name/i,
    });

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /next >/i });
    const footer = screen.getByText(
      /the token name represents how your is going to be known/i
    );

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    userEvent.click(button);

    const errorMessage = await screen.findByText("Token name required");

    expect(errorMessage).toBeInTheDocument();
  });

  it("should save token name", async () => {
    customRender();

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /next >/i });

    userEvent.type(input, "some-name");

    userEvent.click(button);

    const errorMessage = screen.queryByText("Token name required");

    expect(errorMessage).not.toBeInTheDocument();
  });
});
