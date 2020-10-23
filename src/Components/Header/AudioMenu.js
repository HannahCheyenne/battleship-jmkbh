import React, {Component} from 'react';
import Context from '../../Context';
import "./audiomenu.css";

export default class AudioMenu extends Component {
    static contextType = Context;

    /*
    Themes are:
    'ambiance.mp3'
    'game.mp3'
    'menu.mp3'
    'win.mp3'
    'lose.mp3'
    */

    renderMuteButton = () => {
        return (this.context.isMuted === true
        ? <button className="muteButton" onClick={this.context.handleMute}>Unmute</button>
        : <button className="muteButton" onClick={this.context.handleMute}>Mute</button>)
    };

    render() {
        return (
            <div className="dropdown">
                <button className="dropButton">
                    Sound <i>&#9660;</i>
                </button>
                <div className="dropdownContent">
                    <input className="volRange" type="range" step="1" min="-30" max="0" onChange={this.context.handleVolume}/>
                    <br/>
                    {this.renderMuteButton()}
                </div>
            </div>
        )
    }
}