export function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let Computation = "";
  switch (operation) {
    case "+":
      Computation = prev + current;
      break;
    case "-":
      Computation = prev - current;
      break;
    case "*":
      Computation = prev * current;
      break;
    case "/":
      Computation = prev / current;
      break;
  }
  return Computation.toString();
}
