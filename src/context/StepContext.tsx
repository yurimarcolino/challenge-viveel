import { createContext, useContext, useState } from "react";
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

interface StepContextData {
  data: Data;
  currentStep: number;
  lastStep: number;
  hasFinished: boolean;
  setHasFinished: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  handleNextStep: () => void;
  handleCreateToken: (key: string, value: string) => void;
}

interface StepContextProviderProps {
  children: React.ReactNode;
}

const StepContext = createContext({} as StepContextData);

export function StepContextProvider({ children }: StepContextProviderProps) {
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
    <StepContext.Provider
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
    </StepContext.Provider>
  );
}

export function useStepContext() {
  return useContext(StepContext);
}
