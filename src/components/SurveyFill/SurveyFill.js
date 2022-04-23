import React from "react";
import "./SurveyFillStyle.css"

export default class SurveyFill extends React.Component {

  render() {
    return (
      <div className="QuestionContainer">
        <h1 className="STitle">{this.props.title}</h1>
        <h3 className="SDescription">{this.props.description}</h3>
        <form className="SForm" onSubmit={this.props.handleDone}>
          {this.props.questions.map((q, questionIndex) => (
            <div onChange={this.props.updatePickedAnswerList} key={questionIndex}>
              <p>{q.question}</p>
              {q.answers.map((a, answerIndex) => (
                <div className="SAnswers" key={answerIndex}>
                  <input
                    className="RadioButton"
                    type="radio"
                    id={questionIndex}
                    name={"answer_" + questionIndex}
                    value={a.answer_id}
                    required={true}/>
                  <label className="Answer">{a.answer}</label>
                </div>))}
            </div>
          ))}
          <div className="Buttons">
            <button className="BackBtn" onClick={this.props.handelBack}>Back</button>
            <button className="DoneBtn" type="submit">Done</button>
          </div>
        </form>
      </div>
    );
  }
}