import { Fragment } from "react";
import "./App.css";
import Quote from "./Components/Quote/Quote";
import Search from "./Components/Search/Search";

function App() {
  return (
    <Fragment>
      <Search />
      <Quote />
    </Fragment>
  );
}

export default App;
