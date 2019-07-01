import React from 'react';
// import { PropTypes } from 'prop-types';
import { SeasonsList } from './SeasonsList';
import './SeasonsSelect.scss';

export const SeasonSelect = props => {
  const { seasons } = props;

  const [selectedSeasons, setSelectedSeasons] = React.useState([]);

  const toggleSeason = year => {
    if (selectedSeasons.includes(year)) {
      setSelectedSeasons(seasons => seasons.filter(season => season !== year));
    } else {
      setSelectedSeasons([...selectedSeasons, year]);
    };
  };

  React.useEffect(() => console.log(selectedSeasons), [selectedSeasons]);

  const selectAllSeasons = () => setSelectedSeasons(seasons);

  const clearSelectedSeasons = () => {
    if (selectedSeasons.length > 0) setSelectedSeasons([]);
  };

  return (
    <section className="seasons-select">
      <SeasonsList seasons={seasons} selectedSeasons={selectedSeasons} toggleSeason={toggleSeason} />
      <div className="seasons-select__button-toolbar">
        <button type="button" className="seasons-select__select-all" onClick={selectAllSeasons}>SELECT ALL SEASONS</button>
        <button type="button" className="seasons-select__clear-all" onClick={clearSelectedSeasons}>CLEAR SELECTED SEASONS</button>
      </div>
    </section>
  );
};

SeasonSelect.propTypes = {};

SeasonSelect.defaultProps = {};

export default SeasonSelect;