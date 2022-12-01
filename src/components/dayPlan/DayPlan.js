import React from "react";

// to jest komponent funkcyjny, czyli że zamiast nazwy klasy robimy funkcję
export default function DayPlan() {
  const [mojText, ustawText] = React.useState(""); // to jest Hook useState
  console.log(mojText);
  return (
    <h1>
      Day Plan
      <div>{mojText}</div>
      <input
        type="text"
        onChange={(event) => ustawText(event.target.value)}
      ></input>
    </h1>
  );
}
