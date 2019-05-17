import React, { Component } from "react";
import "./Auth.scss";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  usernameHandler = e => {
    this.setState({
      username: e.target.value
    });
  };

  passwordHandler = e => {
    this.setState({
      password: e.target.value
    });
  };
  render() {
    return (
      <div className="auth-main">
        <div className="auth-inner">
          <h1>Helo</h1>
          Username: <input onChange={e => this.usernameHandler(e)} />
          Password: <input onChange={e => this.passwordHandler(e)} />
          <div className="btns">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
