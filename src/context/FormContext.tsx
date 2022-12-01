import { createContext, useState } from "react";
import { title } from "../components/Form/formBody";

export interface Data {
  tokenName: string;
  tokenSymbol: string;
  tokenDistribution: {
    name: string;
    amount: number;
  }[];
  chains: string[];
}

interface FormContextData {
  data: Data;
  currentStep: number;
  lastStep: number;
  hasFinished: boolean;
  setHasFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  handleNextStep: () => void;
  handleCreateToken: (key: string, value: string) => void;
}

interface FormContextProviderProps {
  children: React.ReactNode;
}

export const FormContext = createContext({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasFinished, setHasFinished] = useState(false);

  const [data, setData] = useState<Data>({
    tokenName: "",
    tokenSymbol: "",
    tokenDistribution: [
      {
        name: "",
        amount: 0,
      },
    ],

    chains: [],
  });

  const lastStep = Object.keys(title).length - 1;

  function handleNextStep() {
    if (currentStep < lastStep) {
      setCurrentStep((oldState) => oldState + 1);
    }
  }

  function handleCreateToken(key: any, value: any) {
    setData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  return (
    <FormContext.Provider
      value={{
        data,
        currentStep,
        hasFinished,
        lastStep,
        setData,
        setHasFinished,
        handleNextStep,
        handleCreateToken,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
