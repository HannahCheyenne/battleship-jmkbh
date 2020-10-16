import React, { Component } from 'react'
import TokenService from "../../../services/token-service";
import AuthApiService from "../../../services/auth-api-service";

import './demogame.css'
//this component will join the demo version of the game against the ai
class DemoGame extends Component{
    handleDemoGame = (ev) => {
        ev.preventDefault();
        const username = "demo"
        const password = "Demopassword123!"
        AuthApiService.postLogin({
          username: username,
          password: password,
        })
          .then((res) => {
            TokenService.saveAuthToken(res.authToken);
            this.props.history.push("/demo");
            window.location.reload()
          })
          .catch((res) => {
            this.setState({ error: res.error });
          });
      };
    render(){
        return(
            <form onSubmit={this.handleDemoGame}><button>Demo Game</button></form>
        )
    }
}

export default DemoGame