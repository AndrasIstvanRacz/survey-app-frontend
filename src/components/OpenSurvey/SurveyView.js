import React from "react";
import {getSurveyById, getSurveyByIdWithAuth, saveAnswers} from "./SurveyViewViewModel";
import SurveyFill from "../SurveyFill/SurveyFill";
import surveyViewTypes from "../Enum/SurveyViewTypes";
import SurveyStats from "../SurveyStats/SurveyStats";
import {LinearProgress, Skeleton} from "@mui/material";
import {getCookie} from "../utils/cookieHandler";

class SurveyView extends React.Component {

  constructor(props) {
    super(props);
    this.updatePickedAnswerList = this.updatePickedAnswerList.bind(this)
    this.onClickBack = this.onClickBack.bind(this)
    this.onClickDone = this.onClickDone.bind(this)
    this.state = {
      id: props.params.id,
      type: props.params.type,
      pickedAnswers: [],
      title: "",
      description: "",
      questions: [],
      error: false,
      guest: true,
      token: getCookie("userSession")
    }
  }

  componentDidMount() {
    if (this.state.type === surveyViewTypes.Fill.name) {
      getSurveyById(this.state.id).then(r => {
        const survey = r.data;
        this.setState({
          title: survey.title,
          description: survey.description,
          questions: survey.questions,
          error: false,
          guest: true
        })
      }).catch(r => {
        this.setState({
          error: true
        })
      })
    }
    else if(this.state.type === surveyViewTypes.Statistics.name){
      getSurveyByIdWithAuth(this.state.token, this.state.id).then(r => {
        const survey = r.data;
        this.setState({
          title: survey.title,
          description: survey.description,
          questions: survey.questions,
          error: false,
          guest: false
        })
      }).catch(r => {
        this.setState({
          error: true
        })
      })
    }




  }

  updatePickedAnswerList = (event) => {
    this.state.pickedAnswers[event.target.id] = event.target.value
  }

  render() {
    if (this.state.title === "" || this.state.error) {
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
      <div className="Container">
        {this.state.guest ?
          <SurveyFill title={this.state.title}
                      description={this.state.description}
                      questions={this.state.questions}
                      updatePickedAnswerList={this.updatePickedAnswerList}
                      handelBack={this.onClickBack}
                      handleDone={this.onClickDone}/>
          :
          <SurveyStats title={this.state.title}
                       description={this.state.description}
                       questions={this.state.questions}
                       updatePickedAnswerList={this.updatePickedAnswerList}
                       handelBack={this.onClickBack}
                       handleDone={this.onClickDone}/>
        }
      </div>
    );


  }

  onClickBack = e => {
    e.preventDefault()
    this.props.navigate(-1);
  }

  onClickDone = e => {
    e.preventDefault()
    saveAnswers(this.state.pickedAnswers).then(r => {
      this.props.navigate("/");
    })
  }
}

export default SurveyView;