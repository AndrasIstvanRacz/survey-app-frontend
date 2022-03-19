import React from "react";
import "./SurveyQuestionTypeFill.css"

class SurveyQuestionTypeFill extends React.Component {


  render() {
    let answers = this.props.answers
    return (
      <div onChange={this.props.handler} key={this.props.index}>
        <p>{this.props.question}</p>
        {answers.map((a, index) => (
          <div className="SAnswers" key={index}>
            <input className="RadioButton" type="radio"
                   id={this.props.index}
                   name={"answer" + this.props.index}
                   value={a.answer_id}
            required={true}/>
            <label className="Answer">{a.answer}</label>
          </div>))}
      </div>
    );
  }
}

export default SurveyQuestionTypeFill