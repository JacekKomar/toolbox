import React from "react";

function RenderingCitation() {
  const quotes = [
    "Ludzie boją się zmian, nawet na lepsze- J. I. Kraszewski",
    "Ludzie, którzy tracą czas czekając, aż zaistnieją najbardziej sprzyjające warunki, nigdy nic nie zdziałają. Najlepszy czas na działanie jest teraz! - Mark Fisher",
    "W życiu nie chodzi o czekanie, aż burza minie… Chodzi o to, by nauczyć się tańczyć w deszczu. - Vivian Green",
    "Sposobem na zaczęcie jest skończenie mówienia i podjęcie działania. - Walt Disney",
    "Żadne zadanie nie jest szczególnie trudne, jeśli podzielisz je na mniejsze podzadania. - Henry Ford",
    "Pamiętaj, że kiedy potrzebujesz pomocnej dłoni jest ona na końcu twojego ramienia. - Audrey Hepburn",
    "Tylko ci, którzy ryzykują pójście za daleko dowiedzą się jak daleko można dojść. - T.S. Eliot",
    "Umysł potrzebuje zaś książek, podobnie jak miecz potrzebuje kamienia do ostrzenia. - George R.R. Martin",
  ];
  const quoteShow = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(`${quoteShow}`);

  const OneQuote = quotes.map((element) => {
    return (
      <ul>
        <li>{element.quote}</li>
        <li>{element.author}</li>
      </ul>
    );
  });
  return <li>{OneQuote}</li>;
}
function CitationApp() {
  return <RenderingCitation />;
}
export default CitationApp;
