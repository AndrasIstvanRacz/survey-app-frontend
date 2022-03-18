import React from "react";
import {eraseCookie, getCookie} from "../utils/cookieHandler";
import {Navigate} from "react-router-dom";


class CreateTab extends React.Component {

  constructor() {
    super();
    this.state = {
      userSession: getCookie('userSession')
    }
  }

  onLogOut = () => {
    eraseCookie('userSession')
    this.setState({userSession: getCookie('userSession')})
  }

  render() {
    return (
      <div className="Container">
        {this.state.userSession ?
          <div>Sikerult</div>
          :
          <Navigate to="/login"/>
          }
        <button onClick={this.onLogOut}>Log Out</button>
      </div>

    );
  }


}

export default CreateTab;