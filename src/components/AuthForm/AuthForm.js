import React, {Component} from "react";
import {SingUp} from "../SingUp/SingUp";
import {Login} from "../Login/Login";
import "./AuthForm.css";
import {Redirect} from "react-router-dom";

export class AuthForm extends Component{
  constructor() {
    super();
    this.state={
      isLogin: true,
      redirect: false,
      changeRedirect: this.changeRedirect.bind(this)
    }
  }

  changeRedirect(asd){
    alert('We pass argument from Child to Parent: ');
    this.setState({redirect : asd});
  }

  render(){
    let changeRedirect = this.changeRedirect;
    if (this.state.redirect){
      return <Redirect to={{
        pathname:'/create'}}/>
    }

  return (
    <div className="Container">
    <div className="FormContainer">
      {this.state.isLogin ? <Login/> : <SingUp changeRedirect={changeRedirect.bind(this)}/>}
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