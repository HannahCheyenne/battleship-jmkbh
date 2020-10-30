import React, { Component } from "react";
import boom from '../../Images/boom.png'
import miss from '../../Images/miss.png'
import './boardrender.css'

export default class Board extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleDisable = this.handleDisable.bind(this);
        this.state = {
          id: '',
          disabled:false,
        };
      }
      handleClick(event) {
        console.log(this.state.disabled)
        this.setState({
          id: event.target.id,
        },
        () => this.props.playerMove(this.state.id)
        );
      }
      handleDisable(event) {
        let id = event.target.id
        if(id) {
          this.setState({
            disabled:!this.state.disabled
          }, this.props.celldisabled(this.state.disabled))
        }
      }

        //! -- New value for miss (9)
  render() {
      const { test } = this.props
      const H = <img className ="image" src={boom} alt="hit"/>
        const M = <img className= 'image' src={miss} alt="miss"/>
    return (<>
      <div className="boardContainer">
        <div className="board">
            {test[0].map((i, index) => (<button disabled={this.state.disabled} onClick={this.handleClick} key={`0.${index}`} id={`0.${index}`} value={i} className="slot" >{i === 9 ? M:
                i === 8 ? H: ""}</button>))}
            {test[1].map((i, index) => (<button disabled={this.state.disabled} onClick={this.handleClick} key={`1.${index}`} id={`1.${index}`} value={i} className="slot" >{i === 9 ? M:
                i === 8 ? H: ""}</button>))}
            {test[2].map((i, index) => (<button disabled={this.state.disabled} onClick={this.handleClick} key={`2.${index}`} id={`2.${index}`} value={i} className="slot" >{i === 9 ? M:
                i === 8 ? H: ""}</button>))}
            {test[3].map((i, index) => (<button disabled={this.state.disabled} onClick={this.handleClick} key={`3.${index}`} id={`3.${index}`} value={i} className="slot" >{i === 9 ? M:
                i === 8 ? H: ""}</button>))}
            {test[4].map((i, index) => (<button disabled={this.state.disabled} onClick={this.handleClick} key={`4.${index}`} id={`4.${index}`} value={i} className="slot" >{i === 9 ? M:
                i === 8 ? H: ""}</button>))}
            {test[5].map((i, index) => (<button disabled={this.state.disabled} onClick={this.handleClick} key={`5.${index}`} id={`5.${index}`} value={i} className="slot" >{i === 9 ? M:
                i === 8 ? H: ""}</button>))}
            {test[6].map((i, index) => (<button disabled={this.state.disabled} onClick={this.handleClick} key={`6.${index}`} id={`6.${index}`} value={i} className="slot" >{i === 9 ? M:
                i === 8 ? H: ""}</button>))}
            {test[7].map((i, index) => (<button disabled={this.state.disabled} onClick={this.handleClick} key={`7.${index}`} id={`7.${index}`} value={i} className="slot" >{i === 9 ? M:
                i === 8 ? H: ""}</button>))}
        </div>
      </div>
      </>
    );
  }
}
