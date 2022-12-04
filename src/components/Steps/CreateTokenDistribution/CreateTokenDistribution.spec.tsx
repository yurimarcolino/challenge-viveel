import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StepContext, StepContextData } from "../../../context/StepContext";
import { CreateTokenDistribution } from "./index";

describe("CreateTokenDistribution", () => {
  const customRender = () => {
    render(
      <StepContext.Provider value={{} as StepContextData}>
        <CreateTokenDistribution />
      </StepContext.Provider>
    );
  };

  it("should render an error when both inputs are empty", async () => {
    customRender();

    const title = screen.getByRole("heading", {
      name: /token distribution/i,
    });
    const nameLabel = screen.getByText(/name/i);
    const nameInput = screen.getByRole("textbox");
    const amountLabel = screen.queryByTestId("amount-label");
    const amountInput = screen.getByRole("spinbutton");
    const addButton = screen.getByRole("button", { name: /add more/i });
    const nextButton = screen.getByRole("button", { name: /next >/i });
    const footer = screen.getByText(
      /Token distribution relates to how you share your assets between different players, such as your developmen team, marketing and community. In this slide you must add as much players as you like and the amount of tokens each one is entiteled with/i
    );

    expect(title).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(amountLabel).toBeInTheDocument();
    expect(amountInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    userEvent.click(nextButton);

    const inputNameErrorMessage = await screen.findByText("Name required");
    const amountNameErrorMessage = await screen.findByText("Amount required");

    expect(inputNameErrorMessage).toBeInTheDocument();
    expect(amountNameErrorMessage).toBeInTheDocument();
  });

  it("should render an error when one of the inputs are empty", async () => {
    customRender();

    const nameInput = screen.getByRole("textbox");
    const nextButton = screen.getByRole("button", { name: /next >/i });

    expect(nameInput).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    userEvent.click(nextButton);

    const inputNameErrorMessage = await screen.findByText("Name required");

    expect(inputNameErrorMessage).toBeInTheDocument();
  });

  it("should render more inputs when Add more button is clicked", async () => {
    customRender();
    expect(screen.getAllByRole("textbox").length).toEqual(1);

    const addButton = screen.getByRole("button", { name: /add more/i });

    fireEvent.click(addButton);

    expect(screen.getAllByRole("textbox").length).toEqual(2);
  });

  it("should save token distribution", async () => {
    customRender();
    const amountInput = screen.getByRole("spinbutton");
    const nameInput = screen.getByRole("textbox");
    const nextButton = screen.getByRole("button", { name: /next >/i });

    userEvent.type(nameInput, "some-name");
    userEvent.type(amountInput, "some-amount");
    userEvent.click(nextButton);

    const inputNameErrorMessage = screen.queryByText("Name required");
    const amountNameErrorMessage = screen.queryByText("Amount required");

    expect(inputNameErrorMessage).not.toBeInTheDocument();
    expect(amountNameErrorMessage).not.toBeInTheDocument();
  });
});
