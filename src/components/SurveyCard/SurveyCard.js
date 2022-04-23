import "./SurveyCardStyle.css"
import {Link} from "react-router-dom";

export function SurveyCard(props) {
  return (
    <Link className="SurveyCard" to={`/view/${props.type.name}/${props.id}`}>
      <h2 className="SurveyTitle">{props.surveyname}</h2>
      <p className="SurveyCreator">by {props.surveycreator}</p>
      <h4 className="Description">Description</h4>
      <p className="SurveyDescription">{props.description}</p>
    </Link>
  );
}
