import { createSelector } from 'reselect';

export const selectVenuesStatus = createSelector(
  [state => state.venues.isPending],
  status => status
);

export const selectAllVenues = createSelector(
  [state => state.venues.list],
  venues => venues
);
