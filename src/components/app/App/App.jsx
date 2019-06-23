import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppHeader from "../AppHeader/AppHeader";
import AppNav from "../AppNav/AppNav";
import AppFooter from '../AppFooter/AppFooter';

import PageHome from "../../pages/PageHome/PageHome";
import PageVenues from "../../pages/PageVenues";
import PageFranchises from "../../pages/PageFranchises/PageFranchises";
import PagePlayers from "../../pages/PagePlayers/PagePlayers";
import PagePlayer from "../../pages/PagePlayer";
import PageGames from "../../pages/PageGames";
import PageAchievements from "../../pages/PageAchievements/PageAchievements";

/* Stylesheets */
import './App-1.css';
import './App-2.css';

export const App = props => (
  <Switch>
    <Route path="/" exact component={ PageHome }/>
    <Route path="/ballparks" component={ PageVenues }/>
    <Route path="/teams" component={ PageFranchises }/>
    <Route path="/players" exact component={ PagePlayers }/>
    <Route path="/player" exact component={ PagePlayer }/>
    <Route path="/games" component={ PageGames }/>
    <Route path="/achievements" component={ PageAchievements }/>
  </Switch>
);

export default App;
