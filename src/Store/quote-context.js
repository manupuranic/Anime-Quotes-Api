import React from "react";

const QuoteContext = React.createContext({
  quotes: [],
  placeHolderValue: "",
  searchBar: false,
  url: "",
  sendHttp: (type) => {},
  onAnimeSearchButtonClick: () => {},
  onCharacterSearchButtonClick: () => {},
  searchBarAppear: () => {},
  fetchTenRandomQuotes: () => {},
  onSearch: (searchType, searchData) => {},
  getRandomQuote: () => {},
});

export default QuoteContext;
