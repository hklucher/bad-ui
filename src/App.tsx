import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";
import AppContainer from "./components/layout/AppContainer";
import NavBar from "./components/layout/NavBar";
import PhoneShuffle from "./components/phone_shuffle/PhoneShuffle";
import ScrabbleValidationForm from "./components/scrabble_validator/ScrabbleValidationForm";

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <NavBar />

        <Switch>
          <Route path="/shuffle_phone">
            <PhoneShuffle />
          </Route>

          <Route path="/scrabble_validator">
            <ScrabbleValidationForm />
          </Route>

          <Route path="/">
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
