import React from "react";
import {SurveyCard} from "../SurveyCard/SurveyCard";
import "./HomeTabStyle.css"

class HomeTab extends React.Component {

  render() {
    return (
      <div className="SurveyCardContainer">
        <SurveyCard surveyname="TestSurvey1"
                    description="Test description1 asdf jj ajdh neafnr uanfnauf nuaewui aeanweu aefnaiwenf aena wenaweneu naenfeaue fndnfuae andfnei a ean ua naenan eu ae nu nena."
                    surveycreator="Bob1"/>
        <SurveyCard surveyname="TestSurvey2"
                    description="Test description2"
                    surveycreator="Bob2"/>
        <SurveyCard surveyname="TestSurvey3"
                    description="Test description3"
                    surveycreator="Bob3"/>
        <SurveyCard surveyname="TestSurvey1"
                    description="Test description1"
                    surveycreator="Bob1"/>
        <SurveyCard surveyname="TestSurvey2"
                    description="Test description2"
                    surveycreator="Bob2"/>
        <SurveyCard surveyname="TestSurvey3"
                    description="Test description3"
                    surveycreator="Bob3"/>
        <SurveyCard surveyname="TestSurvey1"
                    description="Test description1"
                    surveycreator="Bob1"/>
        <SurveyCard surveyname="TestSurvey2"
                    description="Test description2dfhajskdhfakjsdhgjkafhgahdfjghad;fghadujfhgjadfhgjadhfgj;had;fjghadfgh;ujarhgujadfgjhadfghjiafhgujiadfhgiujadfhguiadfhgujadhfguadhfuighdaufighauidfhgidahfguihadfghd;ifghadi;fhgijadfhg;iadhfg;jiadhfg;jiadhfijghadijkfgha;djikfgha;ijdfhguae;rghuiadhguiadfghuiaerhguiafuighaui;erghauerhgauirhga"
                    surveycreator="Bob2"/>
        <SurveyCard surveyname="TestSurvey3"
                    description="Test description3"
                    surveycreator="Bob3"/>
        <SurveyCard surveyname="TestSurvey1"
                    description="Test description1"
                    surveycreator="Bob1"/>
        <SurveyCard surveyname="TestSurvey2"
                    description="Test description2"
                    surveycreator="Bob2"/>
        <SurveyCard surveyname="TestSurvey3"
                    description="Test description3"
                    surveycreator="Bob3"/>
      </div>
    );
  }
}

export default HomeTab;