import React, { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import "../../css/calculator.scss";
import reducer from "./CalculatorReducer";
import { evaluate } from "./CalculatorEvaluate";
import { formatOperand } from "./FormatOperand";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};
export const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});
function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="container ">
      <div className="row">
        <div className="col-12">
          <div className="calculatorTable rounded border border-dark text-center ">
            <h1 className=""> Kalkulator </h1>
          </div>
          <div className="calculatorTable rounded border border-dark mt-2 mb-5">
            <div className="calculator-grid p-5">
              <div className="output rounded">
                <div className="previous-operand">
                  {previousOperand}
                  {operation}{" "}
                </div>
                <div className="current-operant ">{currentOperand}</div>
              </div>
              <button
                className="span-two rounded"
                onClick={() => dispatch({ type: ACTIONS.CLEAR })}
              >
                AC
              </button>
              <button
                className="rounded"
                onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
              >
                DEL
              </button>
              <OperationButton
                operation="/"
                dispatch={dispatch}
                className="rounded"
              />
              <DigitButton
                className="rounded"
                digit="1"
                dispatch={dispatch}
              ></DigitButton>
              <DigitButton digit="2" dispatch={dispatch} className="rounded" />
              <DigitButton digit="3" dispatch={dispatch} className="rounded" />
              <OperationButton
                operation="*"
                dispatch={dispatch}
                className="rounded"
              />
              <DigitButton digit="4" dispatch={dispatch} className="rounded" />
              <DigitButton digit="5" dispatch={dispatch} className="rounded" />
              <DigitButton digit="6" dispatch={dispatch} className="rounded" />
              <OperationButton
                operation="+"
                dispatch={dispatch}
                className="rounded"
              />
              <DigitButton digit="7" dispatch={dispatch} className="rounded" />
              <DigitButton digit="8" dispatch={dispatch} className="rounded" />
              <DigitButton digit="9" dispatch={dispatch} className="rounded" />
              <OperationButton
                operation="-"
                dispatch={dispatch}
                className="rounded"
              />
              <DigitButton digit="." dispatch={dispatch} className="rounded" />
              <DigitButton digit="0" dispatch={dispatch} className="rounded" />
              <button
                className="span-two rounded"
                onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
