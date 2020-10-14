import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import Header from "../Header/Header";
import "./login.css";

class Login extends Component {
  state = {
    error: "",
    username: {
      value: "",
      touched: false,
    },
    password: {
      value: "",
      touched: false,
    },
  };
  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.history.push("/dashboard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <div>
        <Header />
        <div className="loginPage">
          <fieldset className="loginForm">
            <form onSubmit={this.handleSubmitJwtAuth}>
              <div className="inputsLabels">
              <label className="name">Name:</label>
              <input className="name" required name="username"></input>
              <label className="password">Password:</label>
              <input
                className="password"
                required
                name="password"
                type="password"
              ></input>
              </div>
              <h3>{error}</h3>
              <div className="loginButtonContainer">
                <button className="loginButton" type="submit">Log In</button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Login;
