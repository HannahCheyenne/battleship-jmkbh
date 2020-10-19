import React, { Component } from 'react';
import TokenService from "../../../services/token-service";
import AuthApiService from "../../../services/auth-api-service";
import "./quickgamebutton.css"
import Context from '../../../Context'

class QuickGameButton extends Component{
    state = {
        error:''
    }

    static contextType = Context;

    handleQuickGame = (ev) => {
        ev.preventDefault();
        this.context.handleTheme('menu.mp3')
        const username = "demo"
        const password = "pass"
        AuthApiService.postLogin({
          username:username,
          password:password,
        })
          .then((res) => {
            TokenService.saveAuthToken(res.authToken);
            this.props.history.push("/quickgame");
          })
          .catch((res) => {
            this.setState({ error: res.error });
          });
      };
    render(){
        return(
            <form onSubmit={this.handleQuickGame}><button className="quickGameButton">Quick Game</button></form>
        )
    }
}

export default QuickGameButton