import { createSelector } from 'reselect';

export const selectAllSeasons = createSelector(
  [state => state.seasons],
  seasons => seasons
);
