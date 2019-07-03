import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import AppHeader from "../AppHeader/AppHeader";
// import AppNav from "../AppNav/AppNav";
// import AppFooter from '../AppFooter/AppFooter';

import { PageHome } from "../../pages/PageHome/PageHome";
/* Season list and details pages*/
import { PageSeasonList } from '../../pages/PageSeasonList/PageSeasonList';
import { PageSeasonDetail } from '../../pages/PageSeasonDetail/PageSeasonDetail';
// import { SeasonSelect } from '../../ui/SeasonsSelect/SeasonsSelect';
import PageVenues from "../../pages/PageVenues";
import PageFranchises from "../../pages/PageFranchises/PageFranchises";
import PagePlayers from "../../pages/PagePlayers/PagePlayers";
// import PagePlayer from "../../pages/PagePlayer";
import PageGames from "../../pages/PageGames";
import PageAchievements from "../../pages/PageAchievements/PageAchievements";

/* Stylesheets */
import './App.scss';
import './App-1.css';
import './App-2.css';

export const App = () => (
  <Switch>
    <Route path="/" exact component={ PageHome }/>
    <Route path="/seasons" exact component={ PageSeasonList } />
    <Route path="/seasons/:season" component={ PageSeasonDetail } />
    <Route path="/venues" component={ PageVenues }/>
    <Route path="/franchises" component={ PageFranchises }/>
    <Route path="/people" exact component={ PagePlayers }/>
    {/* <Route path="/player" exact component={ PagePlayer }/> */}
    <Route path="/games" component={ PageGames }/>
    <Route path="/achievements" component={ PageAchievements }/>
  </Switch>
);

export default App;
