import { Fragment, useCallback, useEffect, useState } from "react";
import QuoteList from "./QuoteList";
import styles from "./Quote.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

const Quote = (props) => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchTenRandomQuotes = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("https://animechan.vercel.app/api/quotes");
    const data = await response.json();
    let loadedQuote = [];
    for (const key in data) {
      loadedQuote.push({
        id: key,
        anime: data[key].anime,
        character: data[key].character,
        quote: data[key].quote,
      });
    }
    setQuotes(loadedQuote);
    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    fetchTenRandomQuotes();
  }, [fetchTenRandomQuotes]);

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

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {!isLoading && quoteContent}
    </Fragment>
  );
};

export default Quote;
