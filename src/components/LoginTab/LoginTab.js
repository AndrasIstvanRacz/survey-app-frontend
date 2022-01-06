import React from "react";
import "./LoginTabStyle.css"
import {Login} from "../Login/Login";
import {SingUp} from "../SingUp/SingUp";


class LoginTab extends React.Component{

  constructor() {
    super();
    this.state={
      isLogin: true
    }
  }

  render() {
    return (
      <div className="Container">
        {this.state.isLogin ? <Login/> : <SingUp/>}
        <p className="FormChangeButton" onClick={this.changeToSingUp}>
          {this.state.isLogin ? "Sing Up" : "Log In"}
        </p>
      </div>
    );
  }

  changeToSingUp = () => {
    this.setState({isLogin: !this.state.isLogin})
  }
}
export default LoginTab;