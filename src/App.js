import React from "react";
import Navigation from "./components/Navigation/Navigation";
import HomeTab from "./components/HomeTab/HomeTab";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./AppStyle.css"
import LoginTab from "./components/LoginTab/LoginTab";


class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation/>

          <Routes>
            <Route path="/" element={<HomeTab />}/>
            <Route path="/login" element={<LoginTab />}/>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" , color: "white"}}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
