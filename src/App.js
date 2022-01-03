import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


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
                <main style={{ padding: "1rem" }}>
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
