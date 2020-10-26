import React, {Component} from 'react';
import Context from '../../Context';
import Audio from '../../services/audio'
import "./audiomenu.css";

export default class AudioMenu extends Component {
    static contextType = Context;

    handleVolume = (e) => {
        e.preventDefault()
        Audio.setVol(e.target.value)
    };

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
                    <input className="volRange" type="range" step="1" min="-30" max="0" onChange={this.handleVolume}/>
                    <br/>
                    {this.renderMuteButton()}
                </div>
            </div>
        );
    };
}