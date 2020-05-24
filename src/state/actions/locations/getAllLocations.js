import * as actionTypes from '../../actionTypes/locations/locations';
import locationsData from 'data/locations/locations.json';

const getAllLocationsStart = () => ({
  type: actionTypes.GET_ALL_LOCATIONS_START,
});

const getAllLocationsSuccess = list => ({
  type: actionTypes.GET_ALL_LOCATIONS_SUCCESS,
  payload: list,
});

const getAllLocationsError = err => ({
  type: actionTypes.GET_ALL_LOCATIONS_ERROR,
  payload: err,
});

export const getAllLocationsThunk = () => dispatch => {
  dispatch(getAllLocationsStart());

  setTimeout(() => {
    dispatch(getAllLocationsSuccess(locationsData))
  }, Math.random() + 1000);

  clearTimeout();
};