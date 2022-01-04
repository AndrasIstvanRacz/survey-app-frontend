import "./SurveyCardStyle.css"

export function SurveyCard(props){
  return(
    <div className="SurveyCard">
      <h1 className="SurveyTitle">{props.surveyname}</h1>
      <p className="SurveyCreator">by {props.surveycreator}</p>
      <h4 className="Description">Description</h4>
      <p className="SurveyDescription">{props.description}</p>
    </div>
  );
}