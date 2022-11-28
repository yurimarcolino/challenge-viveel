import { createContext, useState } from "react";
import { title } from "../components/Form/formBody";

export interface Data {
  tokenName: string;
  tokenSymbol: string;
  tokenDistribution: {
    name: string;
    amount: string;
  }[];
  chains: string[];
}

interface FormContextData {
  currentStep: number;
  data: Data;
  lastStep: number;
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

  const [data, setData] = useState<Data>({
    tokenName: "",
    tokenSymbol: "",
    tokenDistribution: [
      {
        name: "",
        amount: "",
      },
    ],

    chains: [],
  });
  console.log({ data });

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
        setData,
        data,
        currentStep,
        handleNextStep,
        lastStep,
        handleCreateToken,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
