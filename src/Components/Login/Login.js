import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import "./login.css";
import Context from '../../Context'

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

  static contextType = Context;

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
        this.context.setCurrentUser(res.username)
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
        <div className="loginPage">
          <fieldset className="loginForm animated fadeIn">
            <form onSubmit={this.handleSubmitJwtAuth}>
              <div className="inputsLabels">
              {/* <label className="name">Name:</label> */}
              <input className="name" placeholder="Name"
                required name="username"></input>
              {/* <label className="password">Password:</label> */}
              <input
                className="password"
                placeholder="Password"
                required
                name="password"
                type="password"
              ></input>
              </div>
              <h3>{error}</h3>
              <div className="loginButtonContainer">
                <button className="loginButton" type="submit">Login</button>
              </div>
            </form>
        <div className="needToRegister"><Link to="/register">Need to register?</Link></div>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Login;
