import { useContext } from "react";
import { FormContext } from "../context/FormContext";

export function useFormContext() {
  return useContext(FormContext);
}
