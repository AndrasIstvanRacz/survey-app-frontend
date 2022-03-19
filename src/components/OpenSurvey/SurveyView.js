import React from "react";
import "./SurveyViewStyle.css";
import SurveyQuestionTypeFill from "../SurveyQuestionTypeFill/SurveyQuestionTypeFill";
import {getSurveyById, saveAnswers} from "./SurveyViewViewModel";

class SurveyView extends React.Component {

  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      id: props.params.id,
      type: props.params.type,
      pickedAnswers: [],
      survey: {},
      questions: []
    }
  }

  componentDidMount() {
    getSurveyById(this.state.id).then(r => {
      console.log(r)
      this.setState({
        survey: r.data,
        questions: r.data.questions
      })
    }).catch(r => {
      console.log(r)
    })
  }


  handler(event) {
    console.log(event.target.value);
    console.log(event.target.id);
    this.state.pickedAnswers[event.target.id] = event.target.value
    console.log(this.state.pickedAnswers);
  }

  render() {
    return (
      <div className="Container">
        <div className="QuestionContainer">
          <h2 className="STitle">{this.state.survey.title}</h2>
          <p className="SDescription">{this.state.survey.description}</p>
          <form className="SForm">
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
              <button className="DoneBtn" onSubmit={this.onClickDone}>Done</button>
            </div>
          </form>
        </div>
      </div>

    );
  }

  onClickBack = e => {
    this.props.navigate(-1);
  }

  onClickDone = e => {
    saveAnswers(this.state.pickedAnswers).then(r => {
      console.log(r)
      this.props.navigate("/");
    })
  }


}

export default SurveyView;