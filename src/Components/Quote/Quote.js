import { Fragment, useContext, useEffect, useState } from "react";
import QuoteList from "./QuoteList";
import styles from "./Quote.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import QuoteContext from "../../Store/quote-context";

const Quote = (props) => {
  const quoteCtx = useContext(QuoteContext);
  const [quotes, setQuotes] = useState([]);
  const url = quoteCtx.url;
  const { error, isLoading, sendRequest } = useHttp();

  useEffect(() => {
    const displayQuotes = (data) => {
      console.log(data);
      let loadedQuote = [];
      for (const key in data) {
        console.log(key);
        loadedQuote.push({
          id: key,
          anime: data[key].anime,
          character: data[key].character,
          quote: data[key].quote,
        });
      }
      setQuotes(loadedQuote);
    };

    sendRequest(url, displayQuotes);
  }, [sendRequest, url]);

  const quoteContent = (
    <ul className={styles.quotes}>
      {quotes.map((quote) => {
        return (
          <QuoteList
            key={quote.id}
            id={quote.id}
            quote={quote.quote}
            anime={quote.anime}
            character={quote.character}
          />
        );
      })}
    </ul>
  );

  let content = <p className={styles["error-text"]}>No Quotes found</p>;

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (quotes.length > 0) {
    content = quoteContent;
  }

  if (error) {
    content = <p className={styles["error-text"]}>{error}</p>;
  }

  return <Fragment>{content}</Fragment>;
};

export default Quote;

// const fetchRandomQuotes = async () => {
//   const response = await fetch("https://animechan.vercel.app/api/random");
//   const data = await response.json();
//   const { anime, character, quote } = data;
//   console.log(Math.floor(Math.random() * 100));
//   let loadedQuote = [];
//   loadedQuote.push({
//     id: Math.floor(Math.random() * 100),
//     anime: anime,
//     character: character,
//     quote: quote,
//   });
//   setQuotes(loadedQuote);
// };
