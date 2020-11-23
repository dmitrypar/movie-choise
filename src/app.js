import React from "react";
import "./style/style.scss";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { GlobalProvider } from "./context/globalState";

const App = () => (
  <GlobalProvider>
    <Router>
      <Routes />
    </Router>
  </GlobalProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
