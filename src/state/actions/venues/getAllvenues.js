import axios from 'axios';
import * as actions from 'state/actionTypes/venues/getVenues';
import venuesData from 'data/venues/venues.json';;

export const clearVenuesList = () => ({
  type: actions.CLEAR_VENUES_LIST,
});

const getAllVenuesStart = () => ({
  type: actions.GET_ALL_VENUES_START,
});

const getAllVenuesSuccess = list => ({
  type: actions.GET_ALL_VENUES_SUCCESS,
  payload: list,
});

const getAllVenuesError = err => ({
  type: actions.GET_ALL_VENUESS_ERROR,
  payload: err,
});

export const getAllVenuesThunk = () => dispatch => {
  dispatch(getAllVenuesStart());

  const venuesList = venuesData.map(venue => ({
    id: +venue.id,
    name: venue.name,
  }));

  setTimeout(() => {
    dispatch(getAllVenuesSuccess(venuesList));
    }, Math.random() * 1000 + 1000
  );
  
  clearTimeout();
};
