import React, { Component } from 'react'
import TokenService from "../../../services/token-service";
import AuthApiService from "../../../services/auth-api-service";
import Context from '../../../Context'

import './demoaccount.css'
export default class DemoAccount extends Component{
  static contextType = Context;
    state = {
        error:''
    }

    handleDemoAccount = (ev) => {
        ev.preventDefault();
        this.setState({ error: null });
        const username = "demo"
        const password = "pass"
        AuthApiService.postLogin({
          username:username,
          password:password,
        })
          .then((res) => {
            TokenService.saveAuthToken(res.authToken);
            this.props.history.push('/dashboard');
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