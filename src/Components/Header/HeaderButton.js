import styles from "./HeaderButtons.module.css";
import QuoteContext from "../../Store/quote-context";
import { useContext } from "react";

const HeaderButton = (props) => {
  const quoteCtx = useContext(QuoteContext);

  const searchByAnime = (event) => {
    quoteCtx.onAnimeSearchButtonClick();
  };

  const searchByCharacter = (event) => {
    quoteCtx.onCharacterSearchButtonClick();
  };

  const getRandomQuote = (event) => {
    quoteCtx.getRandomQuote();
  };

  return (
    <div className={styles.button}>
      <ul>
        <li>
          <button type="button" onClick={getRandomQuote}>
            Get Random Quotes
          </button>
        </li>
        <li>
          <button type="button" onClick={searchByAnime}>
            Search by Anime
          </button>
        </li>
        <li>
          <button type="button" onClick={searchByCharacter}>
            Search by Character
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderButton;
