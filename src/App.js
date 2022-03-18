import React from "react";
import Navigation from "./components/Navigation/Navigation";
import SurveysTab from "./components/SurveysTab/SurveysTab";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./AppStyle.css"
import CreateTab from "./components/CreateTab/CreateTab";
import {AuthForm} from "./components/AuthForm/AuthForm";
import SurveyView from "./components/OpenSurvey/SurveyView";
import WrappedSurveyView from "./components/OpenSurvey/WrappedSurveyView";


class App extends React.Component {



  render() {
    return (
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<SurveysTab/>}/>
          <Route path="/create" element={<CreateTab/>}/>
          <Route path="/login" element={<AuthForm/>}/>
          <Route path="/view/:type/:id" element={<WrappedSurveyView/>}/>


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
