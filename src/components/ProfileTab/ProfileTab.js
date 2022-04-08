import React from "react";
import {eraseCookie, getCookie} from "../utils/cookieHandler";
import {Navigate} from "react-router-dom";
import {SurveyCard} from "../SurveyCard/SurveyCard";
import SurveyViewTypes from "../Enum/SurveyViewTypes";
import {getSurveysDataByUser} from "./ProfileTabViewModel";
import BasicSpeedDial from "../BasicSpeedDial/BasicSpeedDial";


class ProfileTab extends React.Component {

  constructor() {
    super();
    this.onNewSurvey = this.onNewSurvey.bind(this)
    this.onLogOut = this.onLogOut.bind(this)
    this.state = {
      surveys: [],
      loggedIn: false,
      userSession: getCookie('userSession') || ""
    }
  }

  componentDidMount() {
    if (this.state.userSession) {
      this.getSurveysByUser(this.state.userSession)
    }

  }

  onLogOut = () => {
    eraseCookie('userSession')
    this.setState({userSession: getCookie('userSession')})
  }

  onNewSurvey = () =>{
    this.props.navigate("/profile/create")
  }


  render() {
    if (!this.state.userSession) {
      return (
        <Navigate to="/login"/>
      );
    }

    return (
      <>
        <div className="SurveyCardContainer">
          {this.state.surveys.map((survey, index) => (
            <SurveyCard
              key={index}
              id={survey.id}
              surveyname={survey.title}
              surveycreator={survey.username}
              description={survey.description}
              type={SurveyViewTypes.Statistics}
            />))}
        </div>
        <BasicSpeedDial handleLogOut={this.onLogOut}
                        handleNewSurvey={this.onNewSurvey}/>
      </>

    );
  }

  getSurveysByUser = () => {
    getSurveysDataByUser(this.state.userSession)
      .then(response => {
        this.setState({surveys: response.data})
        console.log('Get todos: ', this.state.surveys)
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      });
  }

}

export default ProfileTab;