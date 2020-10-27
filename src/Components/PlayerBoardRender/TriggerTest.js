import React, { Component } from "react";

export default class TriggerTest extends Component {
  componentDidMount() {
    this.props.func();
  }

  render() {
    return <div></div>;
  }
}
