import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      email: '',
      password: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmailField = this.handleEmailField.bind(this);
    this.handlePasswordField = this.handlePasswordField.bind(this);
    
  }

  handleEmailField(e) {
   this.setState({email: e.target.value, login: true});
  }

  handlePasswordField(e) {
    this.setState({password: e.target.value, login: true});
   }

  handleLogin(e) {
    var users = localStorage.getItem('users');
    var parsedUsers = JSON.parse(users);
    console.log(parsedUsers);
    parsedUsers.forEach(user => {
      if (user.email === this.state.email &&
        user.password === this.state.password) {
        this.props.history.push('/');
      }
      else {
        this.setState({ login: false });        
      }
    });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <LoginForm
          handleLogin={this.handleLogin}
          handleEmailField={this.handleEmailField}
          handlePasswordField={this.handlePasswordField}
          email={this.state.email}
          password={this.state.password}
          login={this.state.login}
        />
      </div>
    );
  }
}

Login.propTypes = {
};

export default Login;
