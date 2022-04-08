import React from "react";
import {SurveyCard} from "../SurveyCard/SurveyCard";
import "./SurveysTabStyle.css"
import "./SurveysViewModel"
import {getSurveysData} from "./SurveysViewModel";
import SurveyViewTypes from "../Enum/SurveyViewTypes";
import {LinearProgress} from "@mui/material";

class SurveysTab extends React.Component {

  constructor() {
    super();
    this.state = {
      surveys: [],
      error: false
    }
  }

  componentDidMount() {
    this.getSurveys();
  };

  render() {
    if (this.state.surveys === [] && !this.state.error) {
      return (
        <div>
          <LinearProgress/>
        </div>
      )
    }

    if (this.state.error) {
      return (<div className="Container">
        <div className="QuestionContainer">
          <h1>Something went wrong!</h1>
          <h2>Try to refresh</h2>
          <p>or</p>
          <button className="BackBtn" onClick={this.onClickBack}>Go Back</button>
        </div>
      </div>)
    }

    return (
      <div className="SurveyCardContainer">
        {this.state.surveys.map((survey, index) => (
          <SurveyCard
            key={index}
            id={survey.id}
            surveyname={survey.title}
            surveycreator={survey.username}
            description={survey.description}
            type={SurveyViewTypes.Fill}
          />))}
      </div>
    );
  }

  getSurveys = () => {

    getSurveysData()
      .then(response => {
        this.setState({
          surveys: response.data,
          error: false
        })
      })
      .catch(r => {
        this.setState({error: true})
      });
  }

}

export default SurveysTab;
