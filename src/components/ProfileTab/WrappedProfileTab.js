import {useNavigate} from "react-router-dom";
import ProfileTab from "./ProfileTab";

export default function WrappedProfileTab(props) {
  const navigate = useNavigate()

  return <ProfileTab navigate={navigate}/>
}