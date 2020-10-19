import React, { Component } from 'react'
import TokenService from "../../../services/token-service";
import AuthApiService from "../../../services/auth-api-service";
import Context from '../../../Context'

import './demoaccount.css'
class DemoAccount extends Component{
    state = {
        error:''
    }

    static contextType = Context;

    handleDemoAccount = (ev) => {
        ev.preventDefault();
        this.context.handleTheme('ambiance.mp3')
        const username = "demo"
        const password = "pass"
        AuthApiService.postLogin({
          username:username,
          password:password,
        })
          .then((res) => {
            TokenService.saveAuthToken(res.authToken);
            this.props.history.push("/dashboard");
          })
          .catch((res) => {
            this.setState({ error: res.error });
          });
      };
    render(){
        return(
            <form onSubmit={this.handleDemoAccount}><button className="demoAccountButton">Demo Account</button></form>
        )
    }
}

export default DemoAccount