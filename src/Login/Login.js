import React, { Component } from "react";
import TokenService from "./services/token-service";
import AuthApiService from "./services/auth-api-service";
import Header from "../Header/Header";
import "login.css";

class Login extends Component {
  state = {
    error: "",
  };
  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.history.push("/welcome");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    return (
      <div>
        <Header />
        <form className="login_page_form" onSubmit={this.handleSubmitJwtAuth}>
          <label className="name">Name:</label>
          <input
            className="name"
            required
            name="user_name"
            id="Login__user_name"
          ></input>
          <label className="password">Password:</label>
          <input
            className="password"
            required
            name="password"
            type="password"
            id="Login__password"
          ></input>
          <h3>{error}</h3>
          <span>
            <button type="submit">Log In</button>
          </span>
        </form>
      </div>
    );
  }
}
