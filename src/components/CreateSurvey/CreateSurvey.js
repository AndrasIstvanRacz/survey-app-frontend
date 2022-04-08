import React from "react"
import "./CreateSurveyStyle.css"
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {addNewSurvey, updateSurvey} from "./CreateSurveyViewModel";
import {getCookie} from "../utils/cookieHandler";
import {Navigate} from "react-router-dom";
import SurveyViewTypes from "../Enum/SurveyViewTypes";


export default class CreateSurvey extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.id || "",
      title: props.title || "New Survey",
      description: props.description || "",
      visibility: props.visibility || false,
      questions: [{newQuestion: "New Question", newAnswers: ["New Answer"]}],
      userSession: getCookie('userSession') || ""
    }
  }

  componentDidMount() {
    if (this.props.params.type === SurveyViewTypes.Edit.name) {
      let questions = []
      this.props.questions.forEach(q => {
        let answer = []
        q.answers.forEach(a => answer.push(a.answer))
        questions.push({newQuestion: q.question, newAnswers: answer})
      })
      this.setState({questions: questions})
    }
  }

  handelChange = (e, newVisibility) => {
    if (newVisibility !== null) {
      this.setState({visibility: newVisibility})
    }
  }

  render() {
    if (!this.state.userSession) {
      return (
        <Navigate to="/login"/>
      );
    }
    return (
      <div className="Container">
        <form className="CreateSurvey" onSubmit={this.onClickSave}>
          <input
            className="NewTitle"
            type="text"
            onChange={e => this.setState(
              {title: e.target.value})}
            value={this.state.title}
            placeholder="Title"/>
          <textarea
            className="NewDescription"
            onChange={e => this.setState(
              {description: e.target.value})}
            value={this.state.description}
            placeholder="Description"/>
          <ToggleButtonGroup
            className="VisibilityBtn"
            size="small"
            color="standard"
            value={this.state.visibility}
            exclusive
            onChange={this.handelChange}>
            <ToggleButton value={false}>Private</ToggleButton>
            <ToggleButton value={true}>Public</ToggleButton>
          </ToggleButtonGroup>
          {this.state.questions.map((question, qIndex) => (
            <div className="NewQuestionContainer" key={qIndex}>
              <textarea
                className="NewQuestion"
                rows='1'
                onChange={e => this.questionOnChange(qIndex, e.target.value)}
                value={question.newQuestion}
                placeholder="Question"/>
              <div className="NewAnswerContainer">
                {question.newAnswers.map((answer, aIndex) => (
                  <input
                    key={aIndex}
                    className="NewAnswer"
                    type="text"
                    onChange={e => this.answerOnChange(qIndex, aIndex, e.target.value)}
                    value={answer}
                    placeholder="Answer"/>))}
                <button className="AddBtn"
                        onClick={e => this.addNewAnswer(e, qIndex)}>
                  <AddIcon/>
                  <p>Add Answer</p>
                </button>
              </div>
            </div>
          ))}

          <button className="AddBtn"
                  onClick={this.addNewQuestion}>
            <AddIcon/>
            <p>Add Question</p>
          </button>
          <div className="Buttons">
            <button className="BackBtn" onClick={this.onClickBack}>Back</button>
            <button className="DoneBtn" type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }

  questionOnChange = (index, question) => {
    let questions = this.state.questions;
    questions[index].newQuestion = question;
    if (questions[index].question === "") {
      questions.splice(index, 1)
    }
    this.setState({questions: questions})
  }

  answerOnChange = (qIndex, aIndex, answer) => {
    let questions = this.state.questions;
    questions[qIndex].newAnswers[aIndex] = answer;
    if (questions[qIndex].newAnswers[aIndex] === "") {
      questions[qIndex].newAnswers.splice(aIndex, 1)
    }
    this.setState({questions: questions})
  }


  addNewQuestion = (e) => {
    e.preventDefault()
    let newQuestions = this.state.questions.concat({newQuestion: "New Question", newAnswers: ["New Answer"]})
    this.setState({questions: newQuestions})
  }

  addNewAnswer = (e, index) => {
    e.preventDefault()
    let questions = this.state.questions;
    let answerList = questions[index].newAnswers
    answerList.push("New Answer")
    questions[index].newAnswers = answerList
    this.setState({questions: questions})
  }

  onClickBack = e => {
    this.props.navigate("/profile");
  }

  onClickSave = e => {
    e.preventDefault()
    if (this.props.params.type === SurveyViewTypes.Edit.name) {
      updateSurvey(this.state.id,
        this.state.title,
        this.state.description,
        this.state.visibility,
        this.state.questions,
        this.state.userSession).then(r => {
        this.props.navigate("/profile");
      })
    } else {
      addNewSurvey(this.state.title,
        this.state.description,
        this.state.visibility,
        this.state.questions,
        this.state.userSession).then(r => {
        this.props.navigate("/profile");
      })
    }
  }
}