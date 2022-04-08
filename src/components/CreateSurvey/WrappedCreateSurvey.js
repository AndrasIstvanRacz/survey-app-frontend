import {useParams, useNavigate} from "react-router-dom";

import CreateSurvey from "./CreateSurvey";

export default function WrappedCreateSurvey(props) {
  const params = useParams()
  const navigate = useNavigate()

  return <CreateSurvey
    params={params}
    navigate={navigate}
    id={props.id}
    title={props.title}
    description={props.description}
    visibility={props.visibility}
    questions={props.questions}/>
}