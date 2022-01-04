import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./AppStyle.css"


class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home />}/>
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
