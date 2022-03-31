import React from "react"
import PieChart from "../Chart/Chart";

export default class SurveyStats extends React.Component{
  render() {
    return (<div className="QuestionContainer">
      <h1 className="STitle">{this.props.title}</h1>
      <h3 className="SDescription">{this.props.description}</h3>
      <div className="SForm">
        {this.props.questions.map((q, questionIndex) => (
          <div className="SChart" onChange={this.props.updatePickedAnswerList} key={questionIndex}>
            <PieChart answers={q.answers} question={q.question}/>
          </div>
        ))}
        <div className="Buttons">
          <button className="BackBtn" onClick={this.props.handelBack}>Back</button>
        </div>
      </div>
    </div>)
  }
}