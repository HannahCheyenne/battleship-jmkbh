import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import ValidationError from "../../Utils/ValidationError";
import "./register.css";

class Register extends Component {
  state = {
    name: {
      value: "",
      touched: false,
    },
    username: {
      value: "",
      touched: false,
    },
    password: {
      value: "",
      touched: false,
    },
    confirmPassword: {
      value: "",
      touched: false,
    },
    error: null,
  };

  handleSubmitNewUser = (ev) => {
    ev.preventDefault();
    const { username, password, name } = ev.target;

    this.setState({ error: null });
    AuthApiService.postNewUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        name.value = "";
        username.value = "";
        password.value = "";
        this.props.history.push("/login");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  checkName(name) {
    this.setState({
      name: { value: name, touched: true },
    });
  }
  checkUserName(username) {
    this.setState({
      username: { value: username, touched: true },
    });
  }
  checkPassword(password) {
    this.setState({
      password: { value: password, touched: true },
    });
  }
  checkConfirmPassword(confirmPassword) {
    this.setState({
      confirmPassword: { value: confirmPassword, touched: true },
    });
  }
  validateName() {
    const name = this.state.name;
    if (name.value.length < 3) {
      return "Must be at least three letters long";
    }
    //needs special characters added
    if (name.value.match(/[$-/:-?{-~!"^_`[\]]/)) {
      return "Must contain only letters or numbers";
    }
  }
  validateUserName() {
    const username = this.state.username;
    if (username.value.length < 3) {
      return "Must be at least three letters long";
    }
    if (username.value.match(/[$-/:-?{-~!"^_`[\]]/)) {
      return "Must contain only letters or numbers";
    }
  }
  validatePassword() {
    const password = this.state.password;
    if (password.value.length < 8 || !password.value.match(/\d/)) {
      return "Password must contain numbers and letters";
    }
  }
  validateConfirmPassword() {
    const password = this.state.password.value;
    const confirmPassword = this.state.confirmPassword.value;
    if (confirmPassword !== password) {
      return "Passwords must match";
    }
  }
  render() {
    let serverError = this.state.error;
    const nameError = this.validateName();
    const usernameError = this.validateUserName();
    const passwordError = this.validatePassword();
    const confirmPasswordError = this.validateConfirmPassword();
    return (
      <>
        <Header />
        <div className="registrationPage">
          <fieldset className="registrationForm">
            <form onSubmit={this.handleSubmitNewUser}>
              <div className="regInputsLables">
                <label className="name">Name:</label>
                {this.state.name.touched && (
                  <ValidationError message={nameError} />
                )}
                <input
                  className="name"
                  name="name"
                  onChange={(e) => this.checkName(e.target.value)}
                ></input>
                <label className="name">User Name:</label>
                {this.state.username.touched && (
                  <ValidationError message={usernameError} />
                )}
                <input
                  className="name"
                  name="username"
                  onChange={(e) => this.checkUserName(e.target.value)}
                ></input>
                <label className="password">Password:</label>
                {this.state.password.touched && (
                  <ValidationError message={passwordError} />
                )}
                <input
                  className="password"
                  name="password"
                  onChange={(e) => this.checkPassword(e.target.value)}
                ></input>
                <label className="password">Confirm Password:</label>
                {this.state.confirmPassword.touched && (
                  <ValidationError message={confirmPasswordError} />
                )}
                <input
                  className="password"
                  name="confirmPassword"
                  onChange={(e) => this.checkConfirmPassword(e.target.value)}
                ></input>
              </div>
              <h3>{serverError}</h3>
              <div className="registrationSubmit">
                <button
                  className="submit"
                  disabled={
                    this.validateName() ||
                    this.validatePassword() ||
                    this.validateConfirmPassword()
                  }
                >
                  Submit
                </button>
              </div>
            </form>
          </fieldset>
         <div><Link to="/login">Already registered?</Link></div>
        </div>
      </>
    );
  }
}

export default Register;
