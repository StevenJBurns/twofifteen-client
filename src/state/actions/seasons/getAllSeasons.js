import axios from 'axios';
import * as seasonActions from 'state/actionTypes/seasons/getSeasons';
import seasonsData from 'data/seasons/seasons.json';;

const getAllSeasonsStart = () => ({
  type: seasonActions.GET_ALL_SEASONS_START,
});

const getAllSeasonsSuccess = list => ({
  type: seasonActions.GET_ALL_SEASONS_SUCCESS,
  payload: list,
});

const getAllSeasonsError = err => ({
  type: seasonActions.GET_ALL_SEASONS_ERROR,
  payload: err,
});

export const getAllSeasonThunk = () => dispatch => {
  dispatch(getAllSeasonsStart());

  setTimeout(() => {
    axios.get('data/seasons.json')
      .then(list => dispatch(getAllSeasonsSuccess(list)));
    }, Math.random() * 1000 + 1000
  );
  
  clearTimeout();
};
