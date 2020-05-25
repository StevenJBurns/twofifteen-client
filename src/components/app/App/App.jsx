import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageHome } from "components/pages/Home/PageHome";
import { SeasonsList } from '../../pages/SeasonsList/SeasonList';
import { SeasonsDetail } from '../../pages/SeasonsDetail/SeasonsDetail';
import { PageVenues } from "../../pages/VenuesList/PageVenueList";
import { PageFranchiseList, PageFranchiseDetail } from "../../pages/FranchisesList";
import { PeopleList } from "components/pages/PeopleList/PeopleList";
import { PeopleDetail } from "components/pages/PeopleDetail/PeopleDetail";
import { PageGamesList } from "../../pages/GamesList/PageGamesList";
import { AchievementsList } from "components/pages/AchievementsList/AchievementsList";
import { LocationsList } from 'components/pages/LocationsList/LocationsList';
import { Page404 } from 'components/pages/Page404/Page404';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>
      <Route exact path="/seasons">
        <SeasonsList />
      </Route>
      <Route exact path="/seasons/:year">
        <SeasonsDetail />
      </Route>
      <Route exact path="/venues">
        <PageVenues />
      </Route>
      <Route exact path="/franchises">
        <PageFranchiseList />
      </Route>
      <Route exact path="/franchises/:id">
        <PageFranchiseDetail />
      </Route>
      <Route exact path="/people">
        <PeopleList />
      </Route>
      <Route exact path="/people/:id">
        <PeopleDetail />
      </Route>
      <Route exact path="/games">
        <PageGamesList />
      </Route>
      <Route exact path="/achievements">
        <AchievementsList />
      </Route>
      <Route exact path="/games">
        <PageGamesList />
      </Route>
      <Route exact path="/locations">
        <LocationsList />
      </Route>
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
};
