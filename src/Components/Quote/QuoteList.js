import { Fragment } from "react";
import Card from "../UI/Card";
import styles from "./QuoteList.module.css";

const QuoteList = (props) => {
  const listDisplay = (
    <li>
      <h1>"{props.quote}"</h1>
      <p className={styles.character}>-{props.character}</p>
      <p className={styles.character}> {props.anime}</p>
    </li>
  );

  return (
    <Fragment>
      <div className={styles["quote-stylings"]}>
        <Card>{listDisplay}</Card>
      </div>
    </Fragment>
  );
};

export default QuoteList;
