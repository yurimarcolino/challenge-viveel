import { createContext, useState } from "react";

export interface Data {
  tokenName: string;
  tokenSymbol: string;
  tokenDistributionName: string;
  tokenDistributionAmount: string;
  chains: string[];
}

interface FormContextData {
  currentStep: number;
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  title: {
    [key: number]: string;
  };
  footerInstructions: {
    [key: number]: string;
  };
  handleNextStep: () => void;
  lastStep: number;
  handleCreateToken: (key: string, value: string) => void;
}

interface FormContextProviderProps {
  children: React.ReactNode;
}

export const FormContext = createContext({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Data>({
    tokenName: "",
    tokenSymbol: "",
    tokenDistributionName: "",
    tokenDistributionAmount: "",
    chains: [],
  });
  console.log(data);
  //export later
  const title = {
    0: "Token Name",
    1: "Token Symbol",
    2: "Token Distribution",
    3: "Select Chain",
  };

  const footerInstructions = {
    0: "The token name represents how your is going to be known",
    1: "The token Symbol is a short name to your asset, usually it is about 3 to 5 capital letters, as USD stands for US Dollar",
    2: "Token distribution relates to how you share your assets between different players, such as your developmen team, marketing and community. In this slide you must add as much players as you like and the amount of tokens each one is entiteled with.",
    3: "Now it is time to select which Blockchain you want to use. Select as many as you want.",
  };

  const lastStep = Object.keys(title).length - 1;

  function handleNextStep() {
    if (currentStep < lastStep) {
      setCurrentStep((oldState) => oldState + 1);
    }
  }

  function handleCreateToken(key: string, value: string) {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  return (
    <FormContext.Provider
      value={{
        setData,
        data,
        currentStep,
        title,
        footerInstructions,
        handleNextStep,
        lastStep,
        handleCreateToken,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
