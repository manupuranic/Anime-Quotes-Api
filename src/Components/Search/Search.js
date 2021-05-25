import styles from "./Search.module.css";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { grey } from "@material-ui/core/colors";

const Search = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Clicked!");
  };

  return (
    <div className={styles.searchBar}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          id="search"
          placeholder="   Search"
          size="500"
          autoComplete="off"
        />
        <button className={styles.button}>
          <SearchOutlinedIcon style={{ fontSize: 30, color: grey }} />
        </button>
      </form>
    </div>
  );
};

export default Search;
