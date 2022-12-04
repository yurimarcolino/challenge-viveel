import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StepContext, StepContextData } from "../../../context/StepContext";
import { SelectChain } from "./index";

describe("SelectChain", () => {
  const customRender = () => {
    render(
      <StepContext.Provider value={{} as StepContextData}>
        <SelectChain />
      </StepContext.Provider>
    );
  };
  it("should be able to save blockchain", () => {
    customRender();

    const title = screen.getByRole("heading", {
      name: /select chain/i,
    });

    const button = screen.getByRole("button", {
      name: /next >/i,
    });
    const footer = screen.getByRole("contentinfo");

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(screen.getAllByTestId("blockchain-image").length).toEqual(9);
    expect(footer).toBeInTheDocument();

    userEvent.click(button);

    const errorMessage = screen.queryByText(
      "You must select at least one network"
    );

    expect(errorMessage).not.toBeInTheDocument();
  });
});
