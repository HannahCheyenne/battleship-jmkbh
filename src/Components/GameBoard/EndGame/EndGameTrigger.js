import React, { Component } from 'react'

export default class EndGameTrigger extends Component {

  componentDidMount(){
    this.props.func();
  }
    render() {
    return (
      <div>
      </div>
    )
  }
}
