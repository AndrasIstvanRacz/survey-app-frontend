import React from "react";
import {Link} from "react-router-dom";
import "./NavigationStyle.css"
import {getCookie} from "../utils/cookieHandler";
import {SingUp} from "../SingUp/SingUp";

class Navigation extends React.Component {

  DropDownOnClick = () => {
    let element = document.getElementById("navbarLinks");
    if (element.className === "NavbarLinks") {
      element.className += " active";
    } else {
      element.className = "NavbarLinks";
    }
  }

  DropDownCloseOnClick = () => {
    let element = document.getElementById("navbarLinks");
    if (element.className === "NavbarLinks active") {
      element.className = "NavbarLinks";
    }
  }

  render() {
    return (
      <div className="Navbar">
        <div className="Title">
          <img className="Logo" src={require("./icon/logo.png")} alt="survey app"/>
          Survey App
        </div>
        <div className="ToggleButton" onClick={this.DropDownOnClick}>
          <span className="Bar"/>
          <span className="Bar"/>
          <span className="Bar"/>
        </div>
        <div className="NavbarLinks" id="navbarLinks">
          <Link to="/" onClick={this.DropDownCloseOnClick}>Surveys</Link>
          <Link to="/create" onClick={this.DropDownCloseOnClick}>Create</Link>
        </div>
      </div>
    );
  }
}

export default Navigation;