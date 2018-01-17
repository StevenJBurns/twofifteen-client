import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./components/AppHeader";
import NavBar from "./components/AppNavBar";
import Footer from './components/AppFooter';

import PageHome from "./pages/pageHome";
import PageLocations from "./pages/pageLocations";
import PageBallparks from "./pages/pageBallparks";
import PageFranchises from "./pages/pageFranchises";
import PagePlayers from "./pages/pagePlayers";
import PagePlayersR from "./pages/pagePlayersR";
import PageBabeRuth from "./pages/pageBabeRuth"
import PageGames from "./pages/pageGames";
import PageAchievements from "./pages/pageAchievements";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <main>
          <Switch>
            <Route path="/" exact component={ PageHome }/>
            <Route path="/ballparks" component={ PageBallparks }/>
            <Route path="/teams" component={ PageFranchises }/>
            <Route path="/players" exact component={ PagePlayers }/>
            <Route path="/players/r" exact component={ PagePlayersR }/>
            <Route path="/players/babe-ruth" component={ PageBabeRuth }/>
            <Route path="/games" component={ PageGames }/>
            <Route path="/achievements" component={ PageAchievements }/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
