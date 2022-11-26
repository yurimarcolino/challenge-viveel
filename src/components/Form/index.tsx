import { useFormContext } from "../../hooks/useFormContext";
import { CustomStepper } from "../CustomStepper";
import { FormFields } from "../FormFields";
import { FormContainer, FormContent } from "./styles";

export function Form() {
  const { footerInstructions, currentStep, handleNextStep, title, lastStep } =
    useFormContext();

  const isNextButtonHidden = currentStep === lastStep;

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <FormContainer>
      <CustomStepper
        currentStep={currentStep}
        style={{ width: "100%", padding: "5rem 0" }}
      />
      <FormContent>
        <form onSubmit={handleSubmit}>
          <header>
            <h2>{title[currentStep]}</h2>
          </header>

          <FormFields />

          <div className="ButtonContainer">
            {isNextButtonHidden ? (
              <button type="submit">submit</button>
            ) : (
              <button onClick={handleNextStep} type="button">
                Next {">"}
              </button>
            )}
          </div>

          <div className="FooterContainer">
            <footer>{footerInstructions[currentStep]}</footer>
          </div>
        </form>
      </FormContent>
    </FormContainer>
  );
}
