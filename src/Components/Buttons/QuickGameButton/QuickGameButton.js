import React, { Component } from 'react';
import TokenService from "../../../services/token-service";
import AuthApiService from "../../../services/auth-api-service";
import "./quickgamebutton.css"

class QuickGameButton extends Component{
    state = {
        error:''
    }
    handleQuickGame = (ev) => {
        ev.preventDefault();
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
            <form onSubmit={this.handleQuickGame}><button>Quick Game</button></form>
        )
    }
}

export default QuickGameButton