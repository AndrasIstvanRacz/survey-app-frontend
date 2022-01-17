import React from "react";
import {Link} from "react-router-dom";
import "./NavigationStyle.css"


class Navigation extends React.Component {

  myFunction =()=> {
    let x = document.getElementById("NavButtonsContainer");
    if (x.className === "NavButtonsContainer") {
      x.className += " responsive";
    } else {
      x.className = "NavButtonsContainer";
    }
  }

  render() {
    return (
        <div className="NavButtonsContainer" id="NavButtonsContainer">

          <img className="Logo" src={require("./icons/logo.png")} alt="description of image" height={32} width={32}/>


          <Link className="NavButtons" to="/">Home</Link>
          <Link className="NavButtons" to="/">placeholder</Link>
          <Link className="LoginButton" to="/login">Log In</Link>
          <a className="Menu" onClick={this.myFunction}>
            <img className="MenuImage" src={require("./icons/dots.png")}/>
          </a>
        </div>
    );
  }
}

export default Navigation;