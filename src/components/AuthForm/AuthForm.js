import React, {Component} from "react";
import {SingUp} from "../SingUp/SingUp";
import {Login} from "../Login/Login";
import "./AuthForm.css";

export class AuthForm extends Component{
  constructor() {
    super();
    this.state={
      isLogin: true,
      redirect: false,
    }
  }

  render(){
  return (
    <div className="Container">
    <div className="FormContainer">
      {this.state.isLogin ? <Login/> : <SingUp/>}
      <p className="FormChangeButton" onClick={this.changeToSingUp}>
        {this.state.isLogin ? "Sing Up" : "Log In"}
      </p>
    </div>
    </div>
  )}

  changeToSingUp = () => {
    this.setState({isLogin: !this.state.isLogin})
  }
}