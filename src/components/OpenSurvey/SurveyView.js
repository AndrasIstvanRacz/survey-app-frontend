import React from "react";
import "./SurveyViewStyle.css";
import SurveyQuestionTypeFill from "../SurveyQuestionTypeFill/SurveyQuestionTypeFill";
import {getSurveyById, saveAnswers} from "./SurveyViewViewModel";
import {Navigate} from "react-router-dom";

class SurveyView extends React.Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      id: props.params.id,
      type: props.params.type,
      pickedAnswers: [],
      title: "",
      description: "",
      questions: [],
      error: false
    }
  }

  componentDidMount() {
    getSurveyById(this.state.id).then(r => {
      const survey = r.data;
      this.setState({
        title: survey.title,
        description: survey.description,
        questions: survey.questions,
        error: false
      })
    }).catch(r => {
      this.setState({
        error: true
      })
    })
  }

  handler(event) {
    console.log(event.target.value);
    console.log(event.target.id);
    this.state.pickedAnswers[event.target.id] = event.target.value
    console.log(this.state.pickedAnswers);
  }

  render() {
    if (this.state.title === "" && !this.state.error) {
      return <></>
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
        <div className="QuestionContainer">
          <h2 className="STitle">{this.state.title}</h2>
          <p className="SDescription">{this.state.description}</p>
          <form className="SForm" onSubmit={this.onClickDone}>
            {this.state.questions.map((q, index) => (
              <SurveyQuestionTypeFill
                key={index}
                index={index}
                question={q.question}
                answers={q.answers}
                handler={this.handler}/>
            ))}
            <div className="Buttons">
              <button className="BackBtn" onClick={this.onClickBack}>Back</button>
              <button className="DoneBtn" type="submit">Done</button>
            </div>
          </form>
        </div>
      </div>

    );
  }

  onClickBack = e => {
    e.preventDefault()
    this.props.navigate("/");
  }

  onClickDone = e => {
    e.preventDefault()
    saveAnswers(this.state.pickedAnswers).then(r => {
      this.props.navigate("/");
    })


  }


}

export default SurveyView;