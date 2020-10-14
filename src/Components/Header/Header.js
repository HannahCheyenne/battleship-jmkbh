import React, { Component } from "react";
import TokenService from "../../services/token-service";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  renderLoginLink() {
    return (
      <nav>
        <Link to="/login">Login</Link> 
        <Link to="/register">Register</Link>
        <Link to="/demo">Demo</Link>
      </nav>
    );
  }
  renderLogoutLink() {
    return (
      <div>
        <nav>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }
  render() {
    return (
      <div>
        <header>
          <h1><Link to='/'>Space Battleship</Link></h1>
          <span>
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </span>
        </header>
      </div>
    );
  }
}
export default Header;
