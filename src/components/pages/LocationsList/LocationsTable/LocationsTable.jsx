import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableFooter,
} from '@material-ui/core';
import { LocationsFilterBar } from '../LocationsFilterBar/LocationsFilterBar';
import { StyledTableCell } from '../StylesTableCell/StyledTableCell';
import locationsData from 'data/locations/locations.json';
import { useStyles } from './LocationsTable.styles';

export const LocationsTable = () => {
  const classes = useStyles();

  const [locations, setLocations] = React.useState(locationsData);
  const [cityFilter, setCityFilter] = React.useState('placeholder');
  const [stateFilter, setStateFilter] = React.useState('placeholder');
  const [countryFilter, setCountryFilter] = React.useState('placeholder');

  React.useEffect(() => {
    if (stateFilter === 'all' || stateFilter === 'placeholder') {
      setLocations(locationsData);
    } else {
      setLocations(locationsData.filter(location => location.stateLong === stateFilter));
    }
  }, [stateFilter]);

  React.useEffect(() => {
    if (countryFilter === 'all' || countryFilter === 'placeholder') {
      setLocations(locationsData);
    } else {
      setLocations(locationsData.filter(location => location.countryLong === countryFilter));
    }
  }, [countryFilter]);

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.root}>
        <TableHead className={classes.root}>
          <LocationsFilterBar
            filters={[cityFilter, stateFilter, countryFilter]}
            setters={[setCityFilter, setStateFilter, setCountryFilter]}
          />
          <TableRow>
            <StyledTableCell>City or Town</StyledTableCell>
            <StyledTableCell>State or Province</StyledTableCell>
            <StyledTableCell>Country</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            locations.map((location, i) => (
              <TableRow key={i}>
                <StyledTableCell>{location.city}</StyledTableCell>
                <StyledTableCell>{location.stateShort} &bull; {location.stateLong}</StyledTableCell>
                <StyledTableCell>{location.countryShort} &bull; {location.countryLong}</StyledTableCell>
              </TableRow>
            ))
          }
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </TableContainer>
  );
};
