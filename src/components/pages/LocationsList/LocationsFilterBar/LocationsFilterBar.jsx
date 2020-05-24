import React from 'react';
import { TableRow, Select, MenuItem, Divider } from '@material-ui/core';
import locationsData from 'data/locations/locations.json';
import { StyledTableCell} from '../StylesTableCell/StyledTableCell';
import { useStyles } from './LocationsFilterBar.styles';

export const LocationsFilterBar = props => {
  const classes = useStyles();
  const [cityFilter, stateFilter, countryFilter] = props.filters;
  const [setCityFilter, setStateFilter, setCountryFilter] = props.setters;

  const distinctCities = Array.from(new Set(locationsData.map(location => location.city)));
  const distinctStates = Array.from(new Set(locationsData.map(location => location.stateLong)));
  const distinctCountries = Array.from(new Set(locationsData.map(location => location.countryLong)));

  const handleCityFilterChange = e => setCityFilter(e.target.value);

  const handleStateFilterChange = e => setStateFilter(e.target.value);

  const handleCountryFilterChange = e => setCountryFilter(e.target.value);

  return (
    <TableRow>
      <StyledTableCell>
        <Select className={classes.select} />
      </StyledTableCell>
      <StyledTableCell>
        <Select className={classes.select} value={stateFilter} onChange={handleStateFilterChange}>
          <MenuItem value="placeholder"disabled>State Filters</MenuItem>
          <Divider />
          <MenuItem value={'all'}>All States</MenuItem>
          <Divider />
          {
            distinctStates.map(state => 
              (<MenuItem value={state}>{state}</MenuItem>))
          }
        </Select>
      </StyledTableCell>
      <StyledTableCell>
        <Select className={classes.select} value={countryFilter} onChange={handleCountryFilterChange}>
          <MenuItem value="placeholder"disabled>Country Filters</MenuItem>
          <Divider />
          <MenuItem value={'all'}>All Countries</MenuItem>
          <Divider />
          {
            distinctCountries.map(country => 
              (<MenuItem value={country}>{country}</MenuItem>))
          }
        </Select>
      </StyledTableCell>
    </TableRow>
  );
};
