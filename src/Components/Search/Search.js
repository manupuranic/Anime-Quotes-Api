import styles from "./Search.module.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Fragment, useContext, useState } from "react";
import QuoteContext from "../../Store/quote-context";

const Search = (props) => {
  const quoteCtx = useContext(QuoteContext);
  const searchType = "  " + quoteCtx.placeHolderValue;
  const typeOfSearch = quoteCtx.placeHolderValue;
  const [inputData, setInputData] = useState("");

  const onInputChange = (event) => {
    setInputData(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (typeOfSearch === "Search By Anime") {
      const searchData = "title=" + inputData.toLowerCase();
      quoteCtx.onSearch("anime", searchData);
    } else if (typeOfSearch === "Search By Character") {
      const searchData = "name=" + inputData.toLowerCase();
      quoteCtx.onSearch("character", searchData);
    }
    if (inputData.length === 0) {
      return;
    }

    setInputData("");
  };

  const isSearchBarVisible = quoteCtx.searchBar;

  const searchBarContent = (
    <div className={styles.searchBar}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          id="search"
          placeholder={searchType}
          size="500"
          autoComplete="off"
          onChange={onInputChange}
          value={inputData}
        />
        <button className={styles.button}>
          <SearchOutlinedIcon style={{ fontSize: 30 }} />
        </button>
      </form>
    </div>
  );

  return <Fragment>{isSearchBarVisible && searchBarContent}</Fragment>;
};

export default Search;
