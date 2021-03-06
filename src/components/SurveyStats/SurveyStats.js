import React from "react"
import PieChart from "../Chart/Chart";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./SurveyStatsStyle.css"
import {Link} from "react-router-dom";

export default class SurveyStats extends React.Component {
  render() {
    return (<div className="QuestionContainer">
      <div className="TitleBar">
        <h1>{this.props.title}</h1>
        <EditIcon className="Icon" onClick={this.props.handelEdit}/>
        <DeleteIcon className="Icon" onClick={this.props.handelDelete}/>
      </div>
      {this.props.visibility ? null :
      <a
        className="ShareLink"
        href={"/view/share/" + this.props.id}>
        {"https://survey-app-frontend.vercel.app/view/share/" + this.props.id}
      </a>}
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