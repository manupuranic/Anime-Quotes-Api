import "./App.css";
import Quote from "./Components/Quote/Quote";
import Search from "./Components/Search/Search";
import Header from "./Components/Header/Header";
import { Fragment } from "react";
import QuoteProvider from "./Store/QuoteProvider";

function App() {
  return (
    <Fragment>
      <QuoteProvider>
        <Header />
        <Search />
        <Quote />
      </QuoteProvider>
    </Fragment>
  );
}

export default App;
