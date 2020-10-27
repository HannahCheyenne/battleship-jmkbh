//display who won, do you want to play again, do you want to go back
//close button
//button to link to dashboard
//will be able to close out websocket in the future

import React, { Component } from 'react'
import './endgameoverlay.css'
export default class EndGameOverlay extends Component {

    render() {
        console.log("this is running")
    return (<>
      <div className="endGameOverlay">
        Should be rendering something on the page
      </div>
      <button onClick={this.props.func}>Close</button>
      <button>Quit</button>
      </>
    )
  }
}
