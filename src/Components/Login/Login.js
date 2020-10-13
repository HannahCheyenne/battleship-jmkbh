import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import Header from "../Header/Header";
import "./login.css";

class Login extends Component {
  state = {
    error: "",
    user_name: {
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
    const { user_name, password } = ev.target;
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
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
        <form  onSubmit={this.handleSubmitJwtAuth}>
          <label className="name">Name:</label>
          <input
            className="name"
            required
            name="user_name"
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

export default Login;
