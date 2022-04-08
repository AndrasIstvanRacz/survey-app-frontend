import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import SurveysTab from "./components/SurveysTab/SurveysTab";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./AppStyle.css"
import ProfileTab from "./components/ProfileTab/ProfileTab";
import {AuthForm} from "./components/AuthForm/AuthForm";
import CreateSurvey from "./components/CreateSurvey/CreateSurvey";
import WrappedSurveyView from "./components/OpenSurvey/WrappedSurveyView";
import WrappedProfileTab from "./components/ProfileTab/WrappedProfileTab";
import WrappedCreateSurvey from "./components/CreateSurvey/WrappedCreateSurvey";


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
          <Route path="/profile/create" element={<WrappedCreateSurvey/>}/>

          {/*<Route*/}
          {/*  path="*"*/}
          {/*  element={*/}
          {/*    <main style={{ padding: "1rem" }}>*/}
          {/*      <p>There's nothing here!</p>*/}
          {/*    </main>*/}
          {/*  }/>*/}

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
