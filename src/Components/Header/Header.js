import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
  <div>
      <h1>Header goes here</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      </div>);
}

export default Header;
