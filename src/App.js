import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./components/header";
import NavBar from "./components/navbar";
import Footer from './components/footer';

import SceneHome from "./scenes/pageHome";
import SceneBallparks from "./scenes/pageBallparks";
import SceneFranchises from "./scenes/pageFranchises";
import ScenePlayers from "./scenes/pagePlayers";
import SceneGames from "./scenes/pageGames";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <main>
          <Switch>
            <Route path="./" exact component={ SceneHome }/>
            <Route path="/ballparks" component={ SceneBallparks }/>
            <Route path="/ballparks" component={ SceneBallparks }/>
            <Route path="/teams" component={ SceneFranchises }/>
            <Route path="/players" component={ ScenePlayers }/>
            <Route path="/games" component={ SceneGames }/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
