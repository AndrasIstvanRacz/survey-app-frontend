import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

import {BrowserRouter, Route, Routes} from "react-router-dom";


class App extends React.Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />}/>
              <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
