import { AppDispatchTypes } from "../services/store";

export type CalculatorTypes = {
  display: string;
  result: string;
  memory: number;
};

export type HandlePressTypes = (type: string, value: string) => void;

export type CalculatorActionTypes = (type: string, value: string) => any;

export type ValidateTypes = (value: string) => boolean;
