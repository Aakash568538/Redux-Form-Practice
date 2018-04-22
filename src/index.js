import createBrowserHistory from 'history/createBrowserHistory';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import WizardForm from "./WizardForm";
import { ConnectedRouter } from 'react-router-redux';
import { Router } from 'react-router'
import App from './App';
import Header from './Header';

const rootEl = document.getElementById("root");
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    {/* <div style={{ padding: 15 }}>
      <WizardForm onSubmit={showResults} />
    </div> */}
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  rootEl
);
