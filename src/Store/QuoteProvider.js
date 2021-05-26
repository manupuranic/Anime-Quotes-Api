import { useReducer } from "react";
import QuoteContext from "./quote-context";

const defaultState = {
  quotes: [],
  placeHolderValue: "Search",
  searchBar: false,
  url: "https://animechan.vercel.app/api/quotes",
};

const quoteReducer = (state, action) => {
  if (action.type === "ANIME") {
    return {
      quotes: state.quotes,
      placeHolderValue: "Search By Anime",
      searchBar: true,
      url: state.url,
    };
  }
  if (action.type === "CHARACTER") {
    return {
      quotes: state.quotes,
      placeHolderValue: "Search By Character",
      searchBar: true,
      url: state.url,
    };
  }
  if (action.type === "SEARCH") {
    const baseURL = "https://animechan.vercel.app/api/quotes";
    const typeOfSearch = action.searchType;
    const searchTitle = action.searchData;
    const modifiedUrl = baseURL + "/" + typeOfSearch + "?" + searchTitle;
    return {
      quotes: state.quotes,
      placeHolderValue: state.placeHolderValue,
      searchBar: state.searchBar,
      url: modifiedUrl,
    };
  }
  if (action.type === "RANDOM") {
    const randomUrl = "https://animechan.vercel.app/api/quotes";
    return {
      quotes: state.quotes,
      placeHolderValue: state.placeHolderValue,
      searchBar: false,
      url: randomUrl,
    };
  }

  return defaultState;
};

const QuoteProvider = (props) => {
  const [quoteState, dispatchQuoteAction] = useReducer(
    quoteReducer,
    defaultState
  );

  const onAnimeSearchButtonClick = () => {
    dispatchQuoteAction({ type: "ANIME" });
  };

  const onCharacterSearchButtonClick = () => {
    dispatchQuoteAction({ type: "CHARACTER" });
  };

  const onSearch = (searchType, searchData) => {
    dispatchQuoteAction({
      type: "SEARCH",
      searchType: searchType,
      searchData: searchData,
    });
  };

  const getRandomQuote = () => {
    dispatchQuoteAction({ type: "RANDOM" });
  };

  const quoteContext = {
    quotes: quoteState.quotes,
    placeHolderValue: quoteState.placeHolderValue,
    searchBar: quoteState.searchBar,
    isoading: quoteState.isLoading,
    url: quoteState.url,
    onAnimeSearchButtonClick: onAnimeSearchButtonClick,
    onCharacterSearchButtonClick: onCharacterSearchButtonClick,
    onSearch: onSearch,
    getRandomQuote: getRandomQuote,
  };

  return (
    <QuoteContext.Provider value={quoteContext}>
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteProvider;
