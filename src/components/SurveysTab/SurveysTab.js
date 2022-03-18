import React from "react";
import {SurveyCard} from "../SurveyCard/SurveyCard";
import "./SurveysTabStyle.css"
import "./SurveysViewModel"
import {getSurveysData} from "./SurveysViewModel";
import SurveyViewTypes from "../Enum/SurveyViewTypes";

class SurveysTab extends React.Component {

  constructor() {
    super();
    this.state = {
      surveys: []
    }
  }

  componentDidMount() {
    this.getSurveys();
  };

  render() {
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
    let self = this
    getSurveysData()
      .then(function (response) {
        self.setState({surveys: response.data})
        console.log('Get todos: ', self.state.surveys)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}

export default SurveysTab;
