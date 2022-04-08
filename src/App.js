import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import SurveysTab from "./components/SurveysTab/SurveysTab";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./AppStyle.css"
import {AuthForm} from "./components/AuthForm/AuthForm";
import WrappedSurveyView from "./components/OpenSurvey/WrappedSurveyView";
import WrappedProfileTab from "./components/ProfileTab/WrappedProfileTab";
import WrappedCreateSurvey from "./components/CreateSurvey/WrappedCreateSurvey";
import Nothing from "./components/Nothing/Nothing";


class App extends React.Component {



  render() {
    return (
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<SurveysTab/>}/>
          <Route path="/profile" element={<WrappedProfileTab/>}/>
          <Route path="/login" element={<AuthForm/>}/>
          <Route path="/view/:type/:id" element={<WrappedSurveyView/>}/>
          <Route path="/profile/:type" element={<WrappedCreateSurvey/>}/>
          <Route path="*" element={<Nothing/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
