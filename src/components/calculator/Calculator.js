import React, { useReducer } from "react";
import "../../css/calculator.scss";
import DigitButton from "./DigitButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}  ${payload.digit}`,
      };
  }
}

// export default class Calculator extends React.Component

//   render() {
function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 } });

  return (
    <div className="container">
      <div className="calculatorTable rounded border border-dark text-center">
        <h1> Kalkulator </h1>
      </div>
      <div className="calculatorTable rounded border border-dark mt-2">
        tabela
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand">
              {previousOperand}
              {operation}{" "}
            </div>
            <div className="current-operant">{currentOperand}</div>
          </div>
          <button className="span-two">AC</button>
          <button>DEL</button>
          <DigitButton digit="/" dispatch={dispatch} />
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button className="span-two">=</button>
        </div>
      </div>
    </div>
  );
}
//   }
// }
export default Calculator;
