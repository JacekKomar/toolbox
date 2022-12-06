import React from "react";
import "../../css/calculator.scss";

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="calculatorTable rounded border border-dark text-center">
          <h1> Kalkulator </h1>
        </div>
        <div className="calculatorTable rounded border border-dark mt-2">
          tabela
          <div className="calculator-grid">
            <div className="output">
              <div className="previous-operand"></div>
              <div className="current-operant"></div>
            </div>
            <button className="span-two">AC</button>
            <button>DEL</button>
            <button>/</button>
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
}
