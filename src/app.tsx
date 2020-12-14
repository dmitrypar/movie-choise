import * as React from "react";
import "./style/style.scss";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
