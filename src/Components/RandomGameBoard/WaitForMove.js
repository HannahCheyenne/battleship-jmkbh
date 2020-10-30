import React, { Component } from "react";

export default class WaitForMove extends Component {
  componentDidMount() {
    this.props.func();
  }

  render() {
    return <div>Waiting for opponent</div>;
  }
}
