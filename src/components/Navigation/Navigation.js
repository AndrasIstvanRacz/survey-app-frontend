import React from "react";
import {Link} from "react-router-dom";
import "./NavigationStyle.css"
import Logo from "./icon/logo.png"


class Navigation extends React.Component {

  DropDownOnClick = () => {
    let x = document.getElementById("navbarLinks");

    if (x.className === "NavbarLinks") {
      x.className += " active";
    } else {
      x.className = "NavbarLinks";
    }
  }

  DropDownCloseOnClick = () => {
    let x = document.getElementById("navbarLinks");
    if (x.className === "NavbarLinks active") {
      x.className = "NavbarLinks";
    }
  }

  render() {
    return (
      <div className="Navbar">

        {/*<img className="Logo" src={require("./icon/logo.png")} alt="description of image" height={32} width={32}/>*/}
        <div className="Title">
          <img className="Logo" src={require("./icon/logo.png")} alt="survey app"/>
          Survey App
        </div>
        <div className="ToggleButton" onClick={this.DropDownOnClick}>
          <span className="Bar"></span>
          <span className="Bar"></span>
          <span className="Bar"></span>
        </div>
        <div className="NavbarLinks" id="navbarLinks">
          <Link to="/" onClick={this.DropDownCloseOnClick}>Home</Link>
          <Link to="/" onClick={this.DropDownCloseOnClick}>Surveys</Link>
          <Link to="/login" onClick={this.DropDownCloseOnClick}>Log In</Link>
        </div>


      </div>
    );
  }
}

export default Navigation;