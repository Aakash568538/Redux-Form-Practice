import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './Header';
import WizardForm from "./WizardForm";
import Login from "./Login";
import { Link } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div className="App">
      <Link to='/'>Home</Link>
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/signup" component={WizardForm} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;