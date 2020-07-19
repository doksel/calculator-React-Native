import { createSlice } from "@reduxjs/toolkit";

import { CalculatorTypes, CalculatorActionTypes } from "../../typing/calculator";
import { AppDispatchTypes } from "../store";

import { validate } from "../helpers"

const initialState: CalculatorTypes = {
  display: "0",
  result: "",
  memory: 0
};

const operations = ["del", "-", "+", "", "/", "*"]

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setNumber(state, { payload }) {
      const isComma = state.display.split("").some((el) => el === ",")

      if (state.display === "0" && payload !== "," && !isComma) {
        return {
          ...state,
          display: payload
        };
      } else if (payload === "," && !isComma) {
        return {
          ...state,
          display: state.display + payload
        };
      } else if (payload === "," && isComma) {
        return { ...state };
      }

      return {
        ...state,
        display: state.display + payload
      };
    },

    setOperator(state, { payload }) {
      const lastChar = state.display.split("").pop();

      if (lastChar && operations.indexOf(lastChar) > 0) return;

      return {
        ...state,
        display: state.display + payload
      };
    },

    setMemory(state, { payload }) {
      switch (payload) {
        case "m+":
          return {
            ...state,
            memory: +state.memory + +state.result
          };
        case "m-":
          return {
            ...state,
            memory: +state.memory - +state.result
          };
        case "mc":
          return {
            ...state,
            display: "",
            result: "",
            memory: 0
          };
        case "mr":
          return {
            ...state,
            result: state.memory.toString()
          };
        default:
          return { ...state };
      }
    },

    clearDisplay(state) {
      return {
        ...state,
        display: "0",
        result: ""
      };
    },

    removeLastSign(state) {
      let value = state.display.split("");
      value.pop();

      if (!value.length) {
        return {
          ...state,
          display: "0"
        };
      }

      return {
        ...state,
        display: value.join("")
      };
    },

    setPosneg(state) {
      const arrayDisplay = state.display.split("");
      const valid =
        arrayDisplay.indexOf("+") > 0 ||
        arrayDisplay.indexOf("-") > 0 ||
        arrayDisplay.indexOf("*") > 0 ||
        arrayDisplay.indexOf("/") > 0

      if (state.display === "0") {
        return {
          ...state,
          display: "-"
        };
      } else if (state.display !== "-" && state.display.length && valid) {
        let value = parseFloat(state.display) * -1;

        return {
          ...state,
          display: value.toString()
        };
      }

      return { ...state };
    },

    setPercentage(state) {
      const array = state.display.split("%");
      const result = +array[0] / 100 * (+array[1]);

      return {
        ...state,
        result: result.toString()
      };
    },

    setEval(state) {
      const arrayDisplay = state.display.split("");

      if (!validate(state.display)) return { ...state };

      if (arrayDisplay.indexOf("%") > 0 && arrayDisplay.length === 2) {
        const array = state.display.split("%");
        const result = +array[0] / 100 * (+array[1]);

        return {
          ...state,
          display: "0",
          result: result.toString()
        };
      }
      return {
        ...state,
        display: "0",
        result: eval(state.display)
      };

    }
  }
});

export const {
  setNumber,
  setOperator,
  setMemory,
  clearDisplay,
  removeLastSign,
  setPosneg,
  setPercentage,
  setEval
} = calculatorSlice.actions;

export default calculatorSlice.reducer;


export const calculator: CalculatorActionTypes = (type, value) => (dispatch: AppDispatchTypes) => {
  switch (type) {
    case "number":
      return dispatch(setNumber(value));
    case "operator":
      return dispatch(setOperator(value));
    case "clear":
      return dispatch(clearDisplay());
    case "del":
      return dispatch(removeLastSign());
    case "equal":
      return dispatch(setEval());
    case "posneg":
      return dispatch(setPosneg());
    case "memory":
      return dispatch(setMemory(value));
    case "percentage":
      return dispatch(setPercentage());
    default:
      return "";
  }
};
