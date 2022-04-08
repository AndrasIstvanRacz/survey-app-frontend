import React from "react";
import {deleteSurvey, getSurveyById, getSurveyByIdWithAuth, saveAnswers} from "./SurveyViewViewModel";
import SurveyFill from "../SurveyFill/SurveyFill";
import surveyViewTypes from "../Enum/SurveyViewTypes";
import SurveyStats from "../SurveyStats/SurveyStats";
import {LinearProgress} from "@mui/material";
import {getCookie} from "../utils/cookieHandler";
import WrappedCreateSurvey from "../CreateSurvey/WrappedCreateSurvey";

class SurveyView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.params.id,
      type: props.params.type,
      pickedAnswers: [],
      title: "",
      description: "",
      visibility: null,
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
    } else if (
      this.state.type === surveyViewTypes.Statistics.name ||
      this.state.type === surveyViewTypes.Edit.name) {
      getSurveyByIdWithAuth(this.state.token, this.state.id).then(r => {
        const survey = r.data;
        this.setState({
          title: survey.title,
          description: survey.description,
          visibility: survey.visibility,
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
    if (this.state.title === "" && !this.state.error) {
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

    if (this.state.type === surveyViewTypes.Fill.name) {
      return (<div className="Container">
        <SurveyFill title={this.state.title}
                    description={this.state.description}
                    questions={this.state.questions}
                    updatePickedAnswerList={this.updatePickedAnswerList}
                    handelBack={this.onClickBack}
                    handleDone={this.onClickDone}/>
      </div>)
    }

    if (this.state.type === surveyViewTypes.Statistics.name) {
      return (<div className="Container">
        <SurveyStats
          title={this.state.title}
          description={this.state.description}
          questions={this.state.questions}
          updatePickedAnswerList={this.updatePickedAnswerList}
          handelBack={this.onClickBack}
          handleDone={this.onClickDone}
          handelDelete={this.onClickDelete}
          handelEdit={this.onClickEdit}/>
      </div>)
    }

    if (this.state.type === surveyViewTypes.Edit.name) {
      return (
        <WrappedCreateSurvey
          id={this.state.id}
          title={this.state.title}
          description={this.state.description}
          visibility={this.state.visibility}
          questions={this.state.questions}/>)
    }
  }

  onClickBack = e => {
    this.props.navigate(-1);
  }

  onClickEdit = e => {
    this.props.navigate("/view/edit/" + this.state.id);
    this.setState({type: "edit"})
  }

  onClickDone = e => {
    saveAnswers(this.state.pickedAnswers).then(r => {
      this.props.navigate("/");
    })
  }

  onClickDelete = e => {
    deleteSurvey(this.state.token, this.state.id).then(r => {
      this.props.navigate("/profile");
    })
  }
}

export default SurveyView;