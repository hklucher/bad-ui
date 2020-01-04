import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import AppContainer from "./components/layout/AppContainer";
import NavBar from "./components/layout/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <NavBar />

        <Switch>
          <Route path="/shuffle_phone">
            <div>Hello world</div>
          </Route>

          <Route path="/">
            <div>Goodbye world</div>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
