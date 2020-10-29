import React, { Component } from 'react'

export default class NewGame extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>New Game</button>
      </div>
    )
  }
}
