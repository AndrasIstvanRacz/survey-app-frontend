import {useParams, useNavigate} from "react-router-dom";
import SurveyView from "./SurveyView";

export default function WrappedSurveyView(props) {
  const params = useParams()
  const navigate = useNavigate()

  return <SurveyView params={params} navigate={navigate}/>
}