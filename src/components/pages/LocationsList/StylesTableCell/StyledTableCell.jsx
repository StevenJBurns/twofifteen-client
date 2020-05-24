import { TableCell, withStyles } from '@material-ui/core';

export const StyledTableCell = withStyles(() => ({
  root: {
    width: '33%',
  },
  head: {
    color: '#F0F0F0',
    fontWeight: 'bold',
    fontSize: '1.2em',
    opacity: 0.9,
  },
  body: {
    color: '#F0F0F0',
    fontSize: '1.1rem',
    opacity: 0.75,
  },
}))(TableCell);