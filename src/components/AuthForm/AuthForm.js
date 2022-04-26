import React, {Component} from "react";
import {SignUp} from "../SignUp/SignUp";
import {Login} from "../Login/Login";
import "./AuthForm.css";

export class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    }
  }

  render() {
    return (
      <div className="Container">
        <div className="FormContainer">
          {this.state.isLogin ? <Login/> : <SignUp/>}
          <p className="FormChangeButton" onClick={this.changeToSingUp}>
            {this.state.isLogin ? "Sign Up" : "Log In"}
          </p>
        </div>
      </div>
    )
  }

  changeToSingUp = () => {
    this.setState({isLogin: !this.state.isLogin})
  }
}

