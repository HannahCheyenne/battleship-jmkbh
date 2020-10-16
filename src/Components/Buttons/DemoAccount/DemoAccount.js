import React, { Component } from 'react'
import TokenService from "../../../services/token-service";
import AuthApiService from "../../../services/auth-api-service";

import './demoaccount.css'
class DemoAccount extends Component{
    state = {
        error:''
    }
    handleDemoAccount = (ev) => {
        ev.preventDefault();
        const username = "demo"
        const password = "Demopassword123!"
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
            <form onSubmit={this.handleDemoAccount}><button>Demo Account</button></form>
        )
    }
}

export default DemoAccount