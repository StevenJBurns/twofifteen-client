import Axios from "axios";

export const getAllVenues = () => Axios.get('date/venues.json').then(venues => console.log(venues));

export const getVenuesRange = () => {};

export const getVenueById = id => {
  Axios.get('data/venues.json')
    .then(venues => venues.find(venue => venue.id === id));
};
