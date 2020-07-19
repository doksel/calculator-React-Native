import { ValidateTypes } from "../../typing/calculator";

export const validate: ValidateTypes = (value) => {
  switch (value.slice(-1)) {
    case "+":
    case "-":
    case "*":
    case "/":
      return false
  }
  return true
}
