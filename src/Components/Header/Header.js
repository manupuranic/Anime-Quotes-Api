import styles from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <header>
      <div className={styles.header}>
        <h1>Anime Quotes</h1>
        <HeaderButton
          onAnimeSearch={props.onAnimeSearch}
          onCharacterSearch={props.onCharacterSearch}
          searchBarDrop={props.searchBarDrop}
        />
      </div>
    </header>
  );
};

export default Header;
