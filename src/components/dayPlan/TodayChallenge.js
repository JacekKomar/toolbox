import React from "react";

export function RenderingCitation() {
  const quotes = [
    "Zrób 20 przysiadów",
    "Zrób 10 pompek",
    "Wyjdź na spacer 30 minut",
    "Biegaj przez 20 minut",
  ];
  const quoteShow = quotes[Math.floor(Math.random() * quotes.length)];

  return <div>{JSON.stringify(quoteShow)}</div>;
}

function ChallengeApp() {
  return <RenderingCitation />;
}
export default ChallengeApp;
