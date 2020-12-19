import React from "react";
import "./style/style.scss";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import { ErrorBoundry } from "./components/error-boundry/error-boundry";

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <ErrorBoundry>
        <Routes />
      </ErrorBoundry>
    </Router>
  </Provider>
);


ReactDOM.render(<App />, document.getElementById("root"));
