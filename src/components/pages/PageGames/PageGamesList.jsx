import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Page from '../Page/Page';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
  },
  ul: {
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    minWidth: 320,
    maxWidth: 640,
  },
  card: {
    width: 144,
    height: 72,
    margin: '0.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    cursor: 'default',
  },
})

export const PageGamesList = () => {
  const styles = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const {getMonth, getDate, getFullYear} = selectedDate;

  const datepickerProps = {
    variant: 'inline',
    value: Date(selectedDate),
    minDate: new Date(1873,0,1),
    maxDate: new Date(),
    openTo: 'year',
    autoOk: true,
    disableFuture: true,
    animateYearScrolling: true,
    onChange: date => setSelectedDate(date._d),
  };

  // React.useEffect(() => console.log(selectedDate), [selectedDate]);

  // const formattedDate = `${getDate()} - ${getMonth()} - ${getFullYear()}`;
  if (selectedDate) console.log('selectedDate: ', selectedDate);
  

  return (
    <Page>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker {...datepickerProps} />
      </MuiPickersUtilsProvider>
      <h2>SELECTED DATE: {selectedDate.toDateString().slice(3)}</h2>
      <h3>REGULAR SEASON</h3>
      <ul>
        <li>No Games</li>
      </ul>
      <h3>ALL-STAR GAME</h3>
      <ul>
        <li>No Games</li>
      </ul>
      <h3>POST-SEASON</h3>
      <ul>
        <li>No Games</li>
      </ul>
    </Page>
  );
};

export default PageGamesList;