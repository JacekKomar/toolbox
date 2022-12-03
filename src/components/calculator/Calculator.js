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
        </div>
      </div>
    );
  }
}
