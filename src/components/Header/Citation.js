import React, { useState, useEffect } from "react";
import "../../css/quotes.scss";

function Citation() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  //   useEffect(() => {
  //     fetch("http://api.quotable.io/random")
  //       .then((res) => res.json())
  //       .then((quote) => {
  //         setQuote(quote.content);
  //         setAuthor(quote.author);
  //       });
  //   }, []);

  //   let fetchNewQuote = () => {
  //     fetch("http://api.quotable.io/random")
  //       .then((res) => res.json())
  //       .then((quote) => {
  //         setQuote(quote.content);
  //         setAuthor(quote.author);
  //       });
  //   };
  //   return (
  //     <div className="quoteApp">
  //       <div className="quote">
  //         <h2>{quote}</h2>
  //         <small>-{author}-</small>
  //       </div>
  //       <br />
  //       <button className="btn" onClick={fetchNewQuote}>
  //         Generate New Quote
  //       </button>
  //     </div>
  //   );
}

export default Citation;
