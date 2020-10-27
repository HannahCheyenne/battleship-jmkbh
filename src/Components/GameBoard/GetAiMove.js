import React, { Component } from "react";

export default class GetAiMove extends Component {
  componentDidMount() {
    this.props.func();
  }

  render() {
    return <div></div>;
  }
}
